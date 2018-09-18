var inquirer = require('inquirer');
var mysql = require('mysql');

var amountOwed;
var updateSales;

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '19860927',
	database: 'bamazon_db'
});

//Establish Connection
connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
});

//FUNCTIONS
//=============================================================================

//Displays all items available in store and then calls the place order function
function showProducts(){
	connection.query('SELECT * FROM products', function(err, res){
		if (err) throw err;
		console.log('=================================================');
		console.log('=================Items in Store==================');
		console.log('=================================================');

		for(i=0;i<res.length;i++){
			console.log('Item ID:' + res[i].id + ' Product Name: ' + res[i].product_name + ' Price: ' + '$' + res[i].price + '(Quantity left: ' + res[i].stock_quantity + ')')
		}
        console.log('=================================================');
        placeOrder();
        })
        
}


//Prompts the user to place an order, fulfills the order, and then calls the new order function
function placeOrder(){
	inquirer.prompt([{
		name: 'selectId',
		message: 'Please enter the ID of the product you wish to purchase',
		validate: function(value){
			var valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return 'Please enter a valid Product ID'
		}
	},{
		name:'selectQuantity',
		message: 'How many of this product would you like to order?',
		validate: function(value){
			var valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return 'Please enter a numerical value'
		}
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE id = ?', [answer.selectId], function(err, res){
		if(answer.selectQuantity > res[0].stock_quantity){
			console.log('Insufficient Quantity');
			console.log('This order has been cancelled');
			console.log('');
			newOrder();
		}
		else{
			amountOwed = res[0].price * answer.selectQuantity;
			currentDepartment = res[0].department_name;
			console.log('Thanks for your order');
			console.log('You owe $' + amountOwed);
			console.log('');
			//update products table
			connection.query('UPDATE products SET ? Where ?', [{
				stock_quantity: res[0].stock_quantity - answer.selectQuantity
			},{
				id: answer.selectId
			}], function(err, res){});
			//update departments table
			newOrder();
		}
	})

}, function(err, res){})
};

//Allows the user to place a new order or end the connection
function newOrder(){
    
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
            showProducts();
			
		}
		else{
			console.log('Thank you for shopping at Bamazon!');
			connection.end();
		}
	})
};



//Call the original function (all other functions are called within this function)
//======================================================================
showProducts();



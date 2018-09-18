REATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) default 0,
	stock_quantity INT default 0,
	PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('kd 9', 'basketball Shoes', 99, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Adidas Crazy 8', 'basketball Shoes', 129.95, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('harden 4', 'basketball Shoes', 119.95, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nike kobe 5', 'basketball Shoes', 119.95, 33);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nike Men\'s Running Tee', 'Apparel', 70, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nike Men\'s Running Tank', 'Apparel', 45, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nike Women\'s Running Tee', 'Apparel', 75, 40);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nike Women\'s Running Tank', 'Apparel', 50, 3);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Hydration Belt', 'Accessories', 55, 4);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Headlamp', 'Accessories', 25, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('GPS Watch', 'Electronics', 299.99, 2);

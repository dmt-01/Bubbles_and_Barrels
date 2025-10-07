INSERT INTO Category (name, is_alcoholised, image, description) VALUES
('Bières', TRUE, 'beer.jpg', 'Bières artisanales et classiques'),
('Vins', TRUE, 'wine.jpg', 'Sélection de vins rouges, blancs et rosés'),
('Sodas', FALSE, 'soda.jpg', 'Boissons gazeuses sans alcool'),
('Jus', FALSE, 'juice.jpg', 'Jus de fruits naturels'),
('Spiritueux', TRUE, 'spirit.jpg', 'Alcools forts et digestifs');

-- Adresses
INSERT INTO Address (city, zipcode, street, complement, country) VALUES
('Paris', '75001', '12 Rue de Rivoli', NULL, 'France'),
('Lyon', '69002', '5 Quai Tilsitt', 'Bâtiment B', 'France'),
('Marseille', '13001', '8 Rue Saint-Ferréol', NULL, 'France');

-- Utilisateurs
INSERT INTO Users (email, last_name, first_name, phone, password, address_id) VALUES
('alice.dupont@example.com', 'Dupont', 'Alice', '0601020304', 'password123', 1),
('benjamin.martin@example.com', 'Martin', 'Benjamin', '0611223344', 'azerty456', 2),
('claire.rousseau@example.com', 'Rousseau', 'Claire', '0622334455', 'monmdp789', 3);

-- Produits
INSERT INTO Product (image, price, stock, name, volume, brand, category_id) VALUES
('heineken.jpg', 2.50, 200, 'Heineken', 33, 'Heineken', 1),
('chardonnay.jpg', 12.90, 50, 'Chardonnay', 750, 'Bourgogne', 2),
('coca.jpg', 1.80, 300, 'Coca-Cola', 33, 'Coca-Cola', 3),
('orange_juice.jpg', 2.20, 150, 'Jus d''orange', 1000, 'Tropicana', 4),
('whisky_jb.jpg', 25.00, 40, 'Whisky J&B', 700, 'J&B', 5),
('rosé_provence.jpg', 9.50, 60, 'Rosé de Provence', 750, 'Côtes de Provence', 2);

-- Promotions
INSERT INTO Sale (discount, product_id) VALUES
(10, 1),  -- 10% sur Heineken
(20, 3);  -- 20% sur Coca-Cola

-- Commandes
INSERT INTO Orders (is_confirmed, order_date, delivery_date, user_id) VALUES
(TRUE, '2025-10-01', '2025-10-03', 1),
(FALSE, '2025-10-05', NULL, 2);

-- Produits commandés
INSERT INTO Command_product (order_id, product_id, quantity) VALUES
(1, 1, 6),   -- Alice commande 6 Heineken
(1, 3, 3),   -- et 3 Coca-Cola
(2, 2, 2),   -- Benjamin commande 2 Chardonnay
(2, 4, 1);   -- et 1 Jus d’orange

-- =====================
-- CATEGORIES
-- =====================
INSERT INTO Category (name, is_alcoholised, image, description) VALUES
('Bières', TRUE, 'beer.jpg', 'Bières artisanales et classiques'),
('Vins', TRUE, 'wine.jpg', 'Sélection de vins rouges, blancs et rosés'),
('Sodas', FALSE, 'soda.jpg', 'Boissons gazeuses sans alcool'),
('Jus', FALSE, 'juice.jpg', 'Jus de fruits naturels'),
('Spiritueux', TRUE, 'spirit.jpg', 'Alcools forts et digestifs'),
('Eaux', FALSE, 'water.jpg', 'Eaux plates et gazeuses'),
('Cocktails sans alcool', FALSE, 'mocktail.jpg', 'Cocktails fruités sans alcool'),
('Cidres', TRUE, 'cider.jpg', 'Boissons à base de pommes'),
('Boissons énergisantes', FALSE, 'energy.jpg', 'Boissons stimulantes'),
('Liqueurs', TRUE, 'liqueur.jpg', 'Liqueurs douces et sucrées');

-- =====================
-- ADRESSES
-- =====================
INSERT INTO Address (city, zipcode, street, complement, country) VALUES
('Paris', '75001', '12 Rue de Rivoli', NULL, 'France'),
('Lyon', '69002', '5 Quai Tilsitt', 'Bâtiment B', 'France'),
('Marseille', '13001', '8 Rue Saint-Ferréol', NULL, 'France'),
('Bordeaux', '33000', '10 Rue Sainte-Catherine', NULL, 'France'),
('Nice', '06000', '22 Avenue Jean Médecin', NULL, 'France'),
('Toulouse', '31000', '14 Place du Capitole', NULL, 'France'),
('Lille', '59000', '5 Rue Faidherbe', NULL, 'France'),
('Strasbourg', '67000', '3 Rue du Vieux Marché', 'Apt 2', 'France'),
('Rennes', '35000', '18 Rue de la Monnaie', NULL, 'France'),
('Nantes', '44000', '7 Rue Crébillon', NULL, 'France');

-- =====================
-- UTILISATEURS
-- =====================
INSERT INTO Users (email, last_name, first_name, phone, password, address_id) VALUES
('alice.dupont@example.com', 'Dupont', 'Alice', '0601020304', 'password123', 1),
('benjamin.martin@example.com', 'Martin', 'Benjamin', '0611223344', 'azerty456', 2),
('claire.rousseau@example.com', 'Rousseau', 'Claire', '0622334455', 'monmdp789', 3),
('david.lefevre@example.com', 'Lefevre', 'David', '0633445566', 'securepass', 4),
('emma.moreau@example.com', 'Moreau', 'Emma', '0644556677', 'strongpass', 5),
('florian.girard@example.com', 'Girard', 'Florian', '0655667788', 'test1234', 6),
('julie.benoit@example.com', 'Benoit', 'Julie', '0666778899', 'helloWorld', 7),
('kevin.fontaine@example.com', 'Fontaine', 'Kevin', '0677889900', 'pass!2024', 8),
('lucie.renard@example.com', 'Renard', 'Lucie', '0688990011', 'mypassword', 9),
('maxime.perez@example.com', 'Perez', 'Maxime', '0699001122', 'perezpass', 10);

-- =====================
-- PRODUITS
-- =====================
INSERT INTO Product (image, price, stock, name, volume, brand, category_id) VALUES
('heineken.jpg', 2.50, 200, 'Heineken', 33, 'Heineken', 1),
('chardonnay.jpg', 12.90, 50, 'Chardonnay', 750, 'Bourgogne', 2),
('coca.jpg', 1.80, 300, 'Coca-Cola', 33, 'Coca-Cola', 3),
('orange_juice.jpg', 2.20, 150, 'Jus d''orange', 1000, 'Tropicana', 4),
('whisky_jb.jpg', 25.00, 40, 'Whisky J&B', 700, 'J&B', 5),
('rosé_provence.jpg', 9.50, 60, 'Rosé de Provence', 750, 'Côtes de Provence', 2),
('evian.jpg', 1.00, 500, 'Eau Evian', 500, 'Evian', 6),
('redbull.jpg', 2.80, 100, 'Red Bull', 250, 'Red Bull', 9),
('cidre_doux.jpg', 4.50, 80, 'Cidre Doux', 750, 'Loïc Raison', 8),
('baileys.jpg', 18.00, 45, 'Baileys', 700, 'Diageo', 10),
('mojito_mocktail.jpg', 3.50, 120, 'Mojito sans alcool', 330, 'Happy Drinks', 7),
('vodka_abricot.jpg', 19.90, 35, 'Vodka Abricot', 700, 'Smirnoff', 5),
('jus_pomme.jpg', 2.00, 160, 'Jus de pomme', 1000, 'Andros', 4),
('orangina.jpg', 1.70, 250, 'Orangina', 33, 'Orangina', 3),
('leffe.jpg', 2.80, 180, 'Leffe Blonde', 33, 'Leffe', 1);

-- =====================
-- PROMOTIONS
-- =====================
INSERT INTO Sale (discount, product_id) VALUES
(10, 1),
(20, 3),
(15, 5),
(5, 6),
(25, 8),
(10, 9),
(30, 10),
(5, 12),
(15, 14),
(10, 15);

-- =====================
-- COMMANDES
-- =====================
INSERT INTO Orders (is_confirmed, order_date, delivery_date, user_id) VALUES
(TRUE, '2025-10-01', '2025-10-03', 1),
(FALSE, '2025-10-05', NULL, 2),
(TRUE, '2025-10-06', '2025-10-08', 3),
(TRUE, '2025-10-07', '2025-10-09', 4),
(TRUE, '2025-10-08', '2025-10-10', 5),
(FALSE, '2025-10-10', NULL, 6),
(TRUE, '2025-10-11', '2025-10-13', 7),
(TRUE, '2025-10-12', '2025-10-14', 8),
(FALSE, '2025-10-14', NULL, 9),
(TRUE, '2025-10-15', '2025-10-17', 10);

-- =====================
-- PRODUITS COMMANDÉS
-- =====================
INSERT INTO Command_product (order_id, product_id, quantity) VALUES
(1, 1, 6),
(1, 3, 3),
(2, 2, 2),
(2, 4, 1),
(3, 5, 1),
(3, 6, 2),
(4, 8, 4),
(4, 9, 2),
(5, 10, 1),
(5, 11, 6),
(6, 7, 5),
(6, 14, 4),
(7, 12, 3),
(7, 13, 2),
(8, 15, 12),
(8, 3, 6),
(9, 4, 3),
(9, 9, 2),
(10, 5, 1),
(10, 2, 3);

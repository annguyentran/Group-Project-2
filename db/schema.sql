DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;

-- USE pokemon_db;

-- CREATE TABLE trainers(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     trainer_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE pokemons(
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- trainer_id INT NOT NULL,
-- pokemon_name VARCHAR(30) NOT NULL,
-- FOREIGN KEY (trainer_id) REFERENCES trainers(id) ON DELETE CASCADE
-- );
-- Active: 1675272232476@@127.0.0.1@3306
CREATE TABLE heroes (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    universe TEXT NOT NULL,
    power TEXT NOT NULL,
    strenght INTEGER NOT NULL,
    intelligence INTEGER NOT NULL
);

CREATE TABLE villains (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    universe TEXT NOT NULL,
    power TEXT NOT NULL,
    strenght INTEGER NOT NULL,
    intelligence INTEGER NOT NULL
);

INSERT INTO heroes (id, name, universe, power, strenght, intelligence)
VALUES("h001", "Batman", "DC", "Rich", 7, 9),
("h002", "Spider-Man", "Marvel", "Climb Walls & 6th sense", 8, 8),
("h003", "Doctor Strange", "Marvel", "Magic", 5, 10);

INSERT INTO villains (id, name, universe, power, strenght, intelligence)
VALUES("v001", "Joker", "DC", "Madness", 4, 9),
("v002", "Vennon", "Sony", "Simbiont", 9, 5),
("v003", "Thanos", "Marvel", "Strenght & Durability", 10, 10);
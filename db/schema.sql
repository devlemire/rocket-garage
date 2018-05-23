CREATE DATABASE rocketGarage;
-- \c rocketGarage

-- Users Table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEST NOT NULL UNIQUE,
  password TEXT NOT NULL,
  profile_picture TEXT DEFAULT 'https://rocket-league.com/content/media/users/avatar/68px/default.png');

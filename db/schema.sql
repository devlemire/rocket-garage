CREATE DATABASE rocketGarage;
-- \c rocketGarage

-- Users Table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  region TEXT NOT NULL,
  country TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  notify_by_email BOOLEAN,
  profile_picture TEXT DEFAULT 'https://rocket-league.com/content/media/users/avatar/68px/default.png');

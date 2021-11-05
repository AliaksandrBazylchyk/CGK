CREATE DATABASE CGK;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  login VARCHAR(20),
  name VARCHAR(20),
  password VARCHAR(20),
  image VARCHAR(250),
  features VARCHAR(20)[],
  test_passed BOOLEAN,
  involvement VARCHAR(20),
  acsess_token VARCHAR(255),
);

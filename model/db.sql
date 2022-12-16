CREATE TABLE user_account (
    user_id BIGSERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(200) NOT NULL,
    user_role VARCHAR(50) NOT NULL
);
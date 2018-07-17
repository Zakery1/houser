CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name text,
    address text,
    city text,
    state text,
    zip integer,
    image_url text,
    mortgage_amount integer,
    monthly_rent integer
);
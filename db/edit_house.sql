/* UPDATE statements update data in database. */
UPDATE houses 
/* name of properties of object assigned as parameter to call of dbInstance.*/
SET name = ${nameInput},
address = ${addressInput},
city = ${cityInput},
state = ${stateInput},
zip = ${zipcodeInput},
image_url = ${imageurlInput},
mortgage_amount = ${monthly_mortgage_amountInput},
monthly_rent = ${monthly_rentInput}
WHERE id = ${id};

SELECT * FROM houses WHERE id = ${id};
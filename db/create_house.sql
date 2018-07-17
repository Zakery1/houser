INSERT INTO houses (name, address, city, state, zip, image_url, mortgage_amount, monthly_rent)
 VALUES (${nameInput}, ${addressInput}, ${cityInput}, ${stateInput}, ${zipcodeInput},
  ${imageurlInput}, ${monthly_mortgage_amountInput}, ${monthly_rentInput});

SELECT * FROM houses;


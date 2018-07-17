const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mc = require('./controller');
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database connected')
})

app.get('/api/houses', mc.getHouses)
app.post('/api/houses', mc.createHouse)
app.delete('/api/houses/:id', mc.deleteHouse);
app.put('/api/houses/:id', mc.editHouse);


const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


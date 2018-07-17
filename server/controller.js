module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses().then(houses => {
            res.status(200).send(houses)
        }).catch(err => console.log("error-----", err))
    },
    createHouse: (req, res) => {
        console.log(req.body)
        const { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput } = req.body;  
        const newHouse = { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput };           
        const dbInstance = req.app.get('db');
        dbInstance.create_house({...newHouse}).then(house => {
            res.status(200).send(newHouse[newHouse.length - 1 ]);
        }).catch(err => console.log('creatHouse error**********', err));
    },
    deleteHouse: ( req, res ) => {
        const { id } = req.params
        const dbInstance = req.app.get('db');  
        dbInstance.delete_house(id).then(() => {
            res.status(200).json({message: 'House Deleted!!'});
        }).catch(err => console.log('House Delete error---------', err));
    },
    editHouse: (req, res) => {
        const { id } = req.params;      
        const { nameInput, addressInput, cityInput, stateInput, zipcodeInput, 
            imageurlInput, monthly_mortgage_amountInput, monthly_rentInput } = req.body;
        const updatedHouse = { nameInput, addressInput, cityInput, stateInput, zipcodeInput, id,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput };                           
        const dbInstance = req.app.get('db');  
        dbInstance.edit_house(updatedHouse)
        .then(house => {
            res.status(200).send(house);
        }).catch(err => console.log('Database put error!', err));
    }
}
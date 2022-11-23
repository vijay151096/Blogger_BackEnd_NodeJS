const fs = require('fs')
const User = require('../model/user')
const dataImport = async() => {

    try {

        //Users Import
        const usersData = await fs.readFileSync("./users.json");
        let usersJson = JSON.parse(usersData.toString());
        usersJson.forEach( user => {
            User.create(user)
        })
    } catch(error){
        console.log(`Error While Importing Data \n ${error}`);
    }

}

dataImport();
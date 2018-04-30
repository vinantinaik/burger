var orm = require('../config/orm.js');

var burger = {

    selectAll: () => {
        return new Promise((resolve, reject)=>{

            orm.selectAll("burgers")
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(err)
                })

        })
    },

    addBurger:(burger_name)=>{
        return new Promise((resolve,reject)=>{

            orm.insertOne("burgers","burger_name","devoured",burger_name,false)
            .then((result)=> {
                resolve(result);

            })
            .catch((err) => {
                reject(err);
            })

        })
    },

    devourBurger:(id)=>{
        return new Promise((resolve,reject)=>{
            orm.updateOne("burgers","devoured",true,"id",id)
            .then((result)=>{
                resolve(result);

            })
            .catch((err)=>{
                reject(err);
            })

        })

        
    }

   





}

module.exports = burger;

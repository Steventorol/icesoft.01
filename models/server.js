const express = require('express')
const dbConnect = require('../database/config')
require('../database/config')
const {getSale, postSale ,putSale, deleteSale} = require('../Controller/salecontrollers')

class Server {

    constructor(){
        this.app = express()
        this.listen()
        this.dbConecction()
        this.pathSale= '/api/sale'
        this.route()
        
        
    }

    async dbConecction() {
        await dbConnect()
    }

    route() {
        this.app.use(express.json())
        this.app.get(this.pathSale,getSale)
        this.app.post(this.pathSale,postSale)
        this.app.put(this.pathSale, putSale)
        this.app.delete(this.pathSale+'/:id',deleteSale)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running')
        })
    }
}

module.exports = Server
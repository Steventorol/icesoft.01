const Sale = require('../models/sale')

// Method GET
const getSale =async(req,res) => {
    const sales = await Sale.find()    
    res.json(sales)
}

const putSale = async (req, res ) => {
    const {product_name,price} = req.body
    let msg = 'Sale updated'
    try {
        await Sale.findOneAndUpdate({ product_name:product_name },{price:price})
        res.status(201).json({message: 'updated'})
    } catch (error) {
        msg = error

    }
}
    const deleteSale = async(req , res ) => {
        let msg = 'Saledeleted'
        id =req.params.id
        try {
            await Sale.findByIdAndDelete({_id:id})
        } catch (error) {
            msg = 'there was aproblem while deleting'

        }
        res.json({msg:msg})

}


// Method POST 
const postSale = async(req, res) => {
    let msg =  'sale inserted';

    const body = req.body 
    try {
        const sale = new Sale(body)
      sale.save() // Insert into the database
    } catch(error)
    {
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getSale,
    postSale,
    putSale,
    deleteSale
}
const { model, Schema} = require('mongoose');

const saleSchema = new Schema({
    product_name : {
        type: String,
        required: [true, 'The product name  is required'],
        maxlength: [60, 'Max 60 characters'],
        minlength: [5, 'Min 5 characters']
    },

    price : {
        type: Number,
        required: [true, 'The price is required'],
        
    },

    weight : {
        type: Number,
        required: [true, 'The weight is required']
    }
})

   


module.exports = model('Sale',saleSchema,'sale') // Crar la coleccion sino existe y exporte
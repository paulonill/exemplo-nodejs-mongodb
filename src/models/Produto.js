const mongoose = require('mongoose');
const mongoosePaginte = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 
    codigo: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    valor: {
        type: Number,
        required: true
    }
});

ProdutoSchema.plugin(mongoosePaginte);

mongoose.model('Produto', ProdutoSchema);
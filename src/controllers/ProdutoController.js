const mongoose = require('mongoose');

const Produto = mongoose.model('Produto');

module.exports = {
    async listar(req,res) {
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({}, { page, limit: 20 });

        return res.json(produtos);
    },

    async incluir(req,res) {
        const produto = await Produto.create(req.body);

        return res.json(produto);
    },
    async pesquiarPorId(req,res) {
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },
    async alterar(req,res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new : true});

        return res.json(produto);
    },
    async excluir(req,res) {
        await Produto.findByIdAndDelete(req.params.id);

        return res.send();
    }
};
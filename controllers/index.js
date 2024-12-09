// Imporing knex and dbConfigs
const dbConfigs = require('../knexfile')
const knex = require('knex')(dbConfigs)

// GET: Read shopping cart home page
const indexController = async(req, res) => {
    const shoppingCart = await knex('shopping_cart').select('*').orderBy('id')
    res.render('index', {data: shoppingCart})
}

// POST: Add item to the shopping cart
const addItemController = async(req, res) => {
    try {
        const productAdded = req.body.name
        const added = await knex('shopping_cart').insert({name: productAdded, quantity: 1})
        if (added.rowCount === 1 ){
            const shoppingCart = await knex('shopping_cart').select('*').orderBy('id')
            res.status(200).render('index', {data: shoppingCart})
        }
    } catch (error) {
        res.status(500).json({error: "Shooping Cart Sever Error"})
    }
}

// POST: update (increse) the quantity of a item of the shopping cart
const increaseQuantityController = async(req, res) => {
    try {
        const product = req.body.name
        console.log(product)
        const originalQuantity = await knex('shopping_cart').where({name: product}).select('quantity')
        console.log(Number(originalQuantity[0].quantity))
        const updated = await knex('shopping_cart').where({name: product}).update({quantity: Number(originalQuantity[0].quantity) + 1})
        if (updated.rowCount !== 0 ){
            const shoppingCart = await knex('shopping_cart').select('*').orderBy('id')
            res.status(200).render('index', {data: shoppingCart})
        }
    } catch (error) {
        res.status(500).json({error: "Shooping Cart Sever Error"})
    }
}

// POST: update (decrese) the quantity of a item of the shopping cart
const decreseQuantityController = async(req, res) => {
    try {
        const product = req.body.name
        console.log(product)
        const originalQuantity = await knex('shopping_cart').where({name: product}).select('quantity')
        console.log(Number(originalQuantity[0].quantity))
        const updated = await knex('shopping_cart').where({name: product}).update({quantity: Number(originalQuantity[0].quantity) - 1})
        if (updated.rowCount !== 0 ){
            const shoppingCart = await knex('shopping_cart').select('*').orderBy('id')
            res.status(200).render('index', {data: shoppingCart})
        }
    } catch (error) {
        res.status(500).json({error: "Shooping Cart Sever Error"})
    }
}

// POST: subbmit the whole shooping cart information to http://localhost:3000/cart
const postShoppingCartController = async(req, res) => {
    try {
        const shoppingCart = await knex('shopping_cart').select('*').orderBy('id')
        console.log(shoppingCart)
        res.status(201).json({shoppingCart})
    } catch (error) {
        res.status(500).json({error: "Sever Error"})
    }
}

module.exports = { indexController, addItemController, increaseQuantityController, decreseQuantityController, postShoppingCartController }
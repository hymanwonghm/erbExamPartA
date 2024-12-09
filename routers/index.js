const { Router } = require('express')
const { indexController, addItemController, increaseQuantityController, decreseQuantityController, postShoppingCartController } = require('../controllers')
const router = Router()

router.route('/').get(indexController)
router.route('/add').post(addItemController)
router.route('/increase').post(increaseQuantityController)
router.route('/decrease').post(decreseQuantityController)
router.route('/cart').post(postShoppingCartController)


module.exports = { router }
const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/product-controller')


router.get('/', controller.get);
router.post('/', controller.post)
router.put('/:id', controller.put)
router.get('/:id', controller.getById)
router.delete('/:id', controller.delete)


module.exports = router;
const express = require('express');
const router = express.Router();

const fabricsControllers = require('../controllers/fabrics');

router.get('/', fabricsControllers.getAll);

router.get('/:id', fabricsControllers.getSingle);

//Adding others endpoints

router.post('/', fabricsControllers.createFabric);

router.put('/:id', fabricsControllers.updateFabric);

router.delete('/:id', fabricsControllers.deleteFabric);

module.exports = router;
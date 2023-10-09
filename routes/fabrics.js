const express = require('express');
const router = express.Router();

const fabricsControllers = require('../controllers/fabrics');

router.get('/', fabricsControllers.getAll);

router.get('/:id', fabricsControllers.getSingle);

module.exports = router;
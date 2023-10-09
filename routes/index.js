const router = require('express').Router();

router.get('/', (req, res) => ( res.send('Hello World')));

router.use('/fabrics', require('./fabrics'));

module.exports = router;
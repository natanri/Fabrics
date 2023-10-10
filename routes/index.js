const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {

    res.send('I am listening');
});

router.use('/fabrics', require('./fabrics'));

module.exports = router;
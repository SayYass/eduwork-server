const router = require('express').Router();
const cartControler = require('./controller');
const {police_check} = require('../middlewares');

router.put(
    '/carts',
    police_check('update', 'Cart'),
    cartControler.update
);

router.get(
    '/carts',
    police_check('read', 'Cart'),
    cartControler.index
);


module.exports = router;

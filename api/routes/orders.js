const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'FETCHING ORDERS... GET REQUEST'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'ORDER CREATED... POST REQUEST'
    });
});

router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId
    res.status(200).json({
        message: 'ORDER DETAILS...',
        orderId: orderId
    });
});


router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'ORDER DELETED...'
    });
});


module.exports = router;

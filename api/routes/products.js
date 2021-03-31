const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request from /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request from /products'
    });
});

router.post('/:productId', (req, res, next) => {
    const id = req.params.productId
    if (id === 'special') {
        res.status(200).json({
            message: 'You requested special product Id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: id
        });
    }
});


router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product.'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product.'
    });
});

module.exports = router;

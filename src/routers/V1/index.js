const express = require('express');
const router = express.Router();

const cityController = require('../../controllers/city-contoller');

router.get('/city/:id',cityController.fetch);
router.post('/city',cityController.create);
router.patch('/city/:id',cityController.update);
router.delete('/city/:id',cityController.remove);

module.exports = router;

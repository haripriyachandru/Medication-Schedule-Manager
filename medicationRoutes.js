const express = require('express');
const { addMedication, getMedications } = require('../controllers/medicationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addMedication);
router.get('/', authMiddleware, getMedications);

module.exports = router;

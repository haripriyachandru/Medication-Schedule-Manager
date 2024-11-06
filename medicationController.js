const Medication = require('../models/Medication');

exports.addMedication = async (req, res) => {
    const { name, dosage, frequency, nextDose } = req.body;
    try {
        const medication = new Medication({
            userId: req.user.id,
            name,
            dosage,
            frequency,
            nextDose,
        });
        await medication.save();
        res.status(201).json(medication);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getMedications = async (req, res) => {
    try {
        const medications = await Medication.find({ userId: req.user.id });
        res.json(medications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

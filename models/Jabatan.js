const mongoose = require('mongoose');

const jabatanScheme = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Jabatan', jabatanScheme);
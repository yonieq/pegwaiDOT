const mongoose = require('mongoose');

const pegawaiScheme = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true
    },
    jabatanId: {
        type: String,
        required: true,
        ref: 'Jabatan'
    },
});

module.exports = mongoose.model('Pegawai', pegawaiScheme);
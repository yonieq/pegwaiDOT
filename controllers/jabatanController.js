const Jabatan = require('../models/Jabatan');
const { responseData, responseMessage } = require('../utils/response-handler');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
    viewJabatan: (req, res) => {
        Jabatan.find()
            .then(jabatan => {
                res.json({
                    status: true,
                    data: jabatan
                });
            }).catch(err => {
                res.json({
                    status: false,
                    message: err.message
                });
            });
    },
    addJabatan: (req, res) => {
        Jabatan.create(req.body)
            .then(jabatan => {
                res.json({
                    status: true,
                    data: jabatan
                });
            }).catch(err => {
                res.json({
                    status: false,
                    message: err.message
                });
            });
    },
    editJabatan: (req, res) => {
        Jabatan.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
            .then(jabatan => {
                res.json({
                    status: true,
                    data: jabatan
                });
            }).catch(err => {
                res.json({
                    status: false,
                    message: err.message
                });
            });
    },
    deleteJabatan: (req, res) => {
        Jabatan.findByIdAndDelete(req.params.id)
            .then(jabatan => {
                res.json({
                    status: true,
                    messages: 'Jabatan berhasil dihapus'
                });
            }).catch(err => {
                return res(new ErrorResponse(error.message, 500));
            });
    }
};
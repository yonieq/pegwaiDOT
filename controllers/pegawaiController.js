const Pegawai = require('../models/Pegawai');
const { responseData, responseMessage } = require('../utils/response-handler');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
    viewPegawai: async (req, res) => {
        try {
            // create join jabatanId with jabatan collection
            const pegawai = await Pegawai.find().populate('jabatanId');
            return responseData(res, 200, pegawai);
        } catch (error) {
            return res(new ErrorResponse(error.message, 500));
        }
    },
    addPegawai: async (req, res) => {
        try {
            const pegawai = await Pegawai.create(req.body);
            return responseData(res, 201, pegawai);
        } catch (error) {
            return res(new ErrorResponse(error.message, 500));
        }
    },
    editPegawai: async (req, res) => {
        try {
            const pegawai = await Pegawai.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            return responseData(res, 200, pegawai);
        } catch (error) {
            return res(new ErrorResponse(error.message, 500));
        }
    },
    deletePegawai: async (req, res) => {
        try {
            const pegawai = await Pegawai.findByIdAndDelete(req.params.id);
            return res.json({
                status: true,
                message: 'Pegawai berhasil dihapus'
            });
        } catch (error) {
            return res(new ErrorResponse(error.message, 500));
        }
    },
    viewPegawaiById: async (req, res) => {
        try {
            const pegawai = await Pegawai.findById(req.params.id);
            return responseData(res, 200, pegawai);
        } catch (error) {
            return res(new ErrorResponse(error.message, 500));
        }
    }
};
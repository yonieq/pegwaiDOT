const router = require('express').Router();
const pegawaiController = require('../controllers/pegawaiController');

router.get('/', pegawaiController.viewPegawai);
router.post('/', pegawaiController.addPegawai);
router.put('/:id', pegawaiController.editPegawai);
router.delete('/:id', pegawaiController.deletePegawai);
router.get('/:id', pegawaiController.viewPegawaiById);
router.patch('/:id', pegawaiController.editPegawai);

module.exports = router;
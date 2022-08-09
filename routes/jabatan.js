const router = require('express').Router();
const jabatanController = require('../controllers/jabatanController');
const request = require('supertest');

router.get('/', jabatanController.viewJabatan);
router.post('/', jabatanController.addJabatan);
router.put('/:id', jabatanController.editJabatan);
router.delete('/:id', jabatanController.deleteJabatan);
router.patch('/:id', jabatanController.editJabatan);

// test endpoint for viewJabatan with supertest e2e testing
router.get('/view', (req, res) => {
    res.json({
        status: true,
        data: [
            {
                id: 1,
                nama: 'Jabatan 1'
            },
            {
                id: 2,
                nama: 'Jabatan 2'
            }
        ]
    });
});



module.exports = router;
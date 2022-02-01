const clubController = require('../controllers/clubController')

const router = require('express').Router()

router.post('/addClub', clubController.addClub)

router.get('/allClub', clubController.getAllproducts)

router.get('/oneClub/:id', clubController.getOneproducts)

router.put('/addClub', clubController.Updateproducts)

router.delete('/deleteClub', clubController.Deleteproducts)


module.exports = router
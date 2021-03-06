const clubController = require('../controllers/clubController')

const router = require('express').Router()

router.post('/addClub', clubController.addClub)

router.get('/allClub', clubController.getAllclubs)

router.get('/oneClub/:id', clubController.getOneclubs)

router.put('/editClub/:id', clubController.Updateclubs)

router.delete('/deleteClub', clubController.Deleteclubs)


module.exports = router
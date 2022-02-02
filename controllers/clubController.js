 const db = require('../models')


 // Main model

 const Clubs = db.clubs
//  const Player = db.players


//  Create  Clubs

const addClub = async (req, res)=> {

    let info = {
        name: req.body.name,
        league: req.body.league,
        trophies: req.body.trophies,
        top4: req.body.top4 ? req.body.top4: false
    }

    const  club = await Clubs.create(info)
    res.status(200).send(club)
}

//  Get Clubs


const getAllclubs = async (req,res)=>{

    let  clubs = await Clubs.findAll({
        attributes:[  //only item given in the attributes required to get all values
            'name',
            'league',
            'trophies'
        ]
    })
    res.status(200).send(clubs)
}


//get single club

const getOneclubs = async (req,res)=>{

    let id = req.params.id
    let  clubs = await Clubs.findOne({
        where:{id:id}
    })
    res.status(200).send(clubs)
}

// Update


const Updateclubs = async (req,res)=>{

    let id = req.params.id
    
    const clubs = await Clubs.update(req.body,{ where:{id:id}})

    res.status(200).send(clubs)

}

//delete single club

const Deleteclubs = async (req,res)=>{

    let id = req.params.id
    let  clubs = await Clubs.destroy({ where:{id:id} })
    res.status(200).send("club is deleted")
}

module.exports ={
    Deleteclubs,
    Updateclubs,
    getOneclubs,
    getAllclubs,
    addClub

}
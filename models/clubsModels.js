module.exports = (sequelize,DataTypes) =>{

    const Clubs = sequelize.define("clubs",{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        league:{
            type: DataTypes.STRING,
            allowNull: false
        },

        trophies:{
            type: DataTypes.INTEGER
        },

        top4:{
            type: DataTypes.BOOLEAN
        }

    });
 
    return Clubs

}
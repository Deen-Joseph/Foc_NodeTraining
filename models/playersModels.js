module.exports = (sequelize,DataTypes) =>{

  const Player = sequelize.define("players",{
      name:{
          type: DataTypes.STRING,
          allowNull: false
      },

      Position:{
          type: DataTypes.STRING,
          allowNull: false
      },

      Kitno:{
          type: DataTypes.INTEGER
      }

  });

  return Player

}




// const users = [

//     {
  
//       id: 1,
  
//       name: "fredrico",
  
//       email: "fredrico@gmail.com",

//       position: "CM"
  
//     },
  
//     {
  
//       id: 2,
  
//       name: "bruno",
  
//       email: "bruno@gmail.com",

//       position: "AM"
  
//     },
  
//     {
  
//       id: 3,
  
//       name: "mata",
  
//       email: "mata@gmail.com",      

//       position: "AM"
  
//     },
  
//     {
  
//       id: 4,
  
//       name: "pogba",
  
//       email: "pogba@gmail.com",

//       position: "CM"
  
//     }
  
//   ];

//   module.exports = users;
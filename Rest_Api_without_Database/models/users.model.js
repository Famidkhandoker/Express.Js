const {v4: uuidv4 }=require("uuid");
const users=[
    {
        id: uuidv4(),
        username:"Famid Khandoker",
        email:"developer@gmail.com",
    },

    {
        id: uuidv4(),
        username:"Habib Ahmed",
        email:"developer@gmail.com",
    }
   
];

module.exports=users;
// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
//import bcrypt module
const bcrypt=require("bcrypt");
//import multer module
const multer=require("multer");
//import path module
const path=require("path");
//import mongoose module
const mongoose = require("mongoose");
//import axios module
const axios = require("axios");
//import json web token module
const jwt = require("jsonwebtoken");
//import express session module
const session = require("express-session");


//connect express application with DB via mongoose
//sportDB: database name
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

// create express application
const app = express();

//configurations
//Send JSON responses
app.use(bodyParser.json());
//get objects from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// Path configuration(shortcut)
app.use('/images', express.static(path.join('backend/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
   }
   
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
    }
    cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
   extension;
    cb(null, imgName);
    }
   });

   const secretKey = "croco2023venus";
app.use(session({
secret: secretKey,
}));
//models importation
const Match=require("./models/match");
const Player=require("./models/player");
const Team=require("./models/team");
const Stadium=require("./models/stadium");
const Imc=require("./models/imc");
const User=require("./models/user");




//Business Logic
// business logic: Get All Matches
app.get("/matches", (req, res) => {
    // Traitement de la Req
    console.log("here into BL: Get All Matches");
    Match.find().then((data)=>{
        res.json({ matches: data });

    });

});
// business logic: get match by id
app.get("/matches/:id", (req, res) => {
    //Traitement de la Req
    console.log("here into BL: Get Matches by id");
    let id = req.params.id;

    Match.findOne({_id:id}).then((data)=>{
        res.json({ match: data });

    });
    // let matche = {};
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (id == matchesTab[i].id) {
    //         matche = matchesTab[i];
    //         break;

    //     }
    //     else {
    //         matche = "match not found";
    //     }
    // }


});
// business logic: add match
app.post("/matches", (req, res) => {
    //Traitement de la Req

    //match => instance de type Match
    let match = new Match(req.body);
    //save() methode predefinie mongoose
    match.save((err,doc)=>{
        console.log("here err",err);
        console.log("here doc",doc);
        if (err) {
            res.json({ msg: "not added" });

        } else {
            res.json({ msg: "added with success" });

        }
    });
    // match.id = generateId(matchesTab);
    // matchesTab.push(match);
});

// business logic: delete match by id
app.delete("/matches/:id", (req, res) => {
    //Traitement de la Req
    let id = req.params.id;
    let msg=""
    Match.deleteOne({_id:id}).then((response)=>{
        console.log("here response after delete",response);
        if (response.deletedCount==1) {
            res.json({ msg: "deleted succefully" });

        } else {
            res.json({ msg: "Not deleted" });

        }
    });
    // let msg = "";
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (id == matchesTab[i].id) {
    //         matchesTab.splice(i, 1);
    //         msg = "deleted with success";
    //         break;
    //     }
    //     else {
    //         msg = "not found"
    //     }
    // }
});
// business logic: update match
app.put("/matches", (req, res) => {
    let updatedMatch = req.body;
    Match.updateOne({_id:updatedMatch._id},updatedMatch).then((data)=>{
        console.log("here data after update", data);
        if (data.nModified==1) {
            res.json({ message: "Match updated successfully" });

        } else {
            res.json({ message: "Not updated" });

        }

    });

    // // Recherchez l'index du match dans le tableau matchesTab en utilisant matchId
    // let matchIndex = matchesTab.findIndex(match => match.id == updatedMatch.id);

    // // Mettez à jour le match existant avec les nouvelles données
    // matchesTab[matchIndex] = updatedMatch;
});
// business logic: search match by score one or score two
app.post("/search", (req, res) => {
    let searchedMatch = req.body;
   console.log("searchedMatch", req.body);
    let matches =matchesTab.filter((elt)=> 
    {return searchedMatch.scoreOne==elt.scoreOne||searchedMatch.scoreTwo==elt.scoreTwo})

    
 res.json({ matches: matches });
});

// app.get("/matches/:sc1/:sc2", (req, res) => {
//     console.log("heeeeere");
//     let scoreOne = req.params.sc1;
//     let scoreTwo = req.params.sc2;

//     let matches =matchesTab.filter((elt)=> 
//     {return scoreOne==elt.scoreOne||scoreTwo==elt.scoreTwo})

    
//     res.json({ matches: matches });
// });


let matchesTab = [
    { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: "FCB", teamTwo: "juv" },
    { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: "RM", teamTwo: "ATM" },
    { id: 3, scoreOne: 2, scoreTwo: 2, teamOne: "SEV", teamTwo: "juv" },
    { id: 4, scoreOne: 2, scoreTwo: 4, teamOne: "CA", teamTwo: "EST" },

];

let teamsTab = [
    { id: 1, name: "ba9lewa", owner: "ali", stadiumId: 3 },
    { id: 2, name: "est", owner: "mohamed", stadiumId: 1 },
    { id: 3, name: "real", owner: "perez", stadiumId: 2 },

];

let playersTab = [
    { id: 1, Name: "ahmed", Age: 22, position: "midfilder" },
    { id: 2, Name: "taha", Age: 24, position: "goalkeeper" },
    { id: 3, Name: "yassine", Age: 26, position: "defender" },
    { id: 4, Name: "abdo", Age: 20, position: "attackant" }
];
function generateId(t) {

    if (t.length == 0) {
        return 1;
    }
    else {
        var max = t[0].id;
        for (let i = 1; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }

        }
        return max + 1;
    }
}


// business logic: Get All Players
app.get("/players", (req, res) => {
     // Traitement de la Req
     Player.find().then((data)=>{
        res.json({ players: data });

    });
 
 });
// business logic: get player by id
app.get("/players/:id", (req, res) => {
       //Traitement de la Req
       console.log("here into BL: Get PLayers by id");
       let id = req.params.id;

    Player.findOne({_id:id}).then((data)=>{
        res.json({ player: data });

    });
   });

// business logic: add player
app.post("/players", (req, res) => {
    //Traitement de la Req
 //player => instance de type Player
 let player = new Player(req.body);
 //save() methode predefinie mongoose
 player.save();
 // match.id = generateId(matchesTab);
 // matchesTab.push(match);
 res.json({ msg: "added with success" });
});
// business logic: delete player by id
app.delete("/players/:id", (req, res) => {
       //Traitement de la Req
       let id = req.params.id;
       Player.deleteOne({_id:id}).then((response)=>{
           res.json({ msg: "deleted succefully" });
       });
   });
// business logic: update player
app.put("/players", (req, res) => {
    let updatedPlayer = req.body;

    Player.updateOne({_id:updatedPlayer._id},updatedPlayer).then((data)=>{
        res.json({ message: "Player updated successfully" });

    });
});



// business logic: Get All team
app.get("/teams", (req, res) => {
    // Traitement de la Req
    Team.find().then((data)=>{
        res.json({ teams: data });

    });
 
 });
// business logic: get teams by id
app.get("/teams/:id", (req, res) => {
      //Traitement de la Req
   
      let id = req.params.id;

      Team.findOne({_id:id}).then((data)=>{
          res.json({ team: data });
  
      });
     });

// business logic: add team
app.post("/teams", (req, res) => {
   //Traitement de la Req
    //team => instance de type team
 let team = new Team(req.body);
 //save() methode predefinie mongoose
 team.save();
 // team.id = generateId(teamsTab);
 // teamsTab.push(team);
 res.json({ msg: "added with success" });
});
// business logic: delete team by id
app.delete("/teams/:id", (req, res) => {
      //Traitement de la Req
      let id = req.params.id;
      Team.deleteOne({_id:id}).then((response)=>{
          res.json({ msg: "deleted succefully" });
      });
  });
// business logic: update team
app.put("/teams", (req, res) => {
   let updatedTeam = req.body;

   Team.updateOne({_id:updatedTeam._id},updatedTeam).then((data)=>{
    res.json({ message: "Team updated successfully" });

});
});

app.post("/searchPlayer", (req, res) => {
    let searchedPlayer = req.body;
   console.log("searchedMatch", req.body);
    let player =playersTab.filter((elt)=> 
    {return searchedPlayer.name==elt.Name||searchedPlayer.age==elt.Age})

    
 res.json({ player: player });
});



// business logic: Get All stadium
app.get("/stadiums", (req, res) => {
    // Traitement de la Req
    Stadium.find().then((data)=>{
        res.json({ stadiums: data });

    });
 
 });
// business logic: get stadium by id
app.get("/stadiums/:id", (req, res) => {
      //Traitement de la Req
   
      let id = req.params.id;

      Stadium.findOne({_id:id}).then((data)=>{
          res.json({ stadium: data });
  
      });
     });

// business logic: add stadium
app.post("/stadiums", (req, res) => {
   //Traitement de la Req
    //stadium => instance de type stadium
 let stadium = new Stadium(req.body);
 //save() methode predefinie mongoose
 stadium.save();
 // stadium.id = generateId(stadiumsTab);
 // stadiumsTab.push(stadium);
 res.json({ msg: "added with success" });
});
// business logic: delete stadium by id
app.delete("/stadiums/:id", (req, res) => {
      //Traitement de la Req
      let id = req.params.id;
      Stadium.deleteOne({_id:id}).then((response)=>{
          res.json({ msg: "deleted succefully" });
      });
  });
// business logic: update stadium
app.put("/stadiums", (req, res) => {
   let updatedStadium = req.body;

   Stadium.updateOne({_id:updatedStadium._id},updatedStadium).then((data)=>{
    res.json({ message: "stadium updated successfully" });

});
});

//business logic calcule imc
app.post("/imcs", (req, res) => {
    //Traitement de la Req

    //match => instance de type Match
    let imc = new Imc(req.body);
    imc.imc=imc.poids/((imc.taille/100)*(imc.taille/100));
    console.log("imc",imc);
    //save() methode predefinie mongoose
    imc.save((err,doc)=>{
        console.log("here err",err);
        console.log("here doc",doc);
        if (imc.imc<=18.5) {
            res.json({ msg: "insuffisance ponderale" });

        } else if(imc.imc>18.5&& imc.imc<=25){
            res.json({ msg: "corpulence normale" });

        }
        else if(imc.imc>25&& imc.imc<=30){
            res.json({ msg: "Surpoids" });

        }
        else if(imc.imc>30&& imc.imc<=35){
            res.json({msg: "besite modere"});
        }
        else if(imc.imc>35&& imc.imc<=40){
            res.json({msg: "besite severe"});
        }
        else if(imc.imc>40){
            res.json({msg: "besite morbide et massive"});
        }
    });
    // match.id = generateId(matchesTab);
    // matchesTab.push(match);
});

//business logic signup
app.post("/users/signup",multer({ storage: storage }).single('img'), (req,res)=>{
    console.log("here into BL: signup", req.body);
    bcrypt.hash(req.body.pwd,10).then((cryptedPwd)=>{
        req.body.pwd=cryptedPwd;
        req.body.avatar="http://localhost:3000/images/"+req.file.filename;
        let user= new User(req.body);
        user.save((err, doc)=>{
          if(err){
            if(err.errors.email){
                //0=> email exist
                res.json({msg:"0"});
            }}
            else{
                res.json({msg:"signup successfully"});
    

            }
        });
    });
  
});

app.post("/users/login", (req,res)=>{
    let user;
  User.findOne({email:req.body.email}).then((doc)=>{
    console.log("here doc after searching by email",doc);
    if (!doc) {
        res.json({msg:"please chek your email"});
        
    } else {
        user=doc;
       return bcrypt.compare(req.body.pwd,doc.pwd);
    }
  }).then((pwdResult)=>{
    console.log("here pwdResult",pwdResult);
    if (!pwdResult) {
        res.json({msg: "please chek your password"});
    } else {      
      let userToSend = {
        id: user._id,
        fName: user.firstName,
        lName: user.lastName,
        role: user.role,
      };
      const token = jwt.sign(userToSend, secretKey, { expiresIn:'1h' });
      res.json({result:token, msg: "success"});
    }
  });

   
});
//business logic weather
app.post("/weather", (req, res) => {
    const city = req.body.city;
    const key = "ae4ebec83bf10ab17da49bbc95e2ae4f";
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    axios
    .get(weatherUrl)
    .then((response) => {
   //console.log('Here response', response);
    const weather = response.data.main;
   //console.log('Here weather main', weather);
   console.log(("data icon",response.data.weather[0].icon));
    const result = {
    temp: weather.temp,
    pressure: weather.pressure,
    humidity:weather.humidity,
    windSpeed:response.data.wind.speed,
    icon: response.data.weather[0].icon
    }
    res.status(200).json({
    result:result
    })
    });
   })

    module.exports = app;
const express = require("express"); //Express

//Déclaration des routes
//const userRoutes = require("./routes/user.routes");

const app = express();

//Evite l'erreurs de CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use((req, res, next) => {
  console.log("Réponse envoyée avec succès !");
});

//Chemin vers les routes liées à l'utilisateur
//app.use("/api/user", userRoutes);

module.exports = app; //Export de App

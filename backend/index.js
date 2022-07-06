const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({message: 'Hello World!'})
});

const newsRoutes = require('./routes/newsRoutes');
app.use('/news', newsRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const PORT = 3000
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@main.jok0b.mongodb.net/maindb?retryWrites=true&w=majority`).then(e => {
    console.log("Conectando ao Banco de dados");
    app.listen(process.env.PORT || PORT)
    console.log("Conectado com sucesso, API iniciada na porta", process.env.PORT || PORT);
})  
.catch(err => console.error('Não foi possível conectar ao Banco de dados. Erro:', err.code));
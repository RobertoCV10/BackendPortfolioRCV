// server.js
const express = require('express');
const cors = require('cors');

// Importa los datos de tus archivos JSON, las rutas son correctas
// porque los archivos están en la misma carpeta que server.js
const projects = require('./projects.json');
const portfolio = require('./portfolio.json');
const tools = require('./tools.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS para permitir peticiones desde tu app de React
app.use(cors());
app.use(express.json());

// Ruta para obtener todos los proyectos
app.get('/api/projects', (req, res) => {
    // Envía los datos de proyectos como respuesta JSON
    res.json(projects);
});

// NUEVA RUTA: para obtener todos los proyectos de portafolio
app.get('/api/portfolio', (req, res) => {
    // Envía los datos del portafolio como respuesta JSON
    res.json(portfolio);
});

app.get('/api/tools', (req, res) => {
    // Envía los datos del portafolio como respuesta JSON
    res.json(tools);
});

// Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor de API escuchando en http://localhost:${PORT}`);
});
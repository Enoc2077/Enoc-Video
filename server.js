// server.js
import express from 'express'; // Importar Express
import { engine } from 'express-handlebars'; // Importar el motor de plantillas Handlebars
import path from 'path';

const app = express(); // Crear una instancia de Express
const PORT = process.env.PORT || 3000;

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

// Datos de deportes
const deportes = [
  {
    nombre: "Fútbol",
    descripcion: "Deporte de equipo que se juega con un balón.",
    requisitos: "Balón, zapatos, campo.",
    ranking: 5
  },
  {
    nombre: "Tenis",
    descripcion: "Deporte individual o de pareja que se juega en una cancha.",
    requisitos: "Raqueta, pelota, red.",
    ranking: 4
  },
  {
    nombre: "Natación",
    descripcion: "Deporte que consiste en desplazarse en el agua.",
    requisitos: "Traje de baño, gorra, gafas.",
    ranking: 5
  },
  {
    nombre: "Ciclismo",
    descripcion: "Deporte que utiliza una bicicleta para desplazarse.",
    requisitos: "Bicicleta, casco, ropa adecuada.",
    ranking: 3
  },
  {
    nombre: "Baloncesto",
    descripcion: "Deporte de equipo que se juega con un balón en una cancha.",
    requisitos: "Balón, canasta, cancha.",
    ranking: 4
  }
];
app.get('/', (req, res) => {
  res.render('app', { deportes }); 
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

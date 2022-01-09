// Please read de LICENSE and TEMPLATE AND DERIVED CODE in LICENSE.md file.

// **************************
// *       VARIABLES        *
// **************************

let fondos = [];
let frases = [];
let caras = [];

// **************************
// *       CARGA IMG        *
// **************************

function preload() {
  // Carpeta 1 de imagenes
  let fondo1 = loadImage("./images01/01fondo01amarillo.jpg");
  let fondo2 = loadImage("./images01/01fondo01azul.jpg");
  let fondo3 = loadImage("./images01/01fondo01rojo.jpg");
  let fondo4 = loadImage("./images01/01fondo02amarillo.jpg");
  let fondo5 = loadImage("./images01/01fondo02azul.jpg");
  let fondo6 = loadImage("./images01/01fondo02rojo.jpg");
  let fondo7 = loadImage("./images01/01fondo03amarillo.jpg");
  let fondo8 = loadImage("./images01/01fondo03azul.jpg");
  let fondo9 = loadImage("./images01/01fondo03rojo.jpg");
  let fondo10 = loadImage("./images01/01fondo04amarillo.jpg");
  let fondo11 = loadImage("./images01/01fondo04azul.jpg");
  let fondo12 = loadImage("./images01/01fondo04rojo.jpg");
  // Almacena imagenes carpeta 1 en variables
  fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12];

  // Carpeta 2 de imagenes
  let frase1 = loadImage("./images02/02frase01.png");
  let frase2 = loadImage("./images02/02frase02.png");
  let frase3 = loadImage("./images02/02frase03.png");
  let frase4 = loadImage("./images02/02frase04.png");
  // Almacena imagenes carpeta 2 en variables
  frases = [frase1, frase2, frase3, frase4];

  // Carpeta 3 de imagenes
  let cara1 = loadImage("./images03/03cara01.png");
  let cara2 = loadImage("./images03/03cara02.png");
  let cara3 = loadImage("./images03/03cara03.png");
  let cara4 = loadImage("./images03/03cara04.png");
  // Almacena imagenes carpeta 3 en variables
  caras = [cara1, cara2, cara3, cara4];
}

// **************************
// *         CANVAS         *
// **************************

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  pixelDensity(3.0);
  imageMode(CENTER);
}

// **************************
// *         RANDOM         *
// **************************

function draw() {
  background(0);

  // Carpeta 1 ramdom de fotos
  let randomFondos = random(fondos);
  image(randomFondos, width / 2, height / 2, windowHeight, windowHeight);
  // Carpeta 2 ramdom de fotos
  let randomFrases = random(frases);
  image(randomFrases, width / 2, height / 2, windowHeight, windowHeight);
  // Carpeta 3 ramdom de fotos
  let randomCaras = random(caras);
  image(randomCaras, width / 2, height / 2, windowHeight, windowHeight);
}
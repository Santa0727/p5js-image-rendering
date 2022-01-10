const random = (items) => {
  let sum = 0;
  for (let i of fxhash) sum += i.charCodeAt(0);
  sum %= items.length;
  return items[sum];
};

const first = random([
  "01fondo01amarillo.jpg",
  "01fondo01amarillo.png",
  "01fondo01azul.jpg",
  "01fondo01azul.png",
  "01fondo01rojo.jpg",
  "01fondo01rojo.png",
  "01fondo02amarillo.jpg",
  "01fondo02amarillo.png",
  "01fondo02azul.jpg",
  "01fondo02azul.png",
  "01fondo02rojo.jpg",
  "01fondo02rojo.png",
  "01fondo03amarillo.jpg",
  "01fondo03amarillo.png",
  "01fondo03azul.jpg",
  "01fondo03azul.png",
  "01fondo03rojo.jpg",
  "01fondo03rojo.png",
  "01fondo04amarillo.jpg",
  "01fondo04amarillo.png",
  "01fondo04azul.jpg",
  "01fondo04azul.png",
  "01fondo04rojo.jpg",
  "01fondo04rojo.png",
]);
const second = random(["02frase01.png", "02frase02.png", "02frase03.png", "02frase04.png"]);
const third = random(["03cara01.png", "03cara02.png", "03cara03.png", "03cara04.png"]);
let fondo, frase, cara;

function preload() {
  fondo = loadImage(`./images01/${first}`);

  frase = loadImage(`./images02/${second}`);

  cara = loadImage(`./images03/${third}`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  pixelDensity(3.0);
  imageMode(CENTER);
}

function draw() {
  // background(0);

  image(fondo, width / 2, height / 2, windowHeight, windowHeight);

  image(frase, width / 2, height / 2, windowHeight, windowHeight);

  image(cara, width / 2, height / 2, windowHeight, windowHeight);
}

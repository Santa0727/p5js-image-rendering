<?php

$first =  scandir('./images01');
$first = array_slice($first, 2);
$first = $first[array_rand($first)];

$second =  scandir('./images02');
$second = array_slice($second, 2);
$second = $second[array_rand($second)];

$third =  scandir('./images03');
$third = array_slice($third, 2);
$third = $third[array_rand($third)];

?>

<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>p5.js example</title>
  <style>
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    canvas {
      display: block;
    }
  </style>
  <script src="./p5.js"></script>

  <script id="fxhash-snippet">
    //---- do not edit the following code (you can indent as you wish)
    let alphabet =
      "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    var fxhash =
      "oo" +
      Array(49)
      .fill(0)
      .map((_) => alphabet[(Math.random() * alphabet.length) | 0])
      .join("");
    let b58dec = (str) => [...str].reduce(
      (p, c) => (p * alphabet.length + alphabet.indexOf(c)) | 0,
      0
    );
    let fxhashTrunc = fxhash.slice(2);
    let regex = new RegExp(".{" + ((fxhashTrunc.length / 4) | 0) + "}", "g");
    let hashes = fxhashTrunc.match(regex).map((h) => b58dec(h));
    let sfc32 = (a, b, c, d) => {
      return () => {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        var t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    var fxrand = sfc32(...hashes);
    // call this method to trigger the preview
    function fxpreview() {
      console.log("fxhash: TRIGGER PREVIEW");
    }
    //---- /do not edit the following code
  </script>
</head>

<body>
  <script>
    let fondo, frase, cara;

    function preload() {
      fondo = loadImage("./images01/<?php echo $first; ?>")

      frase = loadImage("./images02/<?php echo $second; ?>");

      cara = loadImage("./images03/<?php echo $third; ?>");
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
  </script>
</body>

</html>
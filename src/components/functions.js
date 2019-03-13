const htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const createTwitterString = (content, author) => {
  return `https://twitter.com/intent/tweet?hashtags=quotes&text=${content}%0D%0A${author}`;
}

const randomColors = () => {
  const hslArr = [randomNumber(0, 360), randomNumber(30, 50), randomNumber(30, 50)];
  const secondColorHue = changeHue(hslArr[0], 60);
  const boxShadowHue = changeHue(hslArr[0], 330);

  const firstColor = hslColor(hslArr[0], hslArr[1], hslArr[2]);
  const secondColor = hslColor(secondColorHue, hslArr[1], hslArr[2]);
  const boxShadow = hslColor(boxShadowHue, hslArr[1], hslArr[2]);

  return [firstColor, secondColor, boxShadow];
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hslColor = (hue, sat, light) => {
  return `hsl(${hue}, ${sat}%, ${light}%)`;
}

const changeHue = (hue, val) => {
   hue += val;

   if (hue > 360) {
     hue -= 360;
   }

   return hue;
}

export {
  htmlDecode,
  createTwitterString,
  randomColors
}

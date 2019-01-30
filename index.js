const argv = require("minimist")(process.argv.slice(2));
const sharp = require("sharp");
const { readdir } = require("fs");
const { join } = require("path");

const { profile, width, heigth, input, output } = argv;

function imageManipulation() {
  readdir(input, (err, items) => {
    items.forEach((value, index, array) => {
      sharp(input + value)
        .rotate()
        .resize(width, heigth)
        .toFile(`${output}${profile}_${value}`)
        .then(data => {})
        .catch(err => {});
    });
  });
}

imageManipulation();

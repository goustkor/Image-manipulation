const argv = require("minimist")(process.argv.slice(2));
const sharp = require("sharp");
const { readdir } = require("fs");
const defaultConfig = require("./config/default.json");

let { profile, s, width, height, input, output } = argv;

function checkVariables() {
  if (!profile) profile = defaultConfig.profile;
  if (!s) s = defaultConfig.s;
  if (!input) input = defaultConfig.input;
  if (!output) output = defaultStatus.output;
  if (!width) width = defaultConfig.width;
  if (!height) height = defaultConfig.height;
}

function imageManipulation() {
  checkVariables();
  readdir(input, (err, items) => {
    if (err) return console.log(err);

    if (s) height = null;

    items.forEach((value, index, array) => {
      sharp(input + value)
        .rotate()
        .resize({
          width: width,
          height: height
        })
        .toFile(`${output}${profile}_${value}`)
        .then(data => {})
        .catch(err => {});
    });
  });
}

imageManipulation();

const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, ".."), (err, files) => {
  if (err) {
    console.log("Error in reading the directory");
  } else {
    console.log(files);
    console.log("Directory read successfully");
  }
});

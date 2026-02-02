const fs = require("fs");

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (command) {
  case "read":
    readFile(arg1);
    break;

  case "write":
    writeFile(arg1, arg2);
    break;

  case "copy":
    copyFile(arg1, arg2);
    break;

  case "delete":
    deleteFile(arg1);
    break;

  case "list":
    listDirectory(arg1 || ".");
    break;

  default:
    showHelp();
}

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file");
      return;
    }
    console.log("File Content:");
    console.log(data);
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Error writing file");
      return;
    }
    console.log("File written successfully");
  });
}

function copyFile(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.log("Error copying file");
      return;
    }
    console.log("File copied successfully");
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("Error deleting file");
      return;
    }
    console.log("File deleted successfully");
  });
}

function listDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log("Error reading directory");
      return;
    }
    console.log("Directory contents:");
    files.forEach((file) => console.log(file));
  });
}

function showHelp() {
  console.log(`


Commands:

node File.js read a.txt
node File.js write a.txt "Hello"
node File.js copy a.txt copy.txt
node File.js list .
node File.js delete a.txt

`);
}
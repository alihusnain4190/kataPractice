const fs = require("fs/promises");
const { exec, spawn } = require("child_process");
function top() {
  //     return fs.mkdir('project').then(() => {

  // })
  return fs
    .writeFile("app.js", "")
    .then(() => {
      console.log("app.js");
    })
    .then(() => {
      return fs.writeFile("README.md", "").then(() => {
        console.log("read me file");
      });
    })
    .then(() => {
      return new Promise(function (resolve, reject) {
        exec("npm init -y", (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            reject(error);
            return;
          }

          resolve(stdout.trim());
        });
      });
    })
    .then(() => {
      return fs
        .mkdir("spec")
        .then(() => {
          console.log("spec folder");
        })
        .then(() => {
          return fs.writeFile("./spec/test.spec.js", "").then(() => {
            console.log("test file create");
          });
        });
    })
    .then(() => {
      return fs.writeFile(".gitignore", "/node-module").then(() => {
        console.log(".git ignore file create");
      });
    });
}

top();

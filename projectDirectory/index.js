const fs = require("fs/promises");
const exec = require("child_process").execFile;
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
      return fs.writeFile("package.json", "").then(() => {
    return new Promise((resolve, reject) => {
            exec(fileName, params, { cwd: path }, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
    
        });
        return promise;
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

## project directory

    i write a function which create a project directory which have following files
        1 spec folder which have test.spec file
        2 app.js file
        3 .gitignore file
        4 package.json which already have all by default dependencies.

        i used Promise and file system to write files
       and for package.json i used child process of node

### this code is to run a command

    const { exec, spawn } = require("child_process");
      return new Promise(function (resolve, reject) {
        exec("npm init -y", (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            reject(error);
            return;
          }

          resolve(stdout.trim());
        });

if you want to create all files just run the function it will create all following files

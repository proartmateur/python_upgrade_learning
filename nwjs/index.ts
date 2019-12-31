"use strict"
//@prepros-append ./js_modules/func.js
console.log(add(1, 9))
console.log(del(3,1))

var win = nw.Window.get();
win.showDevTools();

let { PythonShell } = require('python-shell');
//import {PythonShell} from 'python-shell';
let fdata = {};

const app = new Vue({
  el: "#app",
  data: {
    raw_data: fdata,
    data: { name: "pedro" },
    name: "fdata"
  },
  mounted() {
    this.run_py();
  },
  methods: {
    run_py: function () {

      let options = {
        args: [JSON.stringify(this.data), 'value2', 'value3'],
        pythonOptions: ['-u'],
        mode: "json"
      };

      PythonShell.run('echo.py', options, (err, res) => {
        if (err) throw err;
        console.log(this.name)
        console.log(res);
        console.log("type:", typeof (res));
        this.name = res[0].name;
      });
    },
    run_ls: function () {
      const { spawn } = require('child_process');
      const ls = spawn('ls', ['-lh', '/usr']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    }
  }
});
/*
data = {name:"pedro"};
let options = {
    args: [JSON.stringify(data), 'value2', 'value3'],
    pythonOptions: ['-u'],
    mode:"json"
};

PythonShell.run('echo.py', options , function (err, res) {
  if (err) throw err;
  console.log(res);
  console.log("type:",typeof(res));
  fdata = res;
  document.getElementById("python-output").innerHTML = res[0].name;
  console.log('finished');


});*/
console.log(`Current directory: ${process.cwd()}`);
console.log("Node:", process.version);
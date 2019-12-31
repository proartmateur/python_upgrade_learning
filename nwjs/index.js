"use strict";
//@prepros-append ./js_modules/func.js

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log(add(1, 9));
console.log(del(3, 1));
var win = nw.Window.get();
win.showDevTools();
var PythonShell = require('python-shell').PythonShell;
//import {PythonShell} from 'python-shell';
var fdata = {};
var app = new Vue({
    el: "#app",
    data: {
        raw_data: fdata,
        data: { name: "pedro" },
        name: "fdata"
    },
    mounted: function mounted() {
        this.run_py();
    },
    methods: {
        run_py: function run_py() {
            var _this = this;
            var options = {
                args: [JSON.stringify(this.data), 'value2', 'value3'],
                pythonOptions: ['-u'],
                mode: "json"
            };
            PythonShell.run('echo.py', options, function (err, res) {
                if (err) throw err;
                console.log(_this.name);
                console.log(res);
                console.log("type:", typeof res === "undefined" ? "undefined" : _typeof(res));
                _this.name = res[0].name;
            });
        },
        run_ls: function run_ls() {
            var spawn = require('child_process').spawn;
            var ls = spawn('ls', ['-lh', '/usr']);
            ls.stdout.on('data', function (data) {
                console.log("stdout: " + data);
            });
            ls.stderr.on('data', function (data) {
                console.error("stderr: " + data);
            });
            ls.on('close', function (code) {
                console.log("child process exited with code " + code);
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
console.log("Current directory: " + process.cwd());
console.log("Node:", process.version);

"use strict";

function add(a, b) {
    return a + b;
}
function del(a, b) {
    return a - b;
}



//# sourceMappingURL=index.js.map
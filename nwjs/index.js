let {PythonShell} = require('python-shell');
let fdata = {};

const app = new Vue({
    el:"#app",
    data:{
        raw_data: fdata,
        data: {name:"pedro"},
        name: "fdata"
    },
    mounted(){
        this.run_py();
    },
    methods:{
        run_py: function(){

            let options = {
                args: [JSON.stringify(this.data), 'value2', 'value3'],
                pythonOptions: ['-u'],
                mode:"json"
            };

            PythonShell.run('echo.py', options ,  (err, res) => {
              if (err) throw err;
              console.log(this.name)
              console.log(res);
              console.log("type:",typeof(res));
              this.name = res[0].name;
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

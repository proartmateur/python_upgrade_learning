import os
import subprocess
import json

# Ubicar la ejecución en el directorio del script
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(os.getcwd())

data = [
    {"name": "Kikè"},
    {"name": "Hola"},
    {"name": "Petrça"}
]
send_data = json.dumps(data, ensure_ascii=False).encode("UTF-8")
print(send_data)
with open("send_data.json", "wb") as file:
    file.write(send_data)
proc = subprocess.Popen(["python", "./args.py", send_data], stderr=subprocess.PIPE, stdout=subprocess.PIPE)
out = proc.communicate()[0]

print("OUT_TYPE:", type(out))
print(out.decode("UTF-8"))

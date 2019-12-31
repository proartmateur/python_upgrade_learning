
import os
import subprocess
import json

data = [
    {"name": "Kikè"},
    {"name": "Hola"},
    {"name": "Petrça"}
]
send_data = json.dumps(data, ensure_ascii=False).encode("UTF-8")
print(send_data)
with open("send_data.json","wb") as file:
    file.write(send_data)
proc = subprocess.Popen(["python", "./args.py", send_data], stderr=subprocess.PIPE, stdout=subprocess.PIPE)
out = proc.communicate()[0]
kk = b"hola"
print(kk.decode("UTF-8"))
print(type(out))
print(out.decode("UTF-8"))

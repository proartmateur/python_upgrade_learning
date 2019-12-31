#!/usr/bin/python

import os
import json
import sys
import pprint
pp = pprint.PrettyPrinter(indent=4)

def main(args):
    print("Loading...")
    if(len(args) > 1):
        print(args[1])
        data = json.loads(args[1])
        print(type(data))
        pp.pprint(data)
    else:
        print("Falta la data.")

if __name__ == "__main__":
    main(sys.argv)
#!/usr/bin/python
import time
import os
import json
import sys
import pprint

pp = pprint.PrettyPrinter(indent=4)


def main(args):
    if len(args) > 1:
        data = json.loads(args[1])
        data["name"] += " Lopex"

        print(json.dumps(data))
    else:
        print("Falta la data.")


if __name__ == "__main__":
    main(sys.argv)

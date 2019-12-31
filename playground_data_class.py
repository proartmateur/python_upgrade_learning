import pprint

from data_class import *

pp = pprint.PrettyPrinter(indent=4)
user = User(0,'pepe','pecas')
user2 = User(20,'papa','pecas')
user3 = User(4,'lala','pecas')

users = [
    user,
    user2,
    user3
]

users.sort(reverse=True)
pp.pprint(users)
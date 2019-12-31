from dataclasses import dataclass, field
import typing
import uuid


@dataclass(order=True)
class User(object):
    id: int = field(compare=True)
    uid: uuid.UUID = field(compare=False, default_factory=uuid.uuid4, init=False)
    name: str = field(compare=False)
    password: str = field(compare=False)

    # def __str__(self):
    #     return "User"

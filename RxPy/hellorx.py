from rx import Observable, create

stocks = [
    {"TK": "APPL", "price": 200},
    {"TK": "GOOL", "price": 20},
    {"TK": "MSF", "price": 90},
    {"TK": "LL", "price": 120},
    {"TK": "HH", "price": 900}
]


def process_buy(value):
    print("Buying: {} = {}".format(value["TK"], value["price"]))


def process_buy2(value):
    print("-- Buying: {} = {}".format(value["TK"], value["price"]))


def buy_stock_events(observer, scheduler):
    for stock in stocks:
        if stock["price"] > 100:
            print("------")
            observer.on_next(stock)
        elif stock["price"] <= 0:
            observer.on_error(stock["TK"])
    observer.on_completed()


source = create(buy_stock_events)
source2 = create(buy_stock_events)
source.subscribe(
    on_next=lambda value: process_buy(value),
    on_error=lambda e: print("ERROR {}".format(e)),
    on_completed=lambda: print("Listo!")
)

source2.subscribe(
    on_next=lambda value: process_buy2(value),
    on_error=lambda e: print("ERROR {}".format(e)),
    on_completed=lambda: print("-- Listo!")
)

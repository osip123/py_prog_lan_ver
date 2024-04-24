import sys

def loadconfig() -> int:
    
    with open("config.vconfig", 'r', encoding="utf-8") as file:
        load = file.readlines()
        if load[0] != ".core210\n":
            print("err")

        for i in range(0, len(load)):
            if load[i] == "lock-12\n":
                print("База данных заблокирована")
                sys.exit()
        file.close()        
    return 0

loadconfig()
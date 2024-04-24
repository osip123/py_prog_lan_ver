# import loadconfig from src.config.loadconfig
from parser import parer
from src.config.loadconfig import loadconfig

def main() -> int:
    loadconfig()
    parer()
    print("hellow world")
    return 0

main()
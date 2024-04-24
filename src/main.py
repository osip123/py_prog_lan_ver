# import loadconfig from src.config.loadconfig

from src.config.loadconfig import loadconfig

def main() -> int:
    loadconfig()
    print("hellow world")
    return 0

main()
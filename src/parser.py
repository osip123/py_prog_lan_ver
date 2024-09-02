import sys
from TokenTypes import Token
from TokenTypes import TokenType

class Parser:
    def __init__(self, code:str):
        self.code = code
        self.TokenList = []

    def create_toke_list(self):
        for lexema in range(0, len(self.code)):
            if lexema > '0' and lexema < '9':
                token = Token('VAR', )
                self.TokenList.append()

    def show_token_list(self):
        pass
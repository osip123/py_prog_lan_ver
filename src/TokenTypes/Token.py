from TokenType import TokenType

class Token:
    def __init__(self, TokenType, buffer):
        self.Type:TokenType = TokenType
        self.buffer = buffer
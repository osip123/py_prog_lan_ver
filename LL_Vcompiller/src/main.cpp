#include <iostream>
#include "core/Token/Token.h"

int main() {
    Token token = *new Token(TokenTypes::dot, ".", 8);
    token.print();
    return 0;
}

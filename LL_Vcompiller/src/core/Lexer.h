//
// Created by endoc on 04.09.2024.
//

#ifndef LL_VCOMPILLER_LEXER_H
#define LL_VCOMPILLER_LEXER_H

#include <utility>

#include "vector"
#include "Token/Token.h"

class Lexer {
public:
    std::vector<char> lexema_vector;
    std::vector<Token> Token_List;


    std::vector<Token> create_token_list();

    Lexer(std::vector<char> lexema_vector_in){
        lexema_vector = lexema_vector_in;
    };

private:
    virtual void print();
    int pos;

};


#endif //LL_VCOMPILLER_LEXER_H

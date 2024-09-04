//
// Created by endoc on 04.09.2024.
//

#include "Lexer.h"

void Lexer::print() {

}

std::vector<Token> Lexer::create_token_list() {

    for (size_t i = 0; i < sizeof lexema_vector; ++i) {
        if(lexema_vector[i] == '.'){
            Token N_Token = *new Token(TokenTypes::dot, ".", i);
            Token_List.push_back(N_Token);
        }
        if (lexema_vector[i] < '9' && lexema_vector[i] > '0'){
            char* chr = reinterpret_cast<char *>(lexema_vector[i]);
            Token N_Token = *new Token(TokenTypes::INT, chr, i);
            Token_List.push_back(N_Token);
        }

        if(lexema_vector[i] == 'mov'){
            Token N_Token = *new Token(TokenTypes::mov, "mov", i);
            Token_List.push_back(N_Token);
        }

        if (lexema_vector[i] == 'out'){
            Token N_Token = *new Token(TokenTypes::output, "out", i);
            Token_List.push_back(N_Token);
        }

        if (lexema_vector[i] == 'eq'){
            Token N_Token = *new Token(TokenTypes::eq, "eq", i);
            Token_List.push_back(N_Token);
        }
    }

    return Token_List;
}


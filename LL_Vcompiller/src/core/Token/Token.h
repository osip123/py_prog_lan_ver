//
// Created by endoc on 04.09.2024.
//

#ifndef LL_VCOMPILLER_TOKEN_H
#define LL_VCOMPILLER_TOKEN_H

#include <string>
#include <iostream>
#include "../TokenTypes/TokenTypes.h"

class Token{
public:
    TokenTypes type;
    std::string buffer;
    int pos;

    Token(TokenTypes type_token, std::string BUFFER, int position){
        type = type_token;
        buffer = BUFFER;
        pos = position;
    };

    public: void print(){
        std::cout << pos << std::endl;
        std::cout << buffer << std::endl;
    };

};

#endif //LL_VCOMPILLER_TOKEN_H

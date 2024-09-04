cmake_minimum_required(VERSION 3.28)
project(LL_Vcompiller)

set(CMAKE_CXX_STANDARD 17)

add_executable(LL_Vcompiller src/main.cpp
        src/core/Lexer.cpp
        src/core/Lexer.h
        src/core/Parser.cpp
        src/core/Parser.h
        src/core/Parser.h
        src/core/TokenTypes/TokenTypes.h
        src/core/Token/Token.h
        src/core/Token/Token.h)

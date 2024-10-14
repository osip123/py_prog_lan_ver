cmake_minimum_required(VERSION 3.28)
project(BVIM)

set(CMAKE_CXX_STANDARD 23)

add_executable(BVIM src/main.cpp
        src/Types/TypesINT.cpp
        src/Types/TypesINT.h
        src/Types/BVIMIntTypes.h
        src/Nodes/BaseBinnaryNode.cpp
        src/Nodes/BaseBinnaryNode.h)

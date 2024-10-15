cmake_minimum_required(VERSION 3.28)
project(BVIM)

set(CMAKE_CXX_STANDARD 23)

add_executable(BVIM src/main.cpp
        src/Nodes/BaseBinnaryNode.cpp
        src/Nodes/BaseBinnaryNode.h
        src/Types/BaseVarTypes.h
        src/Types/BaseDataType.cpp
        src/Types/BaseDataType.h
        src/Nodes/BaseUnaryNode.cpp
        src/Nodes/BaseUnaryNode.h
)

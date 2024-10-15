//
// Created by endoc on 15.10.2024.
//


#ifndef BVIM_BASEUNARYNODE_H
#define BVIM_BASEUNARYNODE_H

#include<iostream>

namespace BVIMBaseUnaryNode {

    class BaseUnaryNode {
        int arg1;
        int arg2;
        int result;
        std::string oper;

        [[nodiscard]] std::string _to_string() const{
            return "arg1" + std::to_string(arg1) + oper +  "arg 2" + std::to_string(arg2);
        }

    public:
        BaseUnaryNode(int arg1, int arg2, std::string oper){
            this->arg1 = arg1;
            this->arg2 = arg2;
            this->oper = oper;
        }

        float cala_value();
    };

} // BVIMBaseUnaryNode

#endif //BVIM_BASEUNARYNODE_H

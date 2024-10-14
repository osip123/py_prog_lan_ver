//
// Created by endoc on 14.10.2024.
//

#ifndef BVIM_BASEBINNARYNODE_H
#define BVIM_BASEBINNARYNODE_H

#include <string>
#include <iostream>

namespace BVIMBinnaryNode {

    class BaseBinnaryNode {

    public:
        int arg1;
        int arg2;
        int result;
        std::string oper;

        BaseBinnaryNode(int arg1, int arg2, std::string oper){
            this->arg1 = arg1;
            this->arg2 = arg2;
            this->oper = oper;
        }

        int cala_value();

        [[nodiscard]] std::string _to_string() const{
            return "arg1" + std::to_string(arg1) + oper +  "arg 2" + std::to_string(arg2);
        }

    };

} // BVIMBinnaryNode

#endif //BVIM_BASEBINNARYNODE_H

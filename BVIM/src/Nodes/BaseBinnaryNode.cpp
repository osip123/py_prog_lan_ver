//
// Created by endoc on 14.10.2024.
//

#include "BaseBinnaryNode.h"

namespace BVIMBinnaryNode {
    std::string BaseBinnaryNode::expression_to_string() {
        return std::to_string(arg1) + op + std::to_string(arg2);
    }

    int BaseBinnaryNode::calc_node_value() {
        if (op == "+"){
            result = arg1 + arg2;
        } else{
            result = arg1 - arg2;
        }

        return result;
    }

    std::string BaseBinnaryNode::to_string() {
        return std::to_string(arg1) + op + std::to_string(arg2);
    }

    int BaseBinnaryNode::to_int() {
        return 0;
    }

    void BaseBinnaryNode::show_expression() {
        std::cout << &"arg1" [ arg1] << std::endl;
        std::cout << &"arg2" [ arg2] << std::endl;
        std::cout << op << std::endl;
    }


} // BVIMBinnaryNode
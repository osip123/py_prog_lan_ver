//
// Created by endoc on 14.10.2024.
//

#include "BaseUnaryNode.h"

namespace BVIMBaseUnaryNode {


    float BaseUnaryNode::calc_node_value() {
        if(op == "*"){
            return arg1 * arg2;
        }else{
            return  arg1 / arg2;
        }
    }

    double BaseUnaryNode::rase() {
        return pow(arg1, arg2);
    }
} // BVIMBaseUnaryNode
//
// Created by endoc on 15.10.2024.
//

#include "BaseUnaryNode.h"

namespace BVIMBaseUnaryNode {
    float BaseUnaryNode::cala_value() {
        if(oper == "*"){
            result = arg1 * arg2;
        }
        else{
            result = arg1 / arg2;
        }

        return result;
    }
} // BVIMBaseUnaryNode
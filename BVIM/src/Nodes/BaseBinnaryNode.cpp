//
// Created by endoc on 14.10.2024.
//

#include "BaseBinnaryNode.h"

namespace BVIMBinnaryNode {


    int BaseBinnaryNode::cala_value() {
        if(oper == "+"){
            result = arg1 + arg2;
        }
        else{
            result = arg1 - arg2;
        }

        return result;

    }
} // BVIMBinnaryNode
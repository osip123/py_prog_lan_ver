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
        static int                                 arg1;
        static int                                 arg2;
        static std::string                           op;

        BaseBinnaryNode(int arg1, int arg2, std::string op){
            BVIMBinnaryNode::BaseBinnaryNode::arg1 = arg1;
            BVIMBinnaryNode::BaseBinnaryNode::arg2 = arg2;
            BVIMBinnaryNode::BaseBinnaryNode::op = op;
        }

        static std::string expression_to_string();
        static int calc_node_value();

    private:
        static int result;
        static std::string to_string() ;
        static int to_int() ;
        static void show_expression();

    };

} // BVIMBinnaryNode

#endif //BVIM_BASEBINNARYNODE_H

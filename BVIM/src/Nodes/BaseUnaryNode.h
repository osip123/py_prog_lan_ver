//
// Created by endoc on 14.10.2024.
//

#ifndef BVIM_BASEUNARYNODE_H
#define BVIM_BASEUNARYNODE_H

#include <string>
#include <cmath>

namespace BVIMBaseUnaryNode {

    class BaseUnaryNode {

    public:
        static int arg1, arg2;

        static float calc_node_value();
        static double rase();


    private:
        static std::string op;
        float result;
    };

} // BVIMBaseUnaryNode

#endif //BVIM_BASEUNARYNODE_H

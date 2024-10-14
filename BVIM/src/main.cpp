#include <iostream>

#include "Nodes/BaseBinnaryNode.h"

using namespace BVIMBinnaryNode;

int main() {

    auto* node = new BaseBinnaryNode(4, 6, "+");

    node->calc_node_value();


    return 0;
}

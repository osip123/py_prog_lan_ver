#include <iostream>

#include "Nodes/BaseBinnaryNode.h"

using namespace BVIMBinnaryNode;

int main() {

    BaseBinnaryNode* node = new BaseBinnaryNode(5, 8, "+");

    std::cout << node->cala_value();

    return 0;
}

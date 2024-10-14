#include <iostream>

#include "../src/Nodes/BaseBinnaryNodeode.h"
#include "../src/Nodes/BaseBinnaryNode.h"

using namespace BVIMBinnaryNode;

int main() {

    BaseBinnaryNode* node = new BaseBinnaryNode(5, 8, "+");

    std::cout << node->cala_value();

    return 0;
}

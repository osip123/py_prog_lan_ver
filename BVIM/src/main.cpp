#include <iostream>

#include "Types/BVIMIntTypes.h"
#include "Types/TypesINT.h"

using namespace BVIMvarrible;

int main() {

    auto* NEWINT = new TypesINT(67, BVIMIntTypes::INT16);

    NEWINT->_to_string();

    return 0;
}

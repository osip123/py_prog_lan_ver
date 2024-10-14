//
// Created by endoc on 14.10.2024.
//

#include <iostream>

#include "../src/Types/BaseDataType.h"

using namespace BVIMBaseDataType;

int main() {

    BaseDataType* value = new BaseDataType(BaseVartypes::INT);

    value->init_buffer(5);
    value->get_data();
    std::cout << value->_to_string();

    return 0;
}

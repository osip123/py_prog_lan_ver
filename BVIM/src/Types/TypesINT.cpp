//
// Created by endoc on 14.10.2024.
//

#include "TypesINT.h"

namespace BVIMvarrible {
    int TypesINT::get_value() const {
        return buffer;
    }

    std::string TypesINT::_to_string() const {
        return "buffer" + std::to_string(buffer);
    }
} // BVIMvarrible
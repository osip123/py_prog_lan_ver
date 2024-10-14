//
// Created by endoc on 14.10.2024.
//

#include <string>
#include "BaseDataType.h"

namespace BVIMBaseDataType {

    std::string BaseDataType::_to_string() const {
        if (type == BaseVartypes::FLOAT){
            return "float value" + std::to_string(float_buffer);
        } else{
            return "int buffer" + std::to_string(int_buffer);
        }
    }

    void BaseDataType::init_buffer(float val) {
        float_buffer = val;
    }

    void BaseDataType::init_buffer(int val) {
        int_buffer = val;
    }

    auto BaseDataType::get_data() {
        return type == BaseVartypes::INT ? int_buffer : float_buffer;

    }
} // BVIMBaseDataType
//
// Created by endoc on 14.10.2024.
//

#ifndef BVIM_BASEDATATYPE_H
#define BVIM_BASEDATATYPE_H

#include "BaseVarTypes.h"

namespace BVIMBaseDataType {

    class BaseDataType {

    public:

        BaseVartypes type;
        float buffer_buffer = 0.0f;
        int int_buffer = 0;

        explicit BaseDataType(BaseVartypes type){
            this->type = type;
        }

        void init_buffer(auto val);

        void _to_string();

    };

} // BVIMBaseDataType

#endif //BVIM_BASEDATATYPE_H

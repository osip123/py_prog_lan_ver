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

        explicit BaseDataType(BaseVartypes type){
            this->type = type;
        }

        void init_buffer(float val);
        void init_buffer(int val);

        auto get_data();

        [[nodiscard]] std::string _to_string() const;

    private:
        float float_buffer = 0.0f;
        int int_buffer = 0;

    };

} // BVIMBaseDataType

#endif //BVIM_BASEDATATYPE_H

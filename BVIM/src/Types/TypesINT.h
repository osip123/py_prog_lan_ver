//
// Created by endoc on 14.10.2024.
//

#ifndef BVIM_TYPESINT_H
#define BVIM_TYPESINT_H

#include <string>
#include "BVIMIntTypes.h"

namespace BVIMvarrible {

    class TypesINT {

    public:
        int buffer;
        BVIMIntTypes type;

        TypesINT(int buffer, BVIMIntTypes type){
            this->buffer = buffer;
            this->type = type;
        }

        [[nodiscard]] int get_value() const;

        [[nodiscard]] std::string _to_string() const;

    };

} // BVIMvarrible

#endif //BVIM_TYPESINT_H

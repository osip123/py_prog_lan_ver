import ExseptionTypes from "./ExseptionTypes";


class Exseption{
    public Type:ExseptionTypes;
    public Message:string = '';

    constructor(Type:ExseptionTypes) {
        this.Type = Type;
    }

    create_exseption(){
        if (this.Type === ExseptionTypes.Varr){
            this.Message.concat('Init Varrible Error! exit code -1');
        }

        return this.Message;
    }

    __print_exrption(){
        const value:string = this.create_exseption();
        console.log(value);
    }

}

export default Exseption
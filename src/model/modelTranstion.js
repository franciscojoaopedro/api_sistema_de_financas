const {Schema, model} =require("mongoose")

const schema=new Schema({
    descricao:{
        type:String
    },
    valor:{
        type:Number
    },
    tipo:{
        type:String
    }, 
},
{timestamps: true }
)
const Transation=model("Transation",schema)
module.exports= {Transation}
const { Transation } = require("../model/modelTranstion")


module.exports={
    async index(req,res){
        try {
            const transation= await Transation.find()
            return res.json({error:false,message:"ok",transation})
        } catch (error) {
            return console.log("error buscar todas as transaçao")
        }
    },
    async create(req,res){

        try {
            const {descricao,valor,tipo}=req.body
            const transation= await Transation.create({descricao,tipo,valor})
            return res.json({error:false,transation})
        } catch (error) {
            console.log("erro ao criar transation")
        }

    },

    async delete(req,res){

        try {
            const {id}=req.params;
            await Transation.findByIdAndDelete({_id:id});
            return res.json({error:false, message:"transation deleted!"})
        } catch (error) {
            console.log({
                erro:"erro ao apagar a transation",
                error:error
            })
        }

    }
}
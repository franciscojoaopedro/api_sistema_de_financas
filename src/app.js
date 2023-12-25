const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { router } = require("./routes/routes")
const dotenv=require("dotenv")
dotenv.config()
class App{

    constructor(){
        this.server=express()
        this.connection()
        this.intermediaro()
        this.routes()

    }

    intermediaro(){
        this.server.use(cors());
        this.server.use(express.json())
        
    }
    routes(){
        this.server.use(router)

    }
    async connection(){
          try {
            const MONGOURL=process.env.MONGODB_URL
            await mongoose.connect(`${MONGOURL}`)
            .then(()=>console.log({
                message:"connected db now",
                host:"local",
                dbName:"sistema_de_financa"
            })) 
          } catch (error) {
            console.log({
                erro:"erro ao conectar ao banco",
                error:error
            })
          }
    }


}



module.exports=new App().server;

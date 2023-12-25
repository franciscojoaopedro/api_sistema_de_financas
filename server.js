const server=require("./src/app")


const PORT=3333

server.listen(PORT,()=>{
    console.log({
        message:`server is running now`,
        post:PORT,
        host:`http://localhost:${PORT}`
    })
})


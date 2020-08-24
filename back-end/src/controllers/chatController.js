const message=[]
module.exports = {
async createMessage(req,res){
    console.log(req.body.messageBody)
    if(req){
     
        message.push(req.body.messageBody)
        // console.log(message)
        
    }

},
async getMessages(req,res){
return res.json({mensagem:message})
}
}

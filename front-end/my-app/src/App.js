import React, {useState, useEffect} from 'react';
import axios from  'axios'

import './App.css';

let handleInputMessage = ''
function App() { 
 const [mensagem,setMensagem] = useState([]) 


useEffect(()=>{
  getApi()
},[])

async function getApi(){
  const getMessage = await axios.get('http://localhost:3333/')

  setMensagem(getMessage.data.mensagem) 
  
}

  
  const onChatChange = async event => { 
    handleInputMessage= event.target.value

    // console.log(handleInputMessage)

    //setMensagem (event.target.value)
    
  }

const submit = async ()=>{
  // console.log('------>',mensagem)
  await  setMensagem([handleInputMessage, ...mensagem ])
  let content = []
  await mensagem.forEach(e=> content.push(e))
  let index =  mensagem.map((e,i) => i)
  
  console.log('------>',content[index.pop() ], index.pop(), mensagem)
  // console.log('------>',handleInputMessage )
  let messageBody = await content[index.pop()]
  
  
  await axios.post('http://localhost:3333/',{messageBody})
  
  // setMensagem(handleInputMessage)
}


  return (
    <div className="App">
    <input onChange={event => onChatChange(event)} type="text" placeholder='Type your message here'></input>
    <button onClick={submit}>send</button>
    <p>  {mensagem}  </p>

    </div>
  );

}

export default App;

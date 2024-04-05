
import { useState } from 'react'
import './App.css'

function App() {

      const [selected,setSelected] = useState(null)

      const toggle = (index:any) =>{
          if(selected == index){
            return setSelected(null)
          }
          setSelected(index)
      }
  
 const data:any= [{question:"Is this a good product?",answer:"This is number one ranked product in Sri Lanka"},
  {question:"How much does it cost?",answer:"1000 RS"},{question:"When can I get it?",answer:"within 10 days"}
 ]
  return (
    <>
      <div className='wrapper'>
        <div className='accordian'>
          {data.map((item:any,index:any)=>(
            
            <div className='item' key={index}>
              <div className='title' onClick={()=>toggle(index)} key={index}>
                <h2>{item.question}</h2>
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              <div className={selected === index ? "content java" : "content"}>
                {item.answer}
              </div>
            </div>
            
            ))}
        </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import Meriquee from './components/Meriquee'

const App = () => {
  const [usrinp, setusrinp] = useState('')
  const changFunc = (e) => {
    setusrinp(e.target.value)
  }
  const btnClk = () => {

    if (usrinp === '') {
      alert('Enter the input')
    }
    else {
      let container = document.querySelector('.text')
      let ul = document.createElement('ul')
      let li = document.createElement('li')
      let inpbox = document.createElement('button')
      let deleatebtn = document.createElement('span')
      deleatebtn.textContent = '🗑'
      deleatebtn.style.cursor = 'pointer'
      deleatebtn.onclick = () => {
        li.remove()
      }
      inpbox.style.width = '20px'
      inpbox.style.height = '20px'
      inpbox.style.marginRight = '10px'
      inpbox.style.backgroundColor = 'gold'
      inpbox.style.borderRadius = '50%'
      deleatebtn.id = 'deletebtn'
      let textNode = document.createTextNode(usrinp)
      let span2 = document.createElement('span')
      span2.id = 'span2'
      span2.append(textNode)
      li.append(inpbox)
      inpbox.onclick = () => {
        span2.style.textDecoration = 'line-through'
        inpbox.style.backgroundColor = 'red'
      }
      li.append(span2)
      li.append(deleatebtn)
      ul.append(li)
      container.appendChild(ul)

      setusrinp('')
    }
  }

  return (
    <>
      <Meriquee />
      <center><div className="parent-box">
        <center><h2>Todo List</h2></center>
        <div className="child-box">
          <main>
            <input type="text" placeholder='Enter the task' value={usrinp} onChange={changFunc} />
            <button className='addbtn' onClick={btnClk}>Add</button>
          </main><br />
          <hr />
          <div className="text"></div>
        </div>
      </div></center>
    </>
  )
}

export default App
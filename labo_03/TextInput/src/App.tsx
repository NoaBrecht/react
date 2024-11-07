import React from "react"

const App = () => {
  return (
    <div>
    { Array.from({length: 10}).map((_, i) => {
        return <input type="text" onChange={(e) => alert(`Textbox ${i} changed to ${e.target.value}`)}/>
    })}
  </div>

  )
}

export default App
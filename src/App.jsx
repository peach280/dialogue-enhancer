import "./App.css"
import React from "react"
function App()
{
  const [dialogue,setDialogue] = React.useState({
    text:"",
    tone:"friendly"
  })
  const [isLoading, setIsLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");
  function handleChange(event)
  {
    const {name,value} = event.target
    setDialogue(prev=>{
      return {
      ...prev,
      [name]:value
      }
    })
  }
  function handleSubmit()
  {
    setIsLoading(true);
    fetch("http://localhost:5000/dialogue",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        dialogue:dialogue.text,
        tone:dialogue.tone
      })
    })
    .then(res=>res.json())
    .then((data)=>{
      setOutput(data.enhanced);
      setIsLoading(false)
    })
    .catch(err => {
      console.error("Error:", err);
      setIsLoading(false)
    });
  }
  return (
    <div className="element">
      <label className="label">Enter the dialogue here</label>
      <textarea 
      name="text"
      className="area"
      value={dialogue.text}
      placeholder="Type your dialogue here..."
      onChange={handleChange}>
      </textarea>
      <select 
      name="tone" 
      onChange={handleChange}
      value={dialogue.tone}>
        <option value="friendly">Friendly</option>
        <option value="romantic">Romantic</option>
        <option value="funny">Funny</option>
      </select>
      {isLoading ? (
        <div className="spinner">Enhancing...</div>
      ) : (
        <>
          <button onClick={handleSubmit}>Enhance this!</button>
          {output && (
            <div className="output-box">
              <h3>Enhanced Dialogue:</h3>
              <p>{output}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
export default App
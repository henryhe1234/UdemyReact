import React,{useState} from 'react'

const App = ()=>{
  const [language,setLanguage] = useState('english')
  return (<div className="ui container">
    <div>
      <i className="flag us" onClick={() =>setLanguage('english')}/>
      <i className="flag nl" onClick={() =>setLanguage('dutch')}/>
    </div>
    {language}
  </div>
  )
}
export default App
import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';


const items = [
  {
    title:"what is React",
    content:'React is a front-end js framework'
  },
  {
    title:"why use React",
    content:'React is a favorite JS library'
  },
  {
    title:"how to use react?",
    content:"you use react by creating components"
  }
]


const App = ()=>{
  return (
    <div>
      <Search />
    </div>
  )
}

export default App
import {useEffect,useState} from 'react'
const Route = ({path,children})=>{
  const [currentPath,setCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocationChange = ()=>{
      //update the path to the lastest path
      setCurrentPath(window.location.pathname)
    };
    //add eventlistener when href has change
    window.addEventListener('popstate',onLocationChange)

    return ()=>{
      //clean up event listener
      window.removeEventListener('popstate',onLocationChange)
    }
  },[])

  return (
    currentPath === path
    ? children
    :null
  )
}

export default Route
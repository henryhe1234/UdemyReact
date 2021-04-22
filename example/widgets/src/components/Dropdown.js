import React,{useState,useEffect,useRef} from "react";

const Dropdown = ({ label, options,selected,onSelectedChange }) => {
  const [open,setOpen] = useState(false)
  const ref = useRef();
  useEffect(()=>{

    const onBodyClick = (event)=>{
      if(ref.current && ref.current.contains(event.target)){
        return; 
      }
      setOpen(false)
    }
    
    document.body.addEventListener('click',onBodyClick,{capture:true})

    return ()=>{
      document.body.removeEventListener('click',onBodyClick)
    }
  },[])

  const renderOptions = options.map((option) => {
    if(selected.value === option.value){
      return null;
    }
    
    return (
      <div key={option.value} className="item" onClick={()=>onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });


  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">
            {selected.label}
          </div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;

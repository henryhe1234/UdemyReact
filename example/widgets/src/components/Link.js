import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event)=>{
    //user pressing command key or ctrl key
    if(event.metaKey || event.ctrlKey){
      return 
    }

    event.preventDefault();
    window.history.pushState({},'',href);
    
    //dispatch a event when a href has change
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;

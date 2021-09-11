import React, { useState } from 'react';
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 const activate = () => {
 setActive(true)
 }
 const className = `card ${active ? 'activeCard': ''}`
 return (
 <div className={className} onClick={activate}>{props.value}</div>
 )

}
.activeCard {
 color: red;
 background: pink;
}
const activationHandler = c => { console.log(`${c} has been activated.`) }
...
<CharacterCard value={c} key={i} activationHandler={activationHandler}/>
  const activate = () => {
 if(!active){
 setActive(true)
 props.activationHandler(props.value)
 }
 }

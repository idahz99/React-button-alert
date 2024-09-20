/* eslint-disable @typescript-eslint/no-unused-vars */
//import ListGroup from './Components/ListGroup';
//import Alert from './Components/Alert'
import { useState } from 'react';
import Alert from './Components/Alert';
import Button from './Components/Button';


function App(){
 const [alertvisible, setvisibility] = useState(false);
  return (
  <>
 {alertvisible && <Alert onClose={()=> setvisibility(false)}>My alert</Alert>}
  <div><Button color ="primary" name ="clickmeNow" onClick ={()=> setvisibility(true)} /></div>
  </>
  //(<div><Alert>Hello World</Alert></div>)
  //<div><ListGroup items={items} heading="Cities" onSelectItem={(item:string) => console.log(item)}/></div>
);}

export default App;
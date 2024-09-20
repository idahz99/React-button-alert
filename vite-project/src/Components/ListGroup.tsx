import {useState} from "react";
//typescript
interface Props {
  items:string[];
  heading:string
  onSelectItem:(item: string)=> void;
}
export default function ListGroup({items, heading, onSelectItem}:Props) {

const [selectedindex, setselectedindex] = useState(-1)


  return (
    <>
      <h1>{heading}</h1>
      {items.length ===0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item,index) => (
          <li className={selectedindex === index ? "list-group-item active": "list-group-item"} key={item} onClick={()=>{setselectedindex(index); onSelectItem(item)}} >{item} </li>
        ))}
      </ul>
    </>
  );
}

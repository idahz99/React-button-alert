interface Props{
name: string;
color?: 'primary'|'secondary'|'danger';
onClick:()=> void;


}
export default function Button({name, color='primary', onClick}:Props){
return <button type="button" className={"btn btn-" + color} onClick={onClick} >{name}</button>
}


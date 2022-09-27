import '../assets/Style/Sellers.css'

function Card(props){
return (
    <>
    <div className='sellers' id={props.id}>
        <img src ={props.img}></img>
        <p className='title'>{props.lastName}</p> 
        <p className='autor'>{props.name}</p>
    </div>
    </>
    
)
}
export default Card;
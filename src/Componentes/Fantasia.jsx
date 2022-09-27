import '../assets/Style/Fantasia.css'
import Card2 from './Card';
import img1 from '../assets/Imagenes/hadas.webp'
import img2 from '../assets/Imagenes/laberintos.webp'
import img3 from '../assets/Imagenes/vida.webp'
import img4 from '../assets/Imagenes/dios.webp'

function Fantasia() {
    const fantasia = [
        {
            id:1,
            title: "Cuento de hadas",
            autor: "Stephen King",
            imagen: img1
        },
        {
            id:2,
            title: "Laberintos",
            autor: "Charles Burns",
            imagen: img2
        },
        {
            id:3,
            title: "Vida con mi viuda",
            autor: "José Agustín",
            imagen: img3
        },
        {
            id:4,
            title: "Un dios inclemente",
            autor: "Steven Erickson",
            imagen: img4
        }
    ]

    return (
        <div className='Box-Fantasia'>
            
            {fantasia.map((user) => {
                return (
                    <Card2
                    id={user.id}
                    name={user.autor} 
                    lastName={user.title}
                    img ={user.imagen}
                    />
                );
            })}
            <h2 className='title-F'>Fantasia</h2>
        </div>
    )

}

export default Fantasia;
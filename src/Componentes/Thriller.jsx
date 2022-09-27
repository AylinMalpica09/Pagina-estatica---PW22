import '../assets/Style/Thriller.css'
import Card3 from './Card';
import img1 from '../assets/Imagenes/psicoanalista.png'
import img2 from '../assets/Imagenes/verity.png'
import img3 from '../assets/Imagenes/paciente.png'
import img4 from '../assets/Imagenes/psicologa.png'
function Thriller() {
    const thriller = [
        {
            id:1,
            title: "El psicoanalista",
            autor: "John Katzenbach",
            imagen: img1
        },
        {
            id:2,
            title: "La sombra de un engaño",
            autor: "Colleen Hoover",
            imagen: img2
        },
        {
            id:3,
            title: "La paciente silenciosa",
            autor: "Alex Michaelides",
            imagen: img3
        },
        {
            id:4,
            title: "La psicóloga",
            autor: "Hellen Flood",
            imagen: img4
        }
    ]

    return (
        <div className='Box-Thriller'>
            {thriller.map((user) => {
                return (
                    <Card3
                    id={user.id}
                    name={user.autor} 
                    lastName={user.title}
                    img={user.imagen}
                    />
                );
            })}
            <h2 className='title-T'>Thriller</h2>
        </div>
    )

}

export default Thriller;
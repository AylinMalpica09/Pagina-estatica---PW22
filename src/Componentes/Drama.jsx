import '../assets/Style/Drama.css'
import Card from './Card';
import img1 from '../assets/Imagenes/antes.jpg'
import img2 from '../assets/Imagenes/boulevard.jpg'
import img3 from '../assets/Imagenes/after.jpg'
import img4 from '../assets/Imagenes/estrellas.jpg'
function Drama() {
    const drama = [
        {
            id:1,
            title: "Antes de diciembre",
            autor: "Joana Marcus",
            imagen: img1
        },
        {
            id:2,
            title: "Boulevard",
            autor: "Flor M. Salvador",
            imagen: img2
        },
        {
            id:3,
            title: "After",
            autor: "Anna Todd",
            imagen: img3
        },
        {
            id:4,
            title: "Estrellas fugaces",
            autor: "Robyn Schneider",
            imagen: img4
        }
    ]

    return (
        <div className='Box-Drama'>
            <h2>Drama Romantico</h2>
            {drama.map((user) => {
                return (
                    <Card
                    id={user.id}
                    name={user.autor} 
                    lastName={user.title}
                    img={user.imagen}
                    />
                );
            })}
        </div>
    )

}

export default Drama;
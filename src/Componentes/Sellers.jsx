import '../assets/Style/Sellers.css'
import Card from './Card';
import img1 from '../assets/Imagenes/prisionera.jpg'
import img2 from '../assets/Imagenes/deseos.jpg'
import img3 from '../assets/Imagenes/travesuras.jpg'

function Sellers() {
    const bestSeller = [
        {
            id:1,
            title: "La prisionera de oro",
            autor: "Raven Kennedy",
            imagen: img1
        },
        {
            id:2,
            title: "Cuando los deseos se hacen realidad",
            autor: "Nicolas Sparks",
            imagen: img2
        },
        {
            id:3,
            title: "Travesuras de la niña mala",
            autor: "Mario Vargas Llosa",
            imagen: img3
        }
    ]

    return (
        <div className='Box-Seller'>
            <h2>Best Sellers</h2>
            {bestSeller.map((user) => {
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

export default Sellers;
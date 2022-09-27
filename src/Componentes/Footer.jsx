import '../assets/Style/Footer.css'
import facebook from '../assets/Imagenes/facebook.png'
import instagram from '../assets/Imagenes/instagram.png'
import linkedin from '../assets/Imagenes/linkedin.png'
function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <p>Aylin Venturina Malpica Muñiz</p>
                    <p>213365</p>
                    <p>Programacion Web</p>
                </div>
                <img src={facebook} className='img-footer'></img>
                <img src={instagram} className='img-footer'></img>
                <img src={linkedin} className='img-footer'></img>
            </section>
        </footer>
    )
}
export default Footer;
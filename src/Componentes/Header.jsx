import logo from '../assets/Imagenes/logo.jpeg'
import '../assets/Style/header.css'
function Header() {
    return (
        <header>
            <img src={logo}></img>
            <h1>BookArt</h1>
        </header>
    )
}
export default Header;
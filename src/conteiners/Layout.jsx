import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";

function Layout ({children}){
    return(
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
        );
    };
export default Layout;
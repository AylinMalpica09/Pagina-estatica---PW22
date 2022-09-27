
import Sellers from "./Sellers";
import Drama from "./Drama";
import Thriller from "./Thriller";
import Fantasia from "./Fantasia";
import Footer from "./Footer";

function Main(){
return (
    <main>
        <>
        <section>
            <Sellers/>
        </section>
        <section>
            <Fantasia/>
        </section>
        <section>
            <Drama/>
        </section>
        <section>
            <Thriller/>
        </section>
        </>
    </main>
)
}
export default Main;
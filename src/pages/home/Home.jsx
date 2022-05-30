import { Boxcomponent } from "../../components/boxcomponent/Boxcomponent"
import { Footer } from "../../components/footer/Footer"
import Style from "./home.module.scss"


export const Home = () => {

    return (
        <>
        <section className={Style.homecontainer}>
                <article className={Style.articlecontainer}>
                    <h4>Enjoy our delicious food</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more or less</p>
                    <button>Order Now</button>
                </article>
        </section>
        <Boxcomponent/>
        <Footer/>
        </>
    )
}
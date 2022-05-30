import { Boxcomponent } from "../../components/boxcomponent/Boxcomponent"
import { Header } from "../../components/header/Header"
import Style from "./about.module.scss"
import Image from "../../assets/images/restaurant.jpg"
import { Footer } from "../../components/footer/Footer"


export const About = () => {

    return (
        <>
        <section className={Style.aboutcontainer}>
            <div>
                <h4>Om Restaurant portalen:</h4>
                <p>Vi er et nyopstartet firma som følte at der manglede information om de nærliggende restauranter, derfor har vi opfundet Restaurant portalen, hvor man nemt kan finde åbningsteder og addresser for de forskellige restauranter.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate provident rem voluptates adipisci libero enim aspernatur ipsam expedita architecto ullam impedit, earum quam. Quasi nisi totam quisquam aut quo.</p>
                <img src={Image} alt="image" />
            </div>
        </section>    
        <Footer/>
        </>
    )
}
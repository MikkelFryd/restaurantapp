import { Footer } from "../../components/footer/Footer"
import Style from "./contact.module.scss"

export const Contact = () => {

    return (
        <>
        <section className={Style.contactcontainer}>
            <div>
                <h4>Kom i kontakt med os:</h4>
                <p>Hvis du har spørgsmål er du velkommen til at kontakte os på vores mail eller via formularen nedenunder.</p>
            </div>
            <form>
                <label>Firstname: </label>
                <input type="text" />
                <label>Lastname: </label>
                <input type="text" />
                <label>Email: </label>
                <input type="text" />
                <label>Message: </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </section>
        <Footer/>
        </>
    )
}
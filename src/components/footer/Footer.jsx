import Logo from '../../assets/images/logo.svg'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import Instagram from '../../assets/images/instagram.png'
import Style from './footer.module.scss'

export const Footer = () => {

    return (
        <footer className={Style.footer}>
            <div className={Style.headercontainer}>
                <h2>Restaurant portalen &copy;</h2>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <h4>Thank you for visiting</h4>
                <p>follow us on social media</p>
            </div>
            <div className={Style.linkcontainer}>
                <a href="http://www.facebook.com"><img src={Facebook} alt="facebook" /></a>
                <a href="http://www.twitter.com"><img src={Twitter} alt="twitter" /></a>
                <a href="http://www.instagram.com"><img src={Instagram} alt="instagram" /></a>
            </div>
        </footer>
    )
}
import Food from '../../assets/images/eco-food.png'
import Chef from '../../assets/images/chef.png'
import Takeaway from '../../assets/images/take-away.png'
import Style from './boxcomponent.module.scss'



export const Boxcomponent = () => {


    return (
        <section className={Style.boxcomponent}>
            <div>
                <img src={Food} alt="food" />
                <h5>FOOD NUTRITIONS</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more or less</p>
            </div>
            <div>
                <img src={Chef} alt="chef hat" />
                <h5>COOKING PERIOD</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more or less</p>
            </div>
            <div>
                <img src={Takeaway} alt="takeaway" />
                <h5>HOME DELIVERY</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more or less</p>
            </div>
        </section>
    )
}
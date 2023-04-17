import './menu.css';
import vegan from '../../img/tabs/vegy.jpg';
import elite from'../../img/tabs/elite.jpg';import {useState} from "react";
import post from '../../img/tabs/post.jpg';
import balanced from '../../img/tabs/burger.jpg';
const Menu = (props) => {
    const [menus] = useState([
        {img:vegan, price: '229',title:'Меню "Фитнес"', description:'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'},
        {img:elite, price: '332',title:'2', description:'fafa'},
        {img:post, price: '43',title:'4', description:'awef'},
        {img:balanced, price: '453' ,title:'Меню "Фитнес"', description:'awef'}
    ]);

    return(
        <div className="menu">
            <h2 className="title">Наше меню на день</h2>
            <div className="menu__field">
                <div className="container">
                    {
                        menus.map(item => {
                            return(
                                <div className="menu__item">
                                    <img src={item.img} alt="menu"/>
                                    <h3 className="menu__item-subtitle">{item.title}</h3>
                                    <div className="menu__item-descr">
                                        {item.description}
                                    </div>
                                    <div className="menu__item-divider"></div>
                                    <div className="menu__item-price">
                                        <div className="menu__item-cost">Цена:</div>
                                        <div className="menu__item-total"><span>{item.price}</span> грн/день</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Menu;
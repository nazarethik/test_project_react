import vegan from '../../img/tabs/vegy.jpg';
import elite from'../../img/tabs/elite.jpg';
import post from '../../img/tabs/post.jpg';
import balanced from '../../img/tabs/burger.jpg';
import './preview.css';
import {useState} from "react";
const Preview = () => {
    const [menus, changeMenus] = useState([
            {
                name:'Фитнес' ,description:'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
                isActive: true,
                img: vegan
            },
            {
                name:'Премиум',
                description:'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
                isActive: false,
                img: elite
            },
            {
                name:'Постное',
                description:'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!',
                isActive: false,
                img: post
            },
            {
                name:'Баланс',
                description:'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас. Вкусно и очень полезно!',
                isActive: false,
                img: balanced
            }
        ]);

    function getCurrentMenu(){
        return menus.find(item => {
           return item.isActive;
        });
    }

    function changeMenu(key) {
        changeMenus(
            menus.map((item, index) => {
                item.isActive = (key === index);
                return item;
            })
        );
    }



    return(
        <div className="preview">
            <div className="container">
                <div className="tabcontainer">
                    <div className="tabcontent">
                        <img src={getCurrentMenu().img} alt="vegan"/>
                        <div className="tabcontent__descr">
                            {getCurrentMenu().description}
                        </div>
                    </div>
                    <div className="tabheader">
                        <h3>Выберите стиль питания</h3>
                        <div className="tabheader__items">
                            {
                                 menus.map((item,key) => {
                                     const className = item.isActive ? 'tabheader__item_active fade' : 'tabheader__item';
                                     return (
                                        <div key={key} className={className} onClick={() => changeMenu(key)}>{item.name}</div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="preview__life">
                    Живи полной жизнью!
                </div>
            </div>
        </div>
    )
}
export default Preview;

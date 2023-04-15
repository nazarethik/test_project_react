import vegan from '../../img/tabs/vegy.jpg';
import hamburger from'../../img/tabs/hamburger.jpg';
import './preview.css';
import {useState} from "react";
const Preview = () => {
    const [menus, changeMenus] = useState([
            {name:'Fitness' ,description:' Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', isActive: true, img: vegan},
            {name:'Fitness2', description:'wfafw', isActive: false, img: hamburger},
            {name:'Fitness3', description:'af', isActive: false, img: vegan},
            {name:'Fitness4', description:'wfafw', isActive: false, img: vegan}
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
                        <h3></h3>
                        <div className="tabheader__items">
                            {

                                 menus.map((item,key) => {
                                     const className = item.isActive ? 'tabheader__item_active' : 'tabheader__item';

                                     return (
                                        <div key={key} className={className} onClick={() => changeMenu(key)}>{item.name}</div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Preview;

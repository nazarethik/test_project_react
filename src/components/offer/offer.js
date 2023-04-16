
import './offer.css';
import right from '../../img/icons/right.svg';
import left from '../../img/icons/left.svg';
import food from '../../img/slider/food.jpg';
import olive from '../../img/slider/olive.jpg';
import paprika from '../../img/slider/paprika.jpg';
import pepper from '../../img/slider/pepper.jpg';
import {useState} from "react";
const Offer = () => {
    const [slides, moveSlides] = useState([
        {img: food, isActive: true},
        {img: olive, isActive: false},
        {img: paprika, isActive: false},
        {img: pepper, isActive: false},
    ]);
    function getCurrentSlide() {
        return slides.find(item => {
            return item.isActive;
        });
    }
    // console.log(slides[0].isActive);
    function getCurrentIndex() {
        return slides.indexOf(getCurrentSlide());
    }
    function nextSlide() {
        const currentIndex  = getCurrentIndex();
        moveSlides(
            slides.map((item, index) => {
                if (currentIndex + 1 >= slides.length) {
                   slides[currentIndex].isActive = false;
                   slides[0].isActive = true;
                }  else{
                    item.isActive = (index === currentIndex + 1);
                }
                return item;

            })
        )
    }
    const currentIndex  = getCurrentIndex();
    console.log(currentIndex);
    function prevSlide() {
        const currentIndex  = getCurrentIndex();
        moveSlides(
            slides.map((item, index) => {
                if (currentIndex -1 <= -1) {
                    slides[currentIndex].isActive = false;
                    slides[slides.length - 1].isActive = true;
                }  else{
                    item.isActive = (index === currentIndex - 1);
                }
                return item;

            })
        )
    }

    return(
        <div className="offer">
            <div className="container">
                <div className="offer__text">
                    <h2 className="title">Что мы можем вам предложить?</h2>
                    <div className="offer__descr">
                        Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
                    </div>
                </div>
                <div className="offer__action">
                    <button className="btn btn_dark">Связаться с нами</button>
                </div>
            </div>
            <div className="container">
                <div className="offer__advantages">
                    <h2>Быстро и полезно</h2>
                    <div className="offer__advantages-text">
                        Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты
                        можешь действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в
                        качестве продукта!
                    </div>
                    <h2>Правильный рацион</h2>
                    <div className="offer__advantages-text">
                        Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их
                        приготовления и дробления рациона.
                    </div>
                </div>
                <div className="offer__slider">
                    <div className="offer__slider-counter">
                        <div className="offer__slider-prev" >
                            <img src={left} alt="prev" onClick={prevSlide}/>
                        </div>
                        <span id="current">{getCurrentIndex() + 1}</span>
                        /
                        <span id="total">04</span>
                        <div className="offer__slider-next" onClick={nextSlide}>
                            <img src={right} alt="next"/>
                        </div>
                    </div>
                    <div className="offer__slider-wrapper">
                        <div className="offer__slide">
                            <img src={getCurrentSlide().img} alt="slider"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Offer;
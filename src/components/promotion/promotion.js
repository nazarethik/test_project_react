import './promotion.css';
import {useState, useEffect} from "react";
const Promotion = () => {

        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);
        const deadline = "2023-05-17";
        const getTime = () => {
            const time = Date.parse(deadline) - Date.now();
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        };
        useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000);
            return () => clearInterval(interval);
        }, []);



        return (
            <div className="promotion">
                <div className="container">
                    <div className="promotion__text">
                        <div className="title">Акция для новых клиентов!</div>
                        <div className="promotion__descr">
                            Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях.
                            Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в
                            размере <span>20%!</span>
                            <br/><br/>
                                Акция закончится {deadline}
                        </div>
                    </div>
                    <div className="promotion__timer">
                        <div className="title">Осталось до конца акции:</div>
                        <div className="timer">
                            <div className="timer__block">
                                <span id="days">{days}</span>
                                дней
                            </div>
                            <div className="timer__block">
                                <span id="hours">{hours}</span>
                                часов
                            </div>
                            <div className="timer__block">
                                <span id="minutes">{minutes}</span>
                                минут
                            </div>
                            <div className="timer__block">
                                <span id="seconds">{seconds}</span>
                                секунд
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Promotion
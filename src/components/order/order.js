
import './order.css';
import right from '../../img/icons/right.svg';

import {useState} from "react";
import FormInput from "../input/FormInput";

const Order = () => {

    const [values, setValues] = useState({
        username: "",
        title: "",
        message:"",
    });


    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Ім'я",
        },
        {
            id: 2,
            name: "title",
            type: "text",
            placeholder: "Заголовок",

        },
        {
            id: 3,
            name: "message",
            type: "text",
            placeholder: "Повідомлення",
        },
    ];
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});

    }
    function onSubmit(e) {
        e.preventDefault();
        let message = `<b>Alert</b>\n`;
        message += `Name:${values.username}\n`;
        message += `Title:${values.title}\n`;
        message += `Message${values.message}\n`

        const botToken = '5831857556:AAH8-W_XAsNw0fS_KQX2aS2yxrSTHE7c-xs';
        const chatId = '-980015360';
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const payload = { chat_id: chatId, text: message, parse_mode: 'HTML' };
        fetch(sendMessageUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }
    return (
        <div className="order">
            <div className="container">
                <div className="title">Заказывай пробный день прямо сейчас!</div>
                    <form action="#" className="order__form" onSubmit={onSubmit}>
                            {inputs.map((input) => (
                                    <FormInput className="order__input" key={input.id}
                                               {...input}
                                               value={values[input.name]}
                                               onChange={onChange}/>
                                ))}
                        <img src={right} alt="right"/>
                        <button className="btn btn_dark btn_min">Перезвонить мне</button>
                </form>
            </div>
        </div>
    )

}
export default Order;
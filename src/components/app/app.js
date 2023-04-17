import Header from "../header/header";
import Preview from "../preview/preview";
import Divider from "../divider/divider";
import Offer from "../offer/offer";
import Menu from "../menu/menu";
import Order from "../order/order";

const App = () => {
    return(
        <div>
            <Header/>
            <Preview/>
            <Divider/>
            <Offer/>
            <Divider/>
            <Menu/>
            <Order/>
        </div>
    )
}

export default App;
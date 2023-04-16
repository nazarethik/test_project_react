import Header from "../header/header";
import Preview from "../preview/preview";
import Divider from "../divider/divider";
import Offer from "../offer/offer";
import Menu from "../menu/menu";

const App = () => {
    return(
        <div>
            <Header/>
            <Preview/>
            <Divider/>
            <Offer/>
            <Divider/>
            <Menu/>
        </div>
    )
}

export default App;
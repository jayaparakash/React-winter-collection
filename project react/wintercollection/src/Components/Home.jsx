import Banner from "../Components/Banner"
import Catagori from "../Components/Catagori"
import Latest from "../Components/Latest";
import Blog from "../Components/Blog";
import Pages from "../Components/Pages";
import Footer from "../Components/Footer";

function Home(){
    return(
        <div>
            
            <Banner />
            <Catagori/>
            <Latest/>
            <Blog/>
            <Pages/>
            <Footer/>
        </div>
    )
}

export default Home;

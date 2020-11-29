
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState'

const Home = () => {
    const initialState = useInitialState(API)

    return video.length === 0 ? <h1>Loading...</h1>:(
        <div className="App">
            <Header/>
            <Search/>
            {initialState.mylist.length > 0 &&
            <Categories title = "Mi Lista">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            }
            <Categories title = "Trents">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title = "Lo Mejor de Todo">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Footer/>
        </div>
)
}

export default Home
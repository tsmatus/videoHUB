import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initialState'

const App = () => {
    const initialState = useInitialState(API)

    return initialState.length === 0 ? <h1>Loading...</h1> :(
        <div className="App">
            <Header/>
            <Search/>
            {initialState.mylist.length > 0 &&
            <Categories title = "Mi Lista">
                <Carousel>
                    {initialState.mylist.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
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
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Footer/>
        </div>
)
}

export default App
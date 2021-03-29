import { connect } from 'react-redux';
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Trents'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originals'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

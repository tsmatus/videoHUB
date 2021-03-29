import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import { setFavorite, deleteFavorite } from '../actions';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList, myList } = props;
  const handleSetFavorite = () => {
    if (!myList.find((item) => item.id === id)) {
      props.setFavorite({
        id, cover, title, year, contentRating, duration,
      });
    }
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}` }
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);

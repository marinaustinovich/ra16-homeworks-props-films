import React from 'react'
import PropTypes from 'prop-types';
import './FilmCard.css'
import Stars from '../Stars/Stars';

function FilmCard(props) {
    const { film } = props;
    return (
        <div className="film" id={film.id}>
            <img className="film-image" src={film.img} alt={film.title}/>
            <h3>{film.title}</h3>
            <div className="link-wrapper">
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#"><span className="material-icons">favorite</span></a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#"><span className="material-icons">share</span></a>
            </div>
            <Stars count={film.count}/>
            <div className="btn-wrapper">
                <button className="btn film-price">{`Buy ${film.price}₽`}</button>
                <button className="btn film-details">details →</button>
            </div>
        </div>
    )
}

FilmCard.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        count: PropTypes.number,
    }).isRequired,
}

export default FilmCard

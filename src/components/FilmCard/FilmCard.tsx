import React from "react";

import "./FilmCard.css";
import { FilmType } from "../../types/film";
import { Stars } from "../Stars";

type Props = {
  film: FilmType;
};

export const FilmCard = ({ film }: Props) => (
  <div className="film" id={film.id}>
    <img className="film-image" src={film.img} alt={film.title} />
    <h3>{film.title}</h3>
    <div className="link-wrapper">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        <span className="material-icons">favorite</span>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        <span className="material-icons">share</span>
      </a>
    </div>
    <Stars count={film.count} />
    <div className="btn-wrapper">
      <button className="btn film-price">{`Buy ${film.price}₽`}</button>
      <button className="btn film-details">details →</button>
    </div>
  </div>
);


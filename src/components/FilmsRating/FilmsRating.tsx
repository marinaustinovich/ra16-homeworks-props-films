import React from "react";

import "./FilmsRating.css";
import { FilmType } from "../../types/film";
import { FilmCard } from "../FilmCard";

type Props = {
  films: FilmType[];
};

export const FilmsRating = ({ films }: Props) => (
  <div className="container">
    <h2>Films Rating</h2>
    {films.map((film) => (
      <FilmCard key={film.id} film={film} />
    ))}
  </div>
);

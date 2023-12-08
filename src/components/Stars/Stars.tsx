import React from "react";
import { Star } from "../Star/Star";


type Props = {
  count: number;
};

export const Stars = ({ count }: Props) => {
  if (!Number.isInteger(count) || count < 1 || count > 5) return null;

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};


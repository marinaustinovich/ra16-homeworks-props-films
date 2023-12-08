const { nanoid } = require("nanoid");

export const films = [
  {
    id: nanoid(),
    title: "One Day",
    img: "https://www.hdclub.ua/files/film/big/bigi4e6363e6763bc.jpg",
    price: 1299,
    count: 0,
  },
  {
    id: nanoid(),
    title: "The Notebook",
    img: "https://www.hdclub.ua/files/film/big/bigi4c920f1a5f961.jpg",
    price: 1999,
    count: 1,
  },
  {
    id: nanoid(),
    title: "Remember Me",
    img: "https://www.hdclub.ua/files/film/big/bigi4c8d6d3ab400c.jpg",
    price: 1899,
    count: 5,
  },
  {
    id: nanoid(),
    title: "Closer",
    img: "https://www.hdclub.ua/files/film/big/bigi4c91f09a96946.jpg",
    price: 1200,
    count: 8,
  },
];

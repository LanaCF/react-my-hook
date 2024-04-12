import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useGetData = () => {
  const [textTitle, setTextTitle] = useState('');
  const [textAutor, setTextAutor] = useState('');
  const [storedBooks, setStoredBooks] = useLocalStorage('bookList', []);

  const isButtonDisabled = !textTitle || !textAutor;

  const changeHandlerTitle = (e) => {
    const value = e.target.value;
    setTextTitle(value);
  }

  const changeHandlerAutor = (e) => {
    const value = e.target.value;
    setTextAutor(value);
  }

  const clickHandler = () => {
    const newBook = {
      id: storedBooks.length + 1,
      title: textTitle,
      autor: textAutor,
    };
    setStoredBooks(prevBooks => [...prevBooks, newBook]);
    setTextTitle('');
    setTextAutor('');
  };

  return {
    textTitle,
    textAutor,
    isButtonDisabled,
    changeHandlerTitle,
    changeHandlerAutor,
    clickHandler,
    storedBooks
  };
}
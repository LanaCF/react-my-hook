import React from 'react';
import { useGetData } from "./hooks/useGetData";
import Input from "./components/Input";
import BookList from "./components/BookList";
import useToggle from './hooks/useToggle';

const App = () => {
  const { textTitle, textAutor, isButtonDisabled, changeHandlerTitle, changeHandlerAutor, clickHandler, storedBooks } = useGetData();
  const { toggleHandler, toggle } = useToggle();

  return (
    <div className="container">
      <div className="application">
        <div className="application-text-wrapper">
          <p className="application-text">
            Застосунок "My list-book"
          </p>

          <button className="btn-add-app" onClick={ toggleHandler }>
            { toggle ? 'ЗАКРИТИ' : 'УСТАНОВИТИ' }
          </button>
        </div>

        <div className="application-add">
          <img src="img/app.png" alt="" className={ toggle ? "application-img active" : "application-img" } />
        </div>
      </div>

      <h1>Список прочитаних книжок</h1>

      <div className="form">
        <Input 
          type="text" 
          onChange={ changeHandlerTitle } 
          className="book-title" 
          placeholder="Назва книжки"
          value={ textTitle }
        />

        <Input 
          type="text" 
          onChange={ changeHandlerAutor }
          className="book-autor" 
          placeholder="Автор книжки"
          value={ textAutor }
        />
        
        <button className='btn-add-book' onClick={ clickHandler } disabled={ isButtonDisabled } >
          Додати
        </button>
      </div>

      <BookList books={storedBooks} />
    </div>
  );
}

export default App;


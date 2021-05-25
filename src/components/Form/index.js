import React, { useEffect, useRef }  from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';
import './form.scss';

const Form = ({handleInputChange, handleInputSubmit, value, isLogged}) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form 
      className="form"
      onSubmit={handleInputSubmit}
    >
      <input 
        type="text"
        className="form__input"
        placeholder='Saisissez votre message'
        onChange={handleInputChange}
        value={value}
        ref={inputRef}
        required
        disabled={!isLogged}
        pattern="^(?!\s*$).+"
      ></input>
      <button 
        type="submit"
        className='form__submit'>
          <Send size={32}/>
      </button>
    </form>
  )
};

Form.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
};

export default Form;

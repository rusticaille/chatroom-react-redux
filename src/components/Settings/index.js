import React from 'react';
import './settings.scss';
import {X} from 'react-feather'
import PropTypes from 'prop-types';

const Settings = ({
  handleButtonClick,
  isClosed,
  handleEmailChange,
  handlePasswordChange,
  handleFormSubmit,
  emailValue,
  passwordValue
  }) => {

  return (
    <div className={isClosed ? "connexion-form reduce" : "connexion-form"}>
      <button
        type="button"
        className={isClosed ? "connexion-form__exit-button__rotate connexion-form__exit-button" : "connexion-form__exit-button"}
        onClick={handleButtonClick}
      >
      <X size={20}/>
      </button>
      <form 
        className={ isClosed ? "connexion-form__inputs-group hidden" : "connexion-form__inputs-group"}
        onSubmit={handleFormSubmit}  
      >
        <input 
          type="text"
          placeholder="Email"
          className="connexion-form__inputs"
          value={emailValue}
          onChange={handleEmailChange}
          required
        ></input>
        <input 
          type="text"
          placeholder="Mot de passe"
          className="connexion-form__inputs"
          value={passwordValue}
          onChange={handlePasswordChange}
          required
        ></input>
        <button 
          className="connexion-form__inputs connexion-form__button"
        >
        Envoyer
        </button>
      </form>
    </div>
  )

};

Settings.propTypes = {
    isClosed: PropTypes.bool.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    emailValue: PropTypes.string,
    passwordValue: PropTypes.string
}

export default Settings;

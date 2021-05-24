import React, { useEffect, useRef } from 'react';
import Message from 'src/components/Message';
import PropTypes from 'prop-types';
import './messages.scss';

const Messages = ({messagesList}) => {

  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }), [messagesList];

  return (
    <div 
      className="messages-list"
      ref={messagesRef}
    >
      {messagesList.map((message) => (
        <Message
        message={message.message}
        key={message.message}
        author={message.author}
        />
      ))}
    </div>
  )
};

Messages.propTypes = {
  messagesList: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;

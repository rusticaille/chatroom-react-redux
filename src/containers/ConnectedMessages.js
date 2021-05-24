import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messagesList: state.testMessages,
});

const ConnectedMessages = connect(mapStateToProps)(Messages);

export default ConnectedMessages;

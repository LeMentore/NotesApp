import React, { Component } from 'react';

import messages from 'messages.json';
import 'styles/Message.less';

class Message extends Component {
    constructor(props){
        super(props);
        const { messageId } = this.props.params;
        return {
            message: messages.find(message => message.id === messageId)
        };
    };

    componentWillReceiveProps(nextProps) {
        const { messageId: prevId } = this.props.params;
        const { messageId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
    };

    render() {
        const { message } = this.state;

        return (
            <div className='Message'>
                <p><b>From:</b> {message.senderName} ({message.senderEmail})</p>
                <p><b>To:</b> you</p>
                <p><b>Subject:</b> {message.subject}</p>
                <hr />
                <p>{message.body}</p>
            </div>
        );
    }

}

export default Message;
import React, { Component, PropTypes  } from 'react';

import MessagePreview from 'components/messages/preview';
import messages from 'messages.json';

import 'styles/MessagesInbox.less';

class InboxPage extends Component {
    constructor(props, context){
        super(props);
        context.router;
        this.state = {
            messages
        }
    };

    handlePreviewClick(messageId) {
        console.log(messageId);
        // this.context.router.push(`/messages/inbox/all/${messageId}`);
    };

    render() {
        console.log(this.props);
        const { messages } = this.state;
        const { messageId: selectedMessageId } = this.props.match.params;

        return (
            <div className='InboxPage'>
                <div className='messages'>
                    {
                        messages.map(message =>
                            <MessagePreview
                                key={message.id}
                                selected={message.id === selectedMessageId}
                                onClick={this.handlePreviewClick.bind(null, message.id)}
                                title={message.subject}
                                senderName={message.senderName}
                            />
                        )
                    }
                </div>

                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default InboxPage;
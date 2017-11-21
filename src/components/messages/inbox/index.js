import React, { Component } from 'react';

import MessagePreview from 'components/messages/preview';
import messages from 'messages.json';

import 'styles/MessagesInbox.less';

class InboxPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages
        }
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    handlePreviewClick(messageId) {
        console.log(messageId);
        console.log(this.context.router);
        //this.context.router.push(`/messages/inbox/all/${messageId}`);
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
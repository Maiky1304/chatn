import React, {useState} from 'react';
import StyledChatContainer from "./elements/StyledChatContainer";
import StyledChatTopBar from "./elements/StyledChatTopBar";
import LoadingComponent from "./state/LoadingComponent";
import StyledChatTopBarActions from "./elements/StyledChatTopBarActions";
import StyledChatTopBarButton from "./elements/StyledChatTopBarButton";
import StyledChatMessageInputContainer from "./elements/StyledChatMessageInputContainer";
import StyledChatMessageInput from "./elements/StyledChatMessageInput";

import {doc, updateDoc, arrayUnion, serverTimestamp} from "firebase/firestore";
import {database} from "../lib/firebase";
import {toast} from "react-toastify";
import StyledChatMessage from "./elements/StyledChatMessage";
import StyledChatMessageContainer from "./elements/StyledChatMessageContainer";
import StyledChatMessageAuthorImage from "./elements/StyledChatMessageAuthorImage";
import StyledChatMessageData from "./elements/StyledChatMessageData";
import moment from "moment";

const ChatScreen = ({ user, channel }) => {
    const [message, setMessage] = useState("");

    if (channel == null) {
        return <LoadingComponent />
    }

    function formSubmit(event) {
        event.preventDefault();

        if (message.length === 0) {
            toast.error('Please type at least 1 character.');
            return;
        }

        const messageData = {
            content: message,
            timestamp: Date.now(),
            author: {
                email: user.email,
                name: user.name,
                image: user.image
            }
        }

        setMessage("");

        const ref = doc(database, "channels", channel.id);
        updateDoc(ref, {
            messages: arrayUnion(messageData)
        })
        .catch(err => {
            toast.error("Error whilst trying to send your message in the chat, check console.");
            console.error(err);
        });
    }

    return (
        <StyledChatContainer>
            <StyledChatTopBar>
                <h2>{channel.name}</h2>
                {channel.owner === user.email && (
                    <StyledChatTopBarActions>
                        <StyledChatTopBarButton>Add user</StyledChatTopBarButton>
                    </StyledChatTopBarActions>
                )}
            </StyledChatTopBar>
            <StyledChatMessageContainer>
                {channel?.messages?.map(data => <ChatMessage key="beta" message={data} />)}
            </StyledChatMessageContainer>
            <StyledChatMessageInputContainer onSubmit={formSubmit}>
                <StyledChatMessageInput
                    value={message}
                    placeholder={`Message to ${channel.name}`}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </StyledChatMessageInputContainer>
        </StyledChatContainer>
    );
};

function ChatMessage({ message: { author, content, timestamp } }) {
    return (
        <StyledChatMessage>
            <StyledChatMessageAuthorImage>
                <img src={author.image} alt={author.name} />
            </StyledChatMessageAuthorImage>
            <StyledChatMessageData>
                <div>
                    <h2>{author.name}</h2>
                    <span>{moment(timestamp).calendar()}</span>
                </div>
                <span>{content}</span>
            </StyledChatMessageData>
        </StyledChatMessage>
    )
}

export default ChatScreen;

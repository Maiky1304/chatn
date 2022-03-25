import React from 'react';
import StyledChatContainer from "./elements/StyledChatContainer";
import styled from "styled-components";

const StyledNoChatContainer = styled(StyledChatContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > img {
    height: 30rem;
    width: 30rem;
  }
`

const NoChatScreen = () => {
    return (
        <StyledNoChatContainer>
            <img src="assets/man-working.webp" alt="No channel selected" />
        </StyledNoChatContainer>
    );
};

export default NoChatScreen;

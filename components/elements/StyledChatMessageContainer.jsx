import styled from "styled-components";

const StyledChatMessageContainer = styled.div`
  width: 100%;
  height: calc(100% - 4rem - 10vh);
  padding: 0 1rem;
  
  margin-bottom: auto;
  
  overflow-y: auto;
  
  & > div {
    margin: 1rem 0;
  }
`

export default StyledChatMessageContainer;
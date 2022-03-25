import styled from "styled-components";

const StyledChatMessageAuthorImage = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  gap: 0.7rem;
  
  & > img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
  }
  
  & > span {
    font-weight: lighter;
    font-size: 0.8rem;
  }
`

export default StyledChatMessageAuthorImage;
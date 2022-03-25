import styled from "styled-components";

const StyledChatMessageData = styled.div`
  display: flex;
  flex-direction: column;
  
  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    user-select: none;
    
    & > h2 {
      font-size: 1rem;
      font-weight: 600;
    }
    
    & > span {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      font-size: 0.75rem;
    }
  }
  
  & > span {
    inline-size: 60ch;
    overflow-wrap: break-word;
  }
`

export default StyledChatMessageData;
import styled from "styled-components";

const StyledChatTopBar = styled.div`
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.1);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 1rem;
  
  & > h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export default StyledChatTopBar;
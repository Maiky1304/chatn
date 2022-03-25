import styled from "styled-components";

const StyledChatMessageInput = styled.input`
  border: none;
  padding: 1rem 2rem;
  font-family: Poppins, sans-serif;
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(0,0,0,.1);
  
  &::placeholder {
    font-weight: 700;
    font-family: Poppins, sans-serif;
  }
  
  &:focus {
    outline: none;
  }
`

export default StyledChatMessageInput;
import styled from "styled-components";

const StyledChannelSearch = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  
  & > input {
    height: 100%;
    width: 100%;
    border: none;
    font-family: Poppins, sans-serif;
    font-size: 0.9rem;
    padding: 1rem 1rem;
    transition: 0.2s ease-in all;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: Poppins, sans-serif;
      font-weight: 700;
      color: #020304;
    }
  }
`

export default StyledChannelSearch;
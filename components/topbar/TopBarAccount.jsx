import styled from "styled-components";
import {signOut} from "next-auth/react";

const StyledTopBarAccount = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  transition: 0.3s ease-in all;
  user-select: none;
  
  & > img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
  
  & > span {
    font-size: 1rem;
  }
  
  & > button {
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    background: rgba(228, 228, 228, 0.5);
    border-radius: 25%;
    transition: 0.2s ease-in all;
    cursor: pointer;
    
    &:hover {
      background: rgba(228, 228, 228, 1);
    }
  }
`

const StyledAccountDropdown = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: -50px;
  height: 50px;
`

function AccountDropdown({ state, user }) {
    return (
        <StyledAccountDropdown>
            hello
        </StyledAccountDropdown>
    )
}

export default function TopBarAccount({ user }) {
    return (
        <StyledTopBarAccount>
            <img src={user.image} alt={user.email} referrerPolicy="no-referrer" />
            <span>{user.name}</span>
            <button onClick={() => signOut()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </button>
        </StyledTopBarAccount>
    )
}
import styled from "styled-components";
import {useRouter} from "next/router";

const StyledTopBarTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  cursor: pointer;
  
  background: linear-gradient(#30475E, #9eb5cd);
  -webkit-background-clip: text;
  color: transparent;
`

export default function TopBarTitle({ children }) {
    const router = useRouter();

    return (
        <StyledTopBarTitle onClick={() => router.push('/')}>
            {children}
        </StyledTopBarTitle>
    )
}
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #F5F5F5;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerImage = styled.img`
  height: 8rem;
  width: 8rem;
`

const LoadingComponent = () => {
    return (
        <Container>
            <SpinnerImage src="assets/spinner.svg" alt="Loading..." />
        </Container>
    );
};

export default LoadingComponent;

import styled from "styled-components";

const StyledChannelList = styled.div`
  position: relative;
  
  width: 20rem;
  height: 100%;
  padding: 0.5rem 1rem 1rem 1rem;
  
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  border-right: 1px solid rgba(0,0,0,.1);
  
  overflow-y: auto;
`

export default StyledChannelList;
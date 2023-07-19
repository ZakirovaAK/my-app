import styled from 'styled-components';

export const NotFoundPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const WrapperNotFound = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.mainColor};
`
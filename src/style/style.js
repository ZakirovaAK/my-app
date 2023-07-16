import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    ${'' /* background-color: #181818; */}
    background-color: ${(props) => props.theme.additionalColor};
`;

const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    ${'' /* background-color: #181818; */}
    background-color: ${(props) => props.theme.mainColor};
    display: flex;
`;

export default { Wrapper, Container };
import styled from 'styled-components'

export const Sidebar = styled.div`
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`;

export const Menu = styled.div`
    display: block;
    visibility: visible;
`;

// transform: ${props => props.active ? 'translateX(0)' : 'translate(-200%)'};
// transition: transform 0.5s;
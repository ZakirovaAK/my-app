import styled from 'styled-components'

export const SidebarBlock = styled.div`
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  ${'' /* &_load {
    background-color: #313131;
  } */}

  :not(:last-child) {
    margin-bottom: 30px;
  }
`
export const SidebarItemLoad = styled.div`
    background-color: #313131;
`

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;

  &_load {
    opacity: 0;
  }
`;
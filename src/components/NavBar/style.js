import styled from 'styled-components'
export const NavContainer = styled.div`
    width: 100%;
    height: 104px;
    background-color: #FFF;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px 20px 0 0;
    position: relative;
`
export const NavButton = styled.div`
    font-size: small;
    cursor: pointer;
    align-items: stretch;
    flex-direction: column;
    display: flex;
    color: #828282;
    &:hover {
        color: #6B23E0;
    }
  &.active {
        color: #6B23E0;
    }
`
export const NavIcon = styled.div`
    margin: auto;
    color: #969696;
    &:hover {
        color: #6B23E0;
  }
  &.active {
        color: #6B23E0;
    }
`
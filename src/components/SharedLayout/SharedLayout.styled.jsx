import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MainWrapper= styled.div`

`
export const MainHeader= styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 32px 16px 16px;
  background-color: transparent;
  border-bottom: 1px solid #222;

  @media screen and (min-width: 768px) {
    padding: 32px 50px 16px;
    }



`

export const StyledLink = styled(NavLink)`
  height: 34px;
  width: 115px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color) ;
  transition:  color 1s ease-in-out;
  font-weight: 600;
  transition: 0.3s ease;

  &.active {
    /* color: var(--white); */
    color: #eee;
    background-color: var(--blue);
  
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 90px;
  padding: 22px 16px;

  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color:  var(--text-color);
  border-top: 1px solid #222;
  background-color: transparent;
  transition: color 1s ease-in-out, fill 1s ease-in-out;

  &> svg {
    /* transition: 0.3s ease; */
    transition: color 1s ease-in-out, fill 1s ease-in-out;
    fill: var(--text-color);
  }
`
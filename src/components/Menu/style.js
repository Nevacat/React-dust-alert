import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuSection = styled.div`
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  padding: 3rem 0;
  background-color: #292A2D;
  display:flex;
  justify-content:center;
`

export const Menus = styled(Link)`
  font-size: ${(props) => props.theme.fontRegular};
  color:#fff;
  text-align:center;
  cursor: pointer;
  margin:0 1.5rem;
  text-decoration:none;
`

export const Menu = styled.p`
  padding-top: 1rem;
`
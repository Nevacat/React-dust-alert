import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  :root{
    font-size: 10px;
    font-weight: 300;
    font-family: 'Noto Sans', sans-serif; 
  }
  body{
    background-color:#1E1F21;
    padding:10rem 0 12rem 0;
  }
  select{
    font-size: ${(props) => props.theme.fontRegular};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none; 

    width: max-content;

    color: #444;
    background-color: #fff;
    
    padding: .6em 1.4em .6em 1.4em;
    margin: 0;
    border: 1px solid #aaa;
    border-radius: .5em;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    transition: 0.5s;
  }
  select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(34, 208, 102, .8);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
  }
`

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
}

`;

export const Container = styled.section`
  background-image: url("https://cdn.wallpapersafari.com/54/97/PN0tuw.jpg");
  width: 99.5%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap:30px;
  justify-content: space-evenly;
  padding-top:200px;
  align-items: center;
`;

export const Box = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items:center;
  border: solid #261d44;
  border-radius: 10%;
  margin-top: 1.25rem;

  img {
    width:13vw;
    border-radius: 50%;
  }
  h2 {
    font-size:1.5rem;
    color: gray;
    text-align: center;
    font-family: "Creepster", cursive;
  }
  p {
    font-size:1.2rem;
    color: gray;
    text-align: center;
    font-family: "Creepster", cursive;
  }
`;

export const Header = styled.header`
position:fixed;
  width: 99.7%;
  height: 15vh;
  background-color: rgba(255, 255, 255 /5);
  backdrop-filter: blur(15px);
  border: solid  #261d44;
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style: none;
    font-size: 1.6rem;
    font-family: "Creepster", cursive;
    color: #24abc1;
    :hover{
      cursor: pointer;
      transform: scale(1.1);

    }
  }
  img {
    width: 20vw;
    :hover{
      cursor: pointer;
    }
  }
`;

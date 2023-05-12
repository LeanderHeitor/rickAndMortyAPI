import React, { Component } from 'react'
import axios from "axios";
import * as S from "./style.js";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});


 class App extends Component {

  state = {
    info: []
  };

  componentDidMount(){
    this.PegarPersonagem();
  }

  PegarPersonagem = async ()=>{
    const resposta = await Api.get();
    
    console.log(resposta.data.results);
    
    const itens = resposta.data.results.map((item)=>{
      return{
        ...item
      };
    });
    this.setState({
      info: itens
    })

  }


  render() {
    return (
      <div>
        <S.Header>
          <img src='https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png'></img>
          <ul>
            <li>Characters</li>
            <li>Status</li>
          </ul>
        
        </S.Header>
        <S.Container>
        <S.GlobalStyle />
      
        

        {this.state.info.map((item) => (
          <S.Box>
            <img src={item.image} alt="" />
            <h2> {item.name} </h2>
            <p> {item.status}</p>
           
            
          </S.Box>
        ))}
      </S.Container>
      </div>
    )
  }
}

export default App
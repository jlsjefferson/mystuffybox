import React, { Component } from 'react';

import logo from "../../assets/download/logo.svg";
import "./style.css"

import api from "../../services/api"


export default class Main extends Component {
state = {
  newBox: ''
};

 handleSubmit = async (e) => {
    
   const response = await api.post('boxes', {
       title: this.state.newBox,
   });

    console.log(response.data);

 };

 handleInputChange = (e) => {
   

    this.setState({newBox : e.target.value});
    
 }

  render() {
    return (
    <div className="main-container">
        <form onSubmit={this.handleSubmit}>
            <img src={logo} alt=""/>
             <input
              placeholder="Digite o título da nova Caixa"
              value={this.state.newBox}
              onChange={this.handleInputChange}
              />
             <button type="submit">
                 Criar
             </button>
        </form>
        
    </div>
    );
}
}

import React, { Component } from 'react';
import VarprincipalData from './PrincipalData';

class MasUno extends Component{
   render(){
      return(
         <button onClick={ () => { VarprincipalData.aumentarNumero() } }> Aumentar </button>
      )
   }
}
export default MasUno;
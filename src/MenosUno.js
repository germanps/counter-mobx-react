import React, { Component } from 'react';
import VarprincipalData from './PrincipalData';

class MenosUno extends Component{
   render(){
      return(
         <button onClick={ () => { VarprincipalData.disminuirNumero() } }> Disminuir </button>
      )
   }
}
export default MenosUno;
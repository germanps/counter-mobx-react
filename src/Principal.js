import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';
import { observer } from 'mobx-react';
import MasUno from './MasUno';
import MenosUno from './MenosUno';

class Principal extends Component{
   render(){
      return(
         <div>
            <h2>Desde Principal</h2>
            <p> {VarPrincipalData.numero} </p>
            <MenosUno />
            <MasUno />
         </div>
      )
   }
}
export default observer(Principal);
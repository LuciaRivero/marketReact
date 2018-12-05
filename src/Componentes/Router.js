import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Error from './Error';
import Productos from './Productos';
import infoProductos from '../Datos/Datos.json';


class Router extends Component {
    state = {
        productos: []
    }
    componentWillMount(){
        this.setState({
            productos: infoProductos
        })
    }
    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => (
                        <Productos
                            productos={this.state.Productos} />
                        )}/>
                    <Route exact path="/Nosotros" component={Nosotros}/>
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
         )
    }
}
 
export default Router;


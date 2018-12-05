import React from 'react';
import Producto from './Producto';

class Productos extends Component {
    render() { 
        return (  
            <div className="productos">
                <h2>Nuestros productos</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto => (
                        <Producto
                            informacion={this.props.producto[producto]}/>
                        )
                    )}
                </ul>
            </div>
        );
    }
}
 
export default Productos;
import React from 'react';
import './Footer.css';

const CustomFooter = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Enlaces</h5>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Acerca de nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Contacto</h5>
              <p>Dirección: Calle Falsa 123, Ciudad Ficticia</p>
              <p>Teléfono: +123 456 789</p>
              <p>Email: info@miempresa.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default CustomFooter;
  
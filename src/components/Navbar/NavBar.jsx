import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import CartWidget from '../CartWidget/CartWidget';
import image from '../image/Gamingstar.png';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const db = getFirestore();
        const categoriesRef = collection(db, 'category'); // Aquí ajustamos a 'category'
        const querySnapshot = await getDocs(categoriesRef);
        const categoriesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={image} alt="Logo" width="110" height="110" className="d-inline-block align-top" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">Ordenes</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(category => (
                  <li key={category.id}>
                    <NavLink className="dropdown-item" to={`/category/${category.id}`} isActive={() => {
                      // Check if the current location matches the category link
                      return location.pathname.startsWith(`/category/${category.id}`);
                    }}>
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <NavLink to="/cart"><CartWidget /></NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import Header from '../Header/StorefrontHeader';

const MainComponent: React.FC = ({ children }) => {
    return (        
        <div className="d-flex flex-column sticky-footer-wrapper">
          <Header />
          { children }
          Footer
        </div>
    )
}

export default MainComponent;
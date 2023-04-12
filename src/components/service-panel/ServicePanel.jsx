import React from 'react';
import "./ServicePanel.less"

const ServicePanel = ({children}) => {
    return (
        <div className="octo-menu__service-panel">
            {children}
        </div>
    );
};

export default ServicePanel;
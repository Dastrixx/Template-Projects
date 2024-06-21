import React from 'react';

import styles from '../App.module.css';

const Header = ({ toggleSidebar, sidebarVisible }) => {
    return (
        <header className={styles.header}>
            <h1>Header</h1>
            <button onClick={toggleSidebar}>
                {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
        </header>
    );
};



export default Header;

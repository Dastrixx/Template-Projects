import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from '../App.module.css';

const MainLayout = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className={styles.container}>
            <Header toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className={`${styles.sidebar} ${sidebarVisible ? '' : styles['sidebar-hidden']}`}>
                <Sidebar />
            </div>
            <div className={`${styles.content} ${sidebarVisible ? '' : styles['content-full']}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;

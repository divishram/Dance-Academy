import React from "react";
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.Nav_Wrapper}>
            <a href="#">divish dance</a>
        </nav>
    )
}

export default NavBar
import styles from './Header.module.css';

import feedLogo from '../assets/feed-logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={feedLogo} alt="Feed Logo" />
        </header>
    )
    
}
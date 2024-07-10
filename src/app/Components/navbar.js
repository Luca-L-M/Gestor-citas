import Link from 'next/link';
import styles from '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h2>Nav</h2>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="./CrearCita">CrearCita</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;

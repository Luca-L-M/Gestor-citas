import Link from 'next/link';
import styles from '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h2>Nav</h2>
            <ul>
                <li><Link href="./">Home</Link></li>
                <li><Link href="./reservas">Reservas</Link></li>
                <li><Link href="./quienes-somos">Creditos</Link></li>
                <li><Link href="./contactos">Ayuda</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;

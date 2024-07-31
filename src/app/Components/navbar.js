import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/reservas">Reservas</Link></li>
                <li><Link href="/quienes-somos">Creditos</Link></li>
                <li><Link href="/contactos">Ayuda</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
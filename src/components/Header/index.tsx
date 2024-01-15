import { useContext } from "react";
import Link from 'next/link';
import styles from './styles.module.scss';

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from "@/contexts/AuthContext";

export function Header(){

    const { signOut } = useContext(AuthContext);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logocortado.svg" width={190} height={60}/>
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <span><strong>Categoria</strong></span>
                    </Link>                    
                    <Link href="/product">
                        <span><strong>Cardapio</strong></span>
                    </Link>
                    <button onClick={signOut}>
                        <FiLogOut color="var(--red)" size={24} />
                    </button>
                </nav>
            </div>                        
        </header>
    )
}
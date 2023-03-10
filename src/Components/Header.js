import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import {ReactComponent as Dogs} from '../assets/dogs.svg'

export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
                <Dogs />
            </Link>
            <Link className={styles.login} to="/login">Login / Criar</Link>
        </nav>
    </header>
  )
}

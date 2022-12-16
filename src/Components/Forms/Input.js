import React from 'react'

import styles from '../../styles/Input.module.css'

export default function Input({ label, type, name }) {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name}>{label} className={styles.label}</label> 
        <input id={name} name={name} className={styles.input} type={type}  />
        <p className={styles.error}>Error</p>
    </div>
  )
}

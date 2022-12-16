import React from 'react'

import styles from '../../styles/Button.module.css'

export default function Button( { children, ...props}) {
  return (
    <div {...props}
    className={styles.button}>
      {children}
    </div>
  )
}

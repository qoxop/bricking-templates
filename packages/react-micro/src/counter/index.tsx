import React, { useState } from 'react';
import styles from './styles.module.less';

const Counter:React.FC = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(c => c + 1)
  const decrease = () => setCount(c => c - 1)
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        counter
      </div>
      <div className={styles.content}>
        <h2>{count}</h2>
        <div className={styles.btn_group}>
            <div>
                <button onClick={increase}>increase</button>
            </div>
            <div>
              <button onClick={decrease}>decrease</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export {
  Counter
} 
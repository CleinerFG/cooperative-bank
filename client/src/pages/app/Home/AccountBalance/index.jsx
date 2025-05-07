import { useState } from 'react';

import { EyeClosed, Eye, Asterisk } from 'lucide-react';
import styles from './styles.module.scss';

function genAsterisk() {
  const asterisks = new Array(5).fill(null).map((_, i) => <Asterisk key={i} />);
  return <>R$ {asterisks}</>;
}

function getBalance() {
  return <>R$ 7.482,59</>;
}

function AccountBalance() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className={styles.container}>
      <p className={styles.label}>Balance</p>
      <div className={styles.valueContainer}>
        <div className={styles.value}>
          {isHidden ? genAsterisk() : getBalance()}
        </div>
        <button onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? <EyeClosed /> : <Eye />}
        </button>
      </div>
    </div>
  );
}

export default AccountBalance;

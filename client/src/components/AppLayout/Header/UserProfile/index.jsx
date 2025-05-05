import styles from './styles.module.scss';

function UserProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>M</div>
      <div>
        <h3>Hello, Meg</h3>
      </div>
    </div>
  );
}

export default UserProfile;

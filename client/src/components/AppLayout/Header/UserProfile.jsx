import styles from '../../../styles/layout/header.module.scss';

function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userAvatar}>M</div>
      <div>
        <h3>Hello, Meg</h3>
      </div>
    </div>
  );
}

export default UserProfile;

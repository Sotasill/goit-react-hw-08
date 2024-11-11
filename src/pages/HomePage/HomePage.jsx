import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle>
        Добро пожаловать в Менеджер Контактов!{" "}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>
      </PageTitle>
      
      <div className={styles.content}>
        <div className={styles.features}>
          <h2>Что вы можете делать:</h2>
          <ul>
            <li>
              <span role="img" aria-label="add">➕</span> Создавать новые контакты
            </li>
            <li>
              <span role="img" aria-label="view">👀</span> Просматривать существующие контакты
            </li>
            <li>
              <span role="img" aria-label="edit">✏️</span> Редактировать информацию
            </li>
            <li>
              <span role="img" aria-label="delete">🗑️</span> Удалять ненужные контакты
            </li>
          </ul>
        </div>

        <div className={styles.welcome}>
          <p>
            Организуйте свои контакты легко и эффективно с нашим удобным приложением!
          </p>
          <div className={styles.cta}>
            <p>Начните прямо сейчас - создайте аккаунт или войдите в систему</p>
          </div>
        </div>
      </div>
    </div>
  );
}

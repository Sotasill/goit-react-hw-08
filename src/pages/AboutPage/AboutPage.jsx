import css from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>О приложении</h1>
      <p className={css.description}>Это приложение телефонной книги позволяет пользователям:</p>
      <ul className={css.list}>
        <li className={css.listItem}>Создавать новые контакты</li>
        <li className={css.listItem}>Просматривать существующие контакты</li>
        <li className={css.listItem}>Редактировать информацию о контактах</li>
        <li className={css.listItem}>Удалять ненужные контакты</li>
        <li className={css.listItem}>Фильтровать контакты по имени</li>
      </ul>
      <p className={css.footer}>Для использования приложения необходимо зарегистрироваться или войти в существующий аккаунт.</p>
    </div>
  );
};

export default AboutPage;

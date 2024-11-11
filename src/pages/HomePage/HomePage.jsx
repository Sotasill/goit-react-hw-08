import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle>
        Welcome to Our Contact Manager!{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
     
    </div>
  );
}

import styles from "../styles/result.module.css";
import { useRouter } from "next/router";
import Statistic from "../components/statistic";
import Button from "../components/button";

export default function Result() {
  const router = useRouter();
  const total = router.query.total !== undefined ? +router.query.total : 0;
  const rightAnswers =
    router.query.rightAnswers !== undefined ? +router.query.rightAnswers : 0;
  const percentage = Math.round((rightAnswers / total) * 100);
  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div className={styles.div}>
        <Statistic text="Perguntas" value={total.toString()} />
        <Statistic
          text="Certas"
          value={rightAnswers.toString()}
          backgroundColor="#9cd2a4"
        />
        <Statistic
          text="Percentual"
          value={`${percentage.toString()}%`}
          backgroundColor="#de6a33"
        />
      </div>
      <Button href="/" text="Tentar" />
    </div>
  );
}

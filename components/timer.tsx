import { url } from "inspector";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/timer.module.css";

interface timerProps {
  key: number;
  duration: number;
  timeOut: () => void;
}

export default function Timer(props: timerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={window.innerWidth === 300 ? 90 : 120}
        isPlaying
        duration={props.duration}
        onComplete={props.timeOut}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[
          props.duration,
          props.duration + props.duration / 2 - props.duration,
          0,
        ]}
        isSmoothColorTransition
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

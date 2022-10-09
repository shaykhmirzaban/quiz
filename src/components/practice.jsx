import { useEffect, useState } from "react";

export default function Practice() {
  let [time, setTime] = useState({
    minut: 0,
    second: 0,
  });

  useEffect(() => {
    let interval;
    const runTime = () => {
      var updateMinut = time.minut,
        updateSecond = time.second;

      if (updateSecond === 60) {
        updateMinut++;
        updateSecond = 0;
      }

      if (updateMinut === 2) {
        console.log("time is enghuf");
        clearInterval(interval);
      } else {
        updateSecond++;
      }
      
      setTime(time)
      time = { minut: updateMinut, second: updateSecond };
    };

      interval = setInterval(runTime, 1000);
  }, []);

  return (
    <section className="timer">
      <h1>Timer</h1>

      <h4>
        {time.minut < 10 ? `0${time.minut}` : time.minut}:  
        {time.second < 10 ? `0${time.second}` : time.second}
      </h4>
    </section>
  );
}

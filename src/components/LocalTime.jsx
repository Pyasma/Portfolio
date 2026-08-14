import { useEffect, useState } from "react";
import { profile } from "../data/resume";

function format(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: profile.timezone,
  }).format(date);
}

export default function LocalTime() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

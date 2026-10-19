"use client";

import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function KathmanduTime() {
  const [time, setTime] = useState("...");

  useEffect(() => {
    const updateTime = () => setTime(timeFormatter.format(new Date()));

    updateTime();
    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <time className="home-contact__time" aria-label="Current time in Kathmandu">
      <span>Kathmandu</span>
      <strong>{time} NPT</strong>
    </time>
  );
}

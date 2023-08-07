import { useEffect, useState } from "react";

interface TimeFormatOptions {
  variant?: "full" | "short";
  hour: "numeric" | "2-digit";
  minute?: "numeric";
  hour12?: boolean;
}

export function formatTime(
  time: Date | undefined,
  options?: TimeFormatOptions
) {
  if (!time) {
    return "Invalid time";
  }

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: options?.hour,
    minute: options?.minute,
    hour12: options?.hour12,
  });

  return timeFormatter.format(time);
}

export function useCurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return formatTime(date, {
    variant: "full",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
}

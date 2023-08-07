interface DateFormatOptions {
  variant?: "full" | "short";
}

export function formatDate(
  date: Date | undefined,
  options?: DateFormatOptions
) {
  if (!date) {
    return "Invalid date";
  }

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: options?.variant === "short" ? "long" : "short",
    year: "numeric",
    day: "numeric",
    weekday: "long",
  });

  const relativeParts = dateFormatter
    .formatToParts(date)
    .filter((item) => item.type !== "literal");

  const weekDay = relativeParts.find((item) => item.type === "weekday")!;
  const month = relativeParts.find((item) => item.type === "month")!;

  if (options?.variant === "short") {
    return `${month.value} ${date.getFullYear()}`;
  }

  return `${weekDay.value}, ${
    month.value
  } ${date.getDate()}, ${date.getFullYear()}`;
}

type ObjectWithTimeIdentifier = { time: string };
export function findByClosestDateToNow<T extends ObjectWithTimeIdentifier>(
  array: T[]
) {
  const now = new Date();
  let found: T = array[0];

  for (const element of array) {
    const compareDate = new Date(element.time);
    const foundDate = new Date(found.time);

    if (
      compareDate.getTime() > foundDate.getTime() &&
      compareDate.getTime() < now.getTime()
    ) {
      found = element;
    }
  }

  return found;
}

export function findNextNthItemsByHourOffset<
  T extends ObjectWithTimeIdentifier
>(array: T[], offset: number) {
  const now = new Date();
  const result: T[] = [];

  for (const element of array) {
    const compareDate = new Date(element.time);
    const hourDifference = compareDate.getHours() - now.getHours();

    if (hourDifference > 0 && hourDifference <= offset) {
      result.push(element);
    }
  }

  return result;
}

export function createDateFromAMPMString(value: string) {
  const [time, suffix] = value.split(" ");
  const [hours, minutes] = time.split(":");

  const adjustedHours =
    suffix.toLowerCase() === "pm" ? Number(hours) + 12 : Number(hours);

  const date = new Date();
  date.setHours(Number(adjustedHours));
  date.setMinutes(Number(minutes));

  return date;
}

export function getRelativeTimeString(
  date: Date | number,
  lang = navigator.language
) {
  const timeMs = typeof date === "number" ? date : date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ];

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
  ];

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds)
  );

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

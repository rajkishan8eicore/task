import DateAPI from "@/api/dateApi";
import { useEffect, useState } from "react";

export default function CurrentTime() {
  const dateFormat: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
  };
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const [currentTime, setCurrentTime] = useState<String>(
    new Date(Date.now()).toLocaleString("en-US", timeFormat)
  );
  const [currentDate, setCurrentDate] = useState<String>(
    new Date(Date.now()).toLocaleString("en-US", dateFormat)
  );

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await DateAPI.getDate();
        setCurrentTime(
          new Date(response.date).toLocaleString("en-US", timeFormat)
        );
        setCurrentDate(
          new Date(response.date).toLocaleString("en-US", dateFormat)
        );
      } catch (error) {
        console.error("Failed to fetch date:", error);
        setCurrentTime("");
        setCurrentDate("Failed to fetch date!");
      }
    };
    fetchDate();
    const interval = setInterval(fetchDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="mt-1 text-gray-800 font-bold text-lg">{currentTime}</p>
      <p
        className={`mt-1 ${
          currentTime ? "text-gray-800" : "text-red-600"
        } text-base`}
      >
        {currentDate}
      </p>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
    }, 500); // Adjust the interval duration as needed

    // Uncomment the line below when you're ready to redirect
    router.push("/screens/about");

    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white w-full">
      <p className="text-8xl font-grifter">Loading{dots}</p>
    </div>
  );
}

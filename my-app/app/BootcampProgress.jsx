'use client';
import { useState, useEffect } from 'react';
import MyData from './data/data';
import Link from 'next/link';
import ThemeToggle from './helpers/ThemeToggle';
import AnimatedText from './helpers/AnimatedText';

const BootcampProgress = () => {
  const startDate = new Date("Oct 14, 2024");
  const endDate = new Date("Dec 20, 2024");
  const totalWorkDays = 47;
  const [currentDay, setCurrentDay] = useState(0);

  // Helper function to check if a day is a weekend
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 6 || day === 0; // Saturday or Sunday
  };

  const date = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',  // 'long' for full names, 'short' for abbreviated
    year: 'numeric',
    month: 'long',    // 'long' for full names, 'short' for abbreviated
    day: 'numeric'
  }).format(new Date());

  // Calculate the current day in the bootcamp
  const calculateCurrentDay = () => {
    const today = new Date();

    // If the bootcamp has not started yet
    if (today < startDate) {
      return 0;
    }

    // If the bootcamp has ended
    if (today > endDate) {
      return totalWorkDays;
    }

    let dayCount = 0;
    let currentDate = new Date(startDate);

    // Loop through each day from the start date to today
    while (currentDate <= today) {
      if (!isWeekend(currentDate)) {
        dayCount++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dayCount;
  };

  useEffect(() => {
    const day = calculateCurrentDay();
    setCurrentDay(day);
  }, []); // Runs only once when the component is mounted

  // Get today's lessons based on currentDay
  const todaysLessons = currentDay > 0 ? MyData[currentDay - 1]?.lessons || [] : []; 

  return (
    <div id="progress" className='text-black dark:text-white h-screen flex flex-col text-sm justify-between p-4 bg-slate-50 dark:bg-gray-950'>
      <div className="w-full flex justify-between items-center">
        <AnimatedText size='text-3xl' text='Bienvenue à la Capsule 🚀 '/>
        <ThemeToggle />
      </div>
      
      <h1 className="text-3xl font-bold ">Batch #142 Marseille</h1>
      <hr />
      <p className="text-lg ">{date}</p>
      <p className=" text-lg"> Bonjour Les Devs! 💻  </p>
      <h2 className="text-lg font-bold ">Bootcamp progress 📈:<span id="day-count">{currentDay}/{totalWorkDays}</span></h2>

      <div className=" my-4">
        <h2 className="text-xl font-semibold mb-4">L'objectif du jour 📌<span className=' animate-ping'>:</span> </h2>
        <hr />
        {todaysLessons.length > 0 ? (
          todaysLessons.map((lesson, index) => (
            <p key={index} className="my-2">📂 {lesson.item}</p>
          ))
        ) : (
          <p className="my-4"> 💤 Pas de cours pour aujourd’hui 💔!</p>
        )}

      <AnimatedText size='text-xl' text='Happy coding! 🏴‍☠️ '/>
      </div>

      <footer className="text-center">
        <p>Copyright &copy; {new Date().getFullYear()} - 
          <Link target="_blank" href="https://kesraouicreative.com">
            Kesraoui Mohamed
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default BootcampProgress;

'use client'
import { useState, useEffect } from 'react';
import MyData from './data/data';
import Link from 'next/link';

const BootcampProgress = () => {

  const startDate = new Date("Oct 14, 2024");
  const endDate = new Date("Dec 20, 2024");
  const totalWorkDays = 50;
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
  const todaysLessons = MyData[currentDay - 1]?.lessons || []; // Adjusting for 0-indexing

  return (
    <div id="progress" className='text-white relative p-8'>
        <p> 🚀 Bienvenue à la Capsule  🚀</p>
      <h1 className="text-3xl font-bold mb-4  ">Batch #142 Marseille</h1>
      <hr />
      <p className="text-lg py-2  ">      {date} </p>
      <br />
      <p> Bonjour Les Devs! 💻  </p>
      <h2 className="text-xl font-bold mb-4"   >Bootcamp progress 📈:<span id="day-count">{currentDay}/{totalWorkDays}</span></h2>

      <div className="py-8 my-4 text-white ">

        <h2 className="text-2xl font-semibold mb-4">Le but du jour 📌:</h2>
      <hr />

        {todaysLessons.length > 0 ? (
          todaysLessons.map((lesson, index) => (
            <p key={index} className=" my-2">📂 {lesson.item}</p>
          ))
        ) : (
          <p className="my-4"> ⚙️ Pas de cours pour aujourd’hui 💔!</p>
        )}
      </div>

      <footer className="text-center absolute bottom-0 ">
        <p>Copyright &copy; {new Date().getFullYear()} - <Link target="_blank" href="https://kesraouicreative.com">
        Kesraoui mohamed
        </Link></p>
      </footer>
    </div>
  );
};



export default BootcampProgress;

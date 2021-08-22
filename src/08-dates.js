/**
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ. 
 * Напишите программу, выводящую день недели по введённой дате.
 * 
  * 2.Написать программу, которая выводит в консоль количество минут, 
  * прошедшее с начала сегодняшнего дня.
  * 
  * 3.*В двух переменных хранятся даты рождения двух пользователей 
  * в формате ДД.ММ.ГГГГ. Написать программу, которая определяет 
  * более молодого пользователя.
 */

/**
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ. 
 * Напишите программу, выводящую день недели по введённой дате.
 */
export function getDay() {
  const dateInput = prompt('Enter a date in the format: DD.MM.YYYY');
  // const dateInput = '08.08.2021';
  
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  
  const [date, month, year] = dateInput.split('.');
  const dayFull = `${year}-${month}-${date}`;
  const dayNum = new Date(dayFull).getDate() - 1;
  const dayStr = (dayNum === -1) ? days[6] : days[dayNum];

  console.log(dayStr);

  return dayStr;
}

/**
 * 2.Написать программу, которая выводит в консоль количество минут, 
  * прошедшее с начала сегодняшнего дня.
 */
export function minutesToday() {
  const now = new Date();
  const todayDateTs = Date.parse(now.toDateString());
  const nowTs = Number(now);

  const minutesToday = (nowTs - todayDateTs) / 1000 / 60;

  console.log(minutesToday.toFixed(0));
}

/**
 * 3.*В двух переменных хранятся даты рождения двух пользователей 
  * в формате ДД.ММ.ГГГГ. Написать программу, которая определяет 
  * более молодого пользователя.
 */

const bday1 = '20.02.2002';
const bday2 = '11.11.1111';

export function youngest(bday1, bday2) {
  function getDate(str) {
    const [date, month, year] = str.toString().split('.');
    const day = `${year}-${month}-${date}`;

    return day;
  }

  const bdayDate1 = Date.parse(getDate(bday1));
  const bdayDate2 = Date.parse(getDate(bday2));
  const youngestDate = new Date(Math.min(bdayDate1, bdayDate2));
  
  const youngestStr = (youngestDate === bdayDate1) ? bday1 : bday2;

  return youngestStr;
}
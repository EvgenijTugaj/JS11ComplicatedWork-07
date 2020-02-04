'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const currentDay = new Date().getDay();

for(let i = 0; i < week.length; i++){
  if(i === currentDay - 1)
    console.log(week[i].bold());
  if(week[i] === 'Суббота' || week[i] === 'Воскресенье'){
    console.log(week[i].italics());
  }else{
    console.log(week[i]);
  }
}
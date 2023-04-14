import '../css/main.scss';
import humanizeDate from './humanizeDate';

const $cards = document.querySelectorAll('.card-testimonial');

$cards.forEach(card => {
  const $date = card.querySelector('.card-testimonial__date');
  const humanDate = humanizeDate($date.textContent);
  $date.textContent = humanDate;
})

//import dayjs from 'dayjs';
//console.log(dayjs('2020-05-12').year());
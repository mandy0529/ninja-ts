import {isSaturday} from './interface/HasInterface.js';

const saturday: isSaturday = {
  do: 'eat something foods',
  date: '15/01/2021',
  who: 'with gan',
  why: 'for play',
  hours: 1,
  eat: (food: 'sishi') => {
    console.log(`eat ${food}`);
  },
  money: (amount: 39) => {
    console.log(`we spend $${amount}`);
    return amount;
  },
};

// console.log(saturday, ' saturday');

const dateWithBoyFriend = (date: isSaturday) => {
  console.log(date.do, '1');
};

// dateWithBoyFriend(saturday);

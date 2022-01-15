"use strict";
const saturday = {
    do: 'eat something foods',
    date: '15/01/2021',
    who: 'with gan',
    why: 'for play',
    hours: 1,
    eat: (food) => {
        console.log(`eat ${food}`);
    },
    money: (amount) => {
        console.log(`we spend $${amount}`);
        return amount;
    },
};
console.log(saturday, ' saturday');
const dateWithBoyFriend = (date) => {
    console.log(date.do, '1');
};
dateWithBoyFriend(saturday);

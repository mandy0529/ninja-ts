"use strict";
// 1. dom rule
// ! 이걸 뒤에 붙이면 null이 아닌 순간만 잡는다!! if(input) console.log(input.href)와 같다.
const form = document.querySelector('form');
const select = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        toform: toForm.value,
        select: select.value,
        detail: detail.value,
        amount: amount.valueAsNumber,
    });
};
form.addEventListener('submit', handleSubmit);

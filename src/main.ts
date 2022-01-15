// 1. dom rule
// ! 이걸 뒤에 붙이면 null이 아닌 순간만 잡는다!! if(input) console.log(input.href)와 같다.

const form = document.querySelector('form')!;
const select = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();

  console.log({
    toform: toForm.value,
    select: select.value,
    detail: detail.value,
    amount: amount.valueAsNumber,
  });
};

form.addEventListener('submit', handleSubmit);

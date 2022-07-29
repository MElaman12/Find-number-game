let random_num = Number(Math.random().toString().substr(3, 2))
let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let notice = document.querySelector('.notice');

function find_numb(num) {
    if (num == inpt.value) {
        alert('Ты выиграл!')
        notice.textContent = '';
        random_num = Math.random().toString().substr(3, 2);
    }

    if (inpt.value < num) {
        notice.innerText = 'Больше...';
    } else if (inpt.value > num) {
        notice.innerText = 'Меньше...';
    } else {
        alert('GG')
        random_num = Math.random().toString().substr(3, 2);
        inpt.value = '';
    }
}

btn.onclick = () => {
    if (inpt.value == '') {
        alert('Type some number... LOL')
    } else {
        find_numb(random_num)
        setTimeout(() => {
            inpt.value = '';
        }, 1000)
    }
}

window.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        find_numb(random_num);
        setTimeout(() => {
            inpt.value = '';
        }, 1000)

    }
})
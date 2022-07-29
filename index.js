let random_num = Number(Math.random().toString().substr(3,2))
let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let notice = document.querySelector('.notice');

function find_numb(num){
    if(num == inpt.value){
        notice.innerText = '';
        alert('Ты выиграл!')
        setTimeout(inpt.value = '', 3000);
        random_num = Math.random().toString().substr(3,2);
    }

    if(random_num[0] == 0){
        random_num = Math.random().toString().substr(3,2)
    }else if(inpt.value < num){
        notice.innerText = 'Больше...';
    }else if(inpt.value > num){
        notice.innerText = 'Меньше...';
    }else{
        alert('GG')
        random_num = Math.random().toString().substr(3,2);
        inpt.value = '';
    }
}

btn.onclick = () => {
    if(inpt.value == ''){
        alert('Type some number... LOL')
    }else{
        find_numb(random_num)
    }
}

window.addEventListener('keypress',(e) =>{
    if(e.key == "Enter"){
        find_numb(random_num)
    }
})
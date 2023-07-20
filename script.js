let btn1 = document.querySelector('.yes');
let btn2 = document.querySelector('.no');
let img = document.querySelector('img');
let h1 = document.querySelector('h1');

let gg = false;

btn2.addEventListener('click', () => {
        btn1.innerText = 'NO'
        btn2.innerText = 'Yes'
        btn1.style.backgroundColor = "red"
        btn2.style.backgroundColor = "rgb(0, 184, 0)"
        img.style.display = "flex"
        h1.style.display = "none"
        gg = true;
})

btn1.addEventListener('click', () => {
    if(!gg){
        img.style.display = "flex"
        h1.style.display = "none"
    }else{
        btn1.style.display = "none";
        btn2.style.display = "none";
        img.style.display = "none";
        h1.style.display = "none";
        window.close();
    }
})
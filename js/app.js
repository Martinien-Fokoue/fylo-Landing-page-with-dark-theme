var input = document.querySelector('.form input'),
    error = document.querySelector('.error'),
    btn = document.querySelector('.form button'),
    reg = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        if (!reg.test(input.value)) {
            error.style.opacity = '1';
            input.value = 'example@email.com';
            input.style.fontWeight = '700';
            input.style.color = 'hsl(0, 100%, 63%)';
        }
    });

    input.addEventListener('focus', ()=>{
        error.style.opacity = '0';
        input.value = '';
        input.style.fontWeight = '400';
        input.style.color = 'hsl(217, 28%, 15%)';
    });
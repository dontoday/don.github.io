const btn= document.querySelector('#btn');
const list= document.querySelector('#list');
btn.addEventListener('click', ()=>{
    if(list.style.display == 'block'){
        list.style.display = 'none';
    }
    else{
        list.style.display = 'block';
    }
});
const btne= document.querySelector('#btne');
const liste= document.querySelector('#liste');
btne.addEventListener('click', ()=>{
    if(liste.style.display == 'block'){
        liste.style.display = 'none';
    }
    else{
        liste.style.display = 'block';
    }
});


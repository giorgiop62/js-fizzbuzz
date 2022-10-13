const container = document.querySelector('.container');

for( let i=1;i<=100; i++){
  const box = document.createElement('div');
  box.className = 'box';

  if(( i % 3 == 0) && (i % 5 == 0)){
    box.classList.add('red');
    box.innerHTML = 'fixbuz';
    console.log('fixbuz');

  }else if(i % 3 == 0){
    box.classList.add('green');
    box.innerHTML = 'fix';
    console.log('fix');

  }else if ( i % 5 == 0){
    box.classList.add('yellow');
    box.innerHTML = 'buz';
    console.log('buz');

  }else {
    box.innerHTML = i;
    console.log(i);
  }

  container.append(box);



}


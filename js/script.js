const container = document.querySelector('.container');

for( let i=1;i<=100; i++){
  const box = document.createElement('div');
  box.className = 'box';

  if(( i % 3 == 0) && (i % 5 == 0)){
    box.classList.add('red');
    console.log('fizbuz');

  }else if(i % 3 == 0){
    box.classList.add('green');
    console.log('fix');

  }else if ( i % 5 == 0){
    box.classList.add('yellow');
    console.log('buz');

  }else {
    console.log(i);
  }

  box.innerHTML = i;
  container.append(box);


}


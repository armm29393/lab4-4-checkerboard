const checkerboard = () => {
  const size = $('#number').val()
  if (size < 1) {
    alert('Please input number')
    return 0
  }
  $('.checkerboard').empty()
  let i = 0

  for(i=0; i < Math.floor(size/8); i++){
    let container = squareContainer(String(i));
    for(let j = 0; j < 8; j++){
        // if(j % 2 == 0 && i %2 == 0){
        //   color = 'white';
        // } else {
        //   color = 'black';
        //   if(i % 2 != 0 && j % 2 != 0){
        //     color = 'white';
        //   }
        // }
        color = (j % 2 == 0 && i %2 == 0) ? 'white':(
          (i % 2 != 0 && j % 2 != 0) ? 'white':'black'
        );
        sq = square(container, color)
    }
  
  }

  if (size%8 != 0) {
    container = squareContainer('last_cols');
    for(let j = 0; j < size%8; j++){
      color = (j % 2 == 0 && i %2 == 0) ? 'white':(
        (i % 2 != 0 && j % 2 != 0) ? 'white':'black'
      );
      sq = square(container, color)
    }
  }
}

const square = (container, color) => {
  let square = document.createElement('div');
  square.style.width = '70px';
  square.style.height = '70px';
  square.style.border = 'solid black 1px';
  square.style.backgroundColor = color;
  container.append(square);
}

const squareContainer = (id) => {
  container = document.createElement("div");
  container.setAttribute("id", id);
  $('.checkerboard').append(container);
  return container;
}

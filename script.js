const count = document.getElementById('count');
const start = document.getElementById('start');
let x = 0;

let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

//start

start.addEventListener('click', loop, { once: true });

start.addEventListener('click', () => {
  back.addEventListener('click', backward, { once: true });
});

function loop() {
  x++;
  randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)

  clearStart = setTimeout(() => {
    if (x <= 100) {
      count.style.color = randomColor;
      count.innerHTML = x;
      loop();
    }
  }, 300);
  if (x > 100) {
    x--;
  }
  clearTimeout(clearBack);
} //start end


//pause
const pause = document.getElementById('pause');

pause.addEventListener('click', stop)

function stop() {
  start.innerHTML = 'Resume';
  count.style.color = 'brown';
  clearTimeout(clearStart);
  start.addEventListener('click', loop, { once: true });

  x--;
  clearTimeout(clearBack);
  back.addEventListener('click', backward, { once: true });
  x++;
  x++;
} //pause end



//backward

const back = document.getElementById('backward');

back.addEventListener('click', backward, { once: true });
back.addEventListener('click', () => {
  start.addEventListener('click', loop, { once: true });
});

function backward() {

  x--;
  randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)

  clearBack = setTimeout(() => {
    if (x >= 0) {
      count.style.color = randomColor;
      count.innerHTML = x;
      backward();
    }
  }, 300);
  if (x > 100) {
    x--;
  }
  clearTimeout(clearStart);

} //backward end


//hold

const hold = document.getElementById('hold');

hold.addEventListener('touchstart', press)
hold.addEventListener('touchend', pressEnd)

function press() {
  x++;
  randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
  clearPress = setTimeout(() => {
    if (x <= 100) {

      count.style.color = randomColor;
      count.innerHTML = x;
      press();
    }
    if (x > 100) {
      x--;
    }
  }, 40);
  randomColor;
  clearTimeout(clearStart);
  clearTimeout(clearBack);
}

hold.addEventListener('touchstart', holdColor)

function holdColor(){
  hold.style.backgroundColor = randomColor;
}

function pressEnd() {
  hold.style.backgroundColor = 'darkcyan';
  clearTimeout(clearPress);

  start.addEventListener('click', loop, { once: true });
  x--;
  back.addEventListener('click', backward, { once: true });

} //hold end

//ctap

const ctap = document.getElementById('ctap');
ctap.addEventListener('click', () => {
  x++;
  randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

  if (x <= 100) {
    count.style.color = randomColor
    count.innerHTML = x;
  }
  if (x < 0) {
    x++;
  }

  clearTimeout(clearStart);
  clearTimeout(clearBack);

  start.addEventListener('click', loop, { once: true });
  back.addEventListener('click', backward, { once: true });

})


//reset

const reset = document.getElementById('reset');

reset.addEventListener('click', refresh)

function refresh() {
   start.innerHTML = 'Start';
  setTimeout(() => {
    if (x <= 100 && x > 0) {
      x--;
      randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)

      count.style.color = randomColor;
      count.innerHTML = x;
      refresh();
    }
    if (x == 0) {
      count.style.color = 'black';
    }
  }, 5)
  clearTimeout(clearStart);
  clearTimeout(clearBack);
  clearTimeout(clearPress);

  start.addEventListener('click', loop, { once: true });
  back.addEventListener('click', backward, { once: true });

} //reset end

//font
count.addEventListener('click', () => {
  count.classList.toggle('digital')
}) //font end

//button click

start.addEventListener('click', () => {
  setTimeout(() => {
    start.style.backgroundColor = 'darkcyan'
  }, 160);
  start.style.backgroundColor = '#F24C4C ';
})

pause.addEventListener('click', () => {
  setTimeout(() => {
    pause.style.backgroundColor = 'darkcyan'
  }, 160);
  pause.style.backgroundColor = '#F24C4C ';
})

back.addEventListener('click', () => {
  setTimeout(() => {
    back.style.backgroundColor = 'darkcyan'
  }, 160);
  back.style.backgroundColor = '#F24C4C ';
})

ctap.addEventListener('click', () => {
  randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  setTimeout(() => {
    ctap.style.backgroundColor = 'darkcyan'
  }, 160);
  ctap.style.backgroundColor = randomColor;
})

reset.addEventListener('click', () => {
  setTimeout(() => {
    reset.style.backgroundColor = 'darkcyan'
  }, 160);
  reset.style.backgroundColor = '#F24C4C ';
})


//toast

const msg = document.getElementById('msg');
function toast(){
  setTimeout(() => {
    msg.classList.remove('show');
  }, 3000);
  msg.classList.add('show');
}

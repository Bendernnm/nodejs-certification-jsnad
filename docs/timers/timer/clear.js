let i = 0;

const timer = setTimeout(() => {
  console.log(i);

  if (i >= 3) {
    return clearTimeout(timer);
  }

  i++;
  timer.refresh();
}, 1000);

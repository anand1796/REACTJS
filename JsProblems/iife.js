function withLet() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// withLet();

function withVar() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// withVar();

function withIife() {
  for (var i = 1; i <= 5; i++) {
    function iife(index) {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    }
    iife(i);
  }
}

withIife();

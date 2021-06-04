const typewriter = (str) => {
  let time = 0;
  for(let value of str){
    setTimeout(() => {
    process.stdout.write(value);
    },time)
    time += 50;
    
  }
  setTimeout(() => {
    process.stdout.write("\n");

  }, time)
  };

  const sentence = "Hello there from lighthouse labs";
  typewriter(sentence);

//WHILE
let i = 1;
let bool = true;
while(bool) {
  console.log(i);
  i++;  
  if(i===6) {
    bool = false;
    console.log("Acabou")
  }
}
function rolldice() {
    document.getElementById("output").innerHTML
           let x = Math.floor(Math.random() * 6 + 1);
           let y = Math.floor(Math.random() * 6 + 1);
           console.log(x);
           console.log(y);
           return x + y;
}
 
let value = rolldice();
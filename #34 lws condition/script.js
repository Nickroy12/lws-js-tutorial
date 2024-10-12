let x = 18;

if (x < 12){
    console.log(x + " " +  "is gater than 12 ")
}else if(x %= 12 ){
    console.log(" true")
}else{
    console.log("false")
}
let text;
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)
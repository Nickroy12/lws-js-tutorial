const paymentSuccess = true,
marks = 60;
function enroll(callback){
  console.log('course enroll is in progress....');
  setTimeout(function(){
    if(paymentSuccess){
      callback();
    }else{
      console.log('Payment Faild!!')
    }
  }, 2000);
}
function progress(callback){
  console.log("course on progress...");
  setTimeout(() => {
      if(marks < 80){
        callback();
      }else{
        console.log("You are not get pass number...")
      }
  }, 300);
}
function getCertificate(){
  console.log('preparing your certificate....');
  setTimeout(() => {
    console.log('congreats!! you got certificate ')
  }, 300);
}

enroll(function(){
  progress(function(){
    getCertificate();
  })
});

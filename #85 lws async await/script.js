const paymentSuccess = true,
marks = 90;
function enroll(){
    console.log('Course enrollment is in Progress....');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
             resolve();
            }else{
              reject('Payment Faild!!')
            }
          }, 2000);
    });
    return promise;
}
function progress(){
    console.log("course on progress...");
    
    const promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            if(marks >= 80){
            resolve();
            }else{
              reject("You are not get pass number...")
            }
        }, 300);
    },5000);
return promise;
  }
  function getCertificate(){
    console.log('Preparing your Certificate');
    const promise = new Promise(function(resolve){
        setTimeout(() => {
          resolve('Congrass! you got certificate')
        }, 3000);
    })
return promise;
  }

 async function course(){
try{
  await enroll();
  await  progress();
 const massage = await getCertificate();
 console.log(massage)
}catch(err){
  console.log(err);
}

  }
  course()
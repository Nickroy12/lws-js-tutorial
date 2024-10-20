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
    });
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

  enroll()
        .then(progress)
        .then(getCertificate)
        .then(function(value){
            console.log(value)
        })
        .catch(function(err){
            console.log(err)
        })

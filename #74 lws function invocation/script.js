// function a(){
//     console.log(this);
// }

// a()

const x ={
    a: function() {
      console.log(this)
    }
}
x.a()
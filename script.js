var username=document.getElementById("username");
var password=document.getElementById("password");

function val(c){
   
    var u=username.value;
    var p=password.value;
        if(u=="admin"&&p=="12345")
      {
          c();
        
      }
      else if(u==""&&p=="")
      {
        document.getElementById("msg").innerText="Usermane and Password cannot be empty";
      }
      else 
      {
        document.getElementById("msg").innerText="Usermane or Password ERROR";
      }

}
function c(){
    
    location.replace("./main.html");
}


// document.querySelector("#button").addEventListener("click",function callback(){
//     var u=username.value;
//     var p=password.value;
//     if(u=="admin"&&p=="12345")
//       {
//         location.replace("./main.html");
//       }
//       else if(u==""&&p=="")
//       {
//         document.getElementById("msg").innerText="Usermane and Password cannot be empty";
//       }
//       else 
//       {
//         document.getElementById("msg").innerText="Usermane or Password ERROR";
//       }
//     console.log(u);
//     console.log(p);
    








function validate()
{
    
var k = new Promise(function(resolve,reject){
    var count=0;
     var list= document.getElementsByTagName("input");
     for(let i=0;i<list.length;i++)
        {
            if(list[i].checked)
            {
                count+=1;
            }
           
        }
        console.log(count);
            if(count==5)
            { 
               
                resolve("congrats completed 5 tasks");
              
            }
           
            else 
            {  
                reject("not completed");
            }
           
        
       
    });
  
  k
  .then(function(j){alert(j)})
    .catch(function(e){console.log("not completed");})

}
    
        function fetchUserData()
        {
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            { document.getElementById("demo").innerHTML=" <br>    Fetching......"
                if(this.readyState == 4 && this.status==200)
                {
                var response=JSON.parse(this.responseText);
                var output="";
                    for(i=0;i<response.length;i++)
                    {
                        output+="<tr> <td>" + response[i].id + "</td><td>" +response[i].title + "</td><td>" +  response[i].completed + "</td><td>";
                        if(response[i].completed==true)
                        {
                            output+=" <input  type = checkbox name=checkbox disabled> </td></tr>"
                        }
                        else{
                            output+=" <input  type = checkbox name=checkbox onchange='validate()' > </td></tr>"

                        }
                    }
                    document.getElementById("demo").innerHTML=output;
                   z=document.getElementsByTagName("input");
                   
                }
                
            };
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();

       

      
        }  
       
      
            
       
 
      
     
   
       






















         

       
                
          
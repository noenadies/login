/* tres   elements  en este  conjunto json
 {
    "inicio": [
       { "password": 123567, "user": "gio@gmail.com"  },
      { "password": 123378, "user": "gio@gmail.com"  },
      { "password": 124567,"user": "gio@gmail.com"  }
    

    ]



    
} //fin  deñ  json inicia  ajax
 $.ajax({
               
                url:   'mi.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                    
                        var as=Object.keys(data.inicio);
                   console.log(data.inicio[0].user);
                   console.log(data.inicio.length);

	
                   for(var i=0; i<as.length;i=i+1){
                   if (data.inicio[i].password==pas){
	
	if (data.inicio[i].user==user){
	console.log("data.inicio[i].id");
	invisibleeditboton();
                   	}
                   	}

                   //	console.log(data.inicio[i].id);

                   }




                       
                }
        });


function invisibleeditboton(){

	document.getElementById("text").style.visibility = "hidden";
 document.getElementById("boton").style.visibility = "hidden";
}


*/


var user;
var pass;
function myFunction() {
	// body...
 user= document.getElementById("user").value;
 pass= document.getElementById("pass").value;
	//alert(user);

			  $.ajax({
               
                url:   'mi.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                        	 console.log(data.inicio[0]);

data.inicio[i].password
                        }) ;
                      //  j=data.inicio.uno;*/

                      
                        var as=Object.keys(data.inicio);
                   console.log(data.inicio[0].user);
                   console.log(data.inicio.length);

	
                   for(var i=0; i<as.length;i=i+1){
                   if (data.inicio[i].password==pass){
	
	if (data.inicio[i].user==user){
	console.log("data.inicio[i].id");
	invisibleeditboton();
                   	}
                   	}

                   //	console.log(data.inicio[i].id);

                   }




                       
                }
        });



}


function invisibleeditboton(){

	document.getElementById("user").style.visibility = "hidden";
 document.getElementById("boton").style.visibility = "hidden";
 document.getElementById("pass").style.visibility = "hidden";

iniciajuego();


}



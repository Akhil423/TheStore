
//url validation

var key="XXXX"; 
var url='https://8080-dot-3700497-dot-devshell.appspot.com/?authuser=0';

(function(){

var http= new XMLHttprequest();
  
  http.onreadystateexchange = function(req ,res ){
  
     if(this.readyState==4 && this.status==200){
     
          if(this.responseText==true)
            key=true;
          else
            key=false;
    
     
     }
    
    
    http.open('POST',url,true);
    xhttp.setRequestHeader("Content-type", "text/html");
    xhttp.send(key);
    
  
  }

})();


// if the url is valid then we go for registration 
//if(key==true){

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Registration Done!', reg);
  }).catch(function(err) {
    console.log('Sorry Not registered!', err);
  });
  
}
  
//}


//url validation

var key="XXXX"; 
var check;
var url='https://check-199316.appspot.com/id/key';

(function(){

  // making http request to server by passing unique id given to user 
  // the server will respond with done or no according to users registrations with us
var http= new XMLHttprequest();
  
  http.onreadystateexchange = function(req ,res ){
  
     if(this.readyState==4 && this.status==200){
     
          if(this.responseText=="done")
            check=true;
          else
            check=false;
    
     
     }
    
    
    http.open('GET',url,true);
    xhttp.setRequestHeader("Content-type", "text");
    xhttp.send(key);
    
  
  }

})();


// if the url is valid then we go for registration 
if(check==true){

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Registration Done!', reg);
  }).catch(function(err) {
    console.log('Sorry Not registered!', err);
  });
  
}
  
}

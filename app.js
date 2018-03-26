
//url validation

/*var key; 
var url='url_of_website/key';

(function(){

var http= new XMLHttprequest();
  
  http.onreadystateexchange = function(req ,res ){
  
     if(this.readyState==4 && this.status==200){
     
          if(this.responseText==true)
            key=true;
          else
            key=false;
    
     
     }
    
    
    http.open('GET',url,true);
    http.send();
  
  }

})();

*/
// if the url is valid then we go for registration 
//if(key==true){

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
  
}
  
//}

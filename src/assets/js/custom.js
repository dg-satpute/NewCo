

window.addEventListener('beforeunload', function (e) {
   //e.preventDefault();
  // e.returnValue = '';

    
    var myVideo = document.getElementById ("video");
  var  current =   myVideo.getAttribute('src') ;
  time1 =   myVideo.currentTime ;
  setCookie('time',time1,30);
  
  
setCookie('data',current,30); //set "user_email" cookie, expires in 30 days

 //sessionStorage.setItem('data',current);
 
});
    window.addEventListener(onload,function (){
       
      var myVideo = document.getElementById ("video");
      //var current= sessionStorage.getItem('data')
    
           var data=getCookie("data");
      var tim= sessionStorage.getItem('tim')
   
      myVideo.setAttribute('src',data);
      tim=getCookie('time');
        myVideo.currentTime =tim;
        console.log(data);

    });


function get(){

 
   
   var myVideo = document.getElementById ("video");
   //var current= sessionStorage.getItem('data')
 
        var data=getCookie("data");
   var tim= sessionStorage.getItem('tim')
    
   myVideo.setAttribute('src',data);
   tim=getCookie('time');
     myVideo.currentTime =tim;
     
   }




function setCookie(name,value,days) {
   var expires = "";
   if (days) {
       var date = new Date();
       date.setTime(date.getTime() + (days*24*60*60*1000));
       expires = "; expires=" + date.toUTCString();
   }
   document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}

       const mainFeed=document.querySelector('.main-feed');
       
       const videocam=document.querySelector('#videocam')
       const videopaused=document.querySelector('#videopaused')
       const video = document.querySelector('#video');
       

       navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia;
videocam.addEventListener("click", function () {
   if (navigator.getUserMedia) {
   navigator.getUserMedia({  video: true },
   function(stream) {
   if(videocam.innerHTML==='videocam_off'){
   videocam.innerHTML='videocam';
   videopaused.innerHTML='';

   video.srcObject = stream;
   video.play();
   }
   else{
   videocam.innerHTML='videocam_off';
    video.style.display='none';
    videopaused.innerHTML='Video paused';
   const mediaStream = video.srcObject;
   
   
   // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
   const tracks = mediaStream.getTracks();
   
   // Tracks are returned as an array, so if you know you only have one, you can stop it with: 
   tracks[0].stop();
   }
   
   
   
   
   
   },
   function(err) {
   console.log("The following error occurred: " + err.name);
   }
   );
   }
   else {
   console.log("getUserMedia not supported");
   }
   });

        const mic=document.querySelector('#mic')
        mic.addEventListener("click",()=>{
            if(mic.innerHTML==='mic_off'){
                mic.innerHTML='mic_none';
                navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('You let me use your mic!')
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });
            }
            else{
                mic.innerHTML='mic_off';
                navigator.mediaDevices.getUserMedia({ audio: false })
      .then(function(stream) {
        console.log('You let me use your mic!')
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });
            }
            
        });
      const people=document.querySelector('#people');
      const participants=document.querySelector('#participants');
      const chatbutton=document.querySelector('#chatbutton');
      const chats=document.querySelector('#chats');
      people.addEventListener("click",()=>{
            if(participants.style.display==="none" ){
                participants.style.display = "block";
                chats.style.display="none";
            }
            else{
                participants.style.display="none";
            }
      });
     
      chatbutton.addEventListener("click",()=>{
            if(chats.style.display==="none"){
                chats.style.display = "block";
                participants.style.display='none';
            }
            else{
                chats.style.display="none";
            }
      });
      const raisehand=document.querySelector('#raisehand');
      const user=document.querySelector('.user')
      raisehand.addEventListener("click",()=>{
            if(raisehand.style.color==="gray"){
                raisehand.style.color="blue";
                user.style.border="2px solid blue";
            }
            else{
                raisehand.style.color="gray";
                user.style.border="none";
            }
        
      });

      const yes=document.querySelector('#yes');
      yes.addEventListener("click",()=>{
            if(yes.style.color==="gray"){
                yes.style.color="green";
                user.style.border="2px solid green";
            }
            else{
                yes.style.color="gray";
                user.style.border="none";
            }
        
      });
      const no=document.querySelector('#no');
      no.addEventListener("click",()=>{
            if(no.style.color==="gray"){
                no.style.color="red";
                user.style.border="2px solid red";
            }
            else{
                no.style.color="gray";
                user.style.border="none";
            }
        
      });

      const coffeebreak=document.querySelector('#coffeebreak');
      coffeebreak.addEventListener("click",()=>{
            if(coffeebreak.style.color==="gray"){
                coffeebreak.style.color="brown";
                user.style.border="2px solid brown";
            }
            else{
                coffeebreak.style.color="gray";
                user.style.border="none";
            }
        
      });
      
      
     /*  const hostInfo=document.querySelector('.host-info');
      mainFeed.addEventListener("mouseover",()=>{
          hostInfo.style.display="flex";
      });
      mainFeed.addEventListener("mouseleave",()=>{
          hostInfo.style.display="none";
      }); */

     const more=document.querySelector('#more');
     const submenu=document.querySelector('.submenu');
     more.addEventListener("click",()=>{
         if(submenu.style.display==="flex"){
            submenu.style.display="none";
            more.innerHTML="more_horiz"
            
         }
         else{
            more.innerHTML="clear"
             submenu.style.display="flex";
             
         }
        
     });
     const rightSection=document.querySelector('.right-section');
     const mobpeople=document.querySelector('#mobpeople');
    
     const cross=document.querySelector('#close');
     
     mobpeople.addEventListener("click",()=>{
         rightSection.classList.add('.right-section-mobile');
         mainFeed.style.display="none";
         rightSection.style.display="block";
        
        

       
     });
     cross.addEventListener("click",()=>{
        rightSection.style.display="none";
        mainFeed.style.display="block ";
       
    });
   
     
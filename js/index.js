const mobilebox= document.getElementById("mobile-menu-home")
mobilebox.style.display = "none";

const menuBtn = document.getElementById("menuToggler")

const chatbox = document.getElementById("icychat-preview-home")
chatbox.style.display = "none"

const chatFrame = document.getElementById("chatFrame")

const messageBtn = document.getElementById("msgToggler")

const closeChat = document.getElementById("icychat-toolbar-close")

const maxChat = document.getElementById("maxChat")

const emailbox = document.getElementById("email-preview-home")
emailbox.style.display = "none"

const emailBtn = document.getElementById("emailToggler")

const closeEmail = document.getElementById("email-toolbar-close")

const maxEmail = document.getElementById("maxEmail")
//handle cursor blink-----------------------
/*let cursor = true;
let speed = 250;
let cursor2 = document.getElementById("cursor2")
setInterval(() => {
  if(cursor) {
    //document.getElementById("cursor2").style.opacity = 0;
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
  }else {
   // cursor2.style.opacity = 1;
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
  }
}, speed);*/
//---------------------------------------
messageBtn.addEventListener("click", (e)=>{
    if(chatbox.style.display == "none"){
        chatbox.style.display = "block";
    }
    else
        chatbox.style.display = "none"; 
})

maxChat.addEventListener("click", ()=>{
    chatFrame.style.height = "79vh";
})
closeChat.addEventListener("click", ()=>{
    chatbox.style.display = "none";
})

emailBtn.addEventListener("click", ()=>{
    if(emailbox.style.display == "none"){
        emailbox.style.display = "block";
    }
    else
        emailbox.style.display = "none";

})
maxEmail.addEventListener("click", ()=>{
    emailFrame.style.height = "79vh";
})
closeEmail.addEventListener("click", ()=>{
    emailbox.style.display = "none";
})

menuBtn.addEventListener("click", ()=>{
    if(mobilebox.style.display == "none"){
        mobilebox.style.display = "block";
    }
    else
        mobilebox.style.display = "none";

})



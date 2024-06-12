var sidenav= document.getElementById("sidenav")
    var menuIcon=document.getElementById("menuIcon")
    var closeNav=document.getElementById("closeNav")

    menuIcon.addEventListener("click",function(){
        sidenav.style.right=0
    })
   
    closeNav.addEventListener("click",function(){
        sidenav.style.right="-50%"
    })
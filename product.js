var sidenav= document.getElementById("sidenav")
    var menuIcon=document.getElementById("menuIcon")
    var closeNav=document.getElementById("closeNav")

    menuIcon.addEventListener("click",function(){
        sidenav.style.right=0
    })
   
    closeNav.addEventListener("click",function(){
        sidenav.style.right="-50%"
    })

    var productContainer=document.getElementById("product-container")

    var search=document.getElementById("search")
    var productlist=productContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var enteredValue=event.target.value.toUpperCase()

        for(count=0;count<productlist.length;count=count+1)
            {
            var productName =productlist[count].querySelector("h1").textContent

        if(productName[count].toUpperCase().indexOf(enteredValue)<0)
            {
                 productlist[count].style.display="none"
            }

            else{
                productlist[count].style.display="block"
            }
        }
    })
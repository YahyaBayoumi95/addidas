// start header
    // start saving and offerhead
        let free = document.querySelector(".header .saving-head .free")
        let offer =  document.querySelector(".header .saving-head .offer")

        setInterval(()=>{
            free.classList.toggle("active")
            offer.classList.toggle("disactive")

        },4000)
    // End saving and offer head
    let navBar = document.querySelector(".icon-bar")
    let primaryBar = document.querySelector(".primary-bar .mobile-header")
    // open primary bar
    navBar.addEventListener("click",()=>{
        document.querySelector(".header").style.height="100vh"
        primaryBar.classList.toggle("active")
    })
    // back
    let backIcon = document.querySelectorAll(".back")
    let secNavs = document.querySelectorAll(".secondary-bar > div ul")
    let thirdNavs = document.querySelectorAll(".tertiary-bar > div ul")
    let allNavs = [...secNavs ,...thirdNavs]
    
    backIcon.forEach((i)=>{
        i.addEventListener("click",()=>{
            primaryBar.classList.add("active")
            secondaryList.forEach((li)=>{
                li.classList.remove("active")
            })
            tertiaryList.forEach((list)=>{
                    list.classList.remove("active")
            })
        }) 
    })
    // close 
    let closeSpan = document.querySelectorAll(".close")
    closeSpan.forEach((span)=>{
        span.addEventListener("click",()=>{
            primaryBar.classList.remove("active")
            document.querySelector(".header").style.height="122.5px"
            secondaryList.forEach((li)=>{
                li.classList.remove("active")
                document.querySelector(".header").style.height="122.5px"
            })
            tertiaryList.forEach((li)=>{
                li.classList.remove("active")
                document.querySelector(".header").style.height="122.5px"
            })
    })

    })

    // open secondary bar
    let primaryList = document.querySelectorAll(".primary-bar .mobile-header .mobile-nav li")
    let secondaryList = document.querySelectorAll(".secondary-bar > div")
    primaryList.forEach((li)=>{
        li.addEventListener("click",()=>{
            secondaryList.forEach((list)=>{
                if(li.textContent === list.dataset.type){
                    list.classList.toggle("active")
                    primaryBar.classList.remove("active")
                }  
            })
        })
    })
    // open tertiary bar
    let tertiaryList = document.querySelectorAll(".tertiary-bar > div")
    // start men list
    let menList = document.querySelectorAll(".secondary-bar .men-nav li")
    menList.forEach((li)=>{
        li.addEventListener("click",()=>{
            tertiaryList.forEach((list)=>{
                if(li.dataset.type === list.dataset.type){
                    list.classList.toggle("active")
                }
            })  
        })
    })
    // End men list
    // start women list
    let womenList = document.querySelectorAll(".secondary-bar .women-nav li")
    womenList.forEach((li)=>{
        li.addEventListener("click",()=>{
            tertiaryList.forEach((list)=>{
                if(li.dataset.type === list.dataset.type){
                    list.classList.toggle("active")
                }
            })
        })
    })
    // End women list
    // start kids list
    let kidsList = document.querySelectorAll(".secondary-bar .kids-nav li")
    kidsList.forEach((li)=>{
        li.addEventListener("click",()=>{
            tertiaryList.forEach((list)=>{
                if(li.dataset.type === list.dataset.type){
                    list.classList.toggle("active")
                }
            })
        })
    })
    // End kids list    
    // start gifts list
    let giftsList = document.querySelectorAll(".secondary-bar .gifts-nav li")
    giftsList.forEach((li)=>{
        li.addEventListener("click",()=>{
            tertiaryList.forEach((list)=>{
                if(li.dataset.type === list.dataset.type){
                    list.classList.toggle("active")
                }
            })
        })
    })
    // End gifts list      
    // start stripe list
    let stripeList = document.querySelectorAll(".secondary-bar .stripe-nav li")
    stripeList.forEach((li)=>{
        li.addEventListener("click",()=>{
            tertiaryList.forEach((list)=>{
                if(li.dataset.type === list.dataset.type){
                    list.classList.toggle("active")
                }
            })
        })
    })
    // End stripe list 
    // start mega menu
    let navList = document.querySelectorAll(".nav li")
    let megaMenus = document.querySelectorAll(".mega-menu")
    console.log(megaMenus)
    navList.forEach((list)=>{
        list.addEventListener("mouseover",()=>{
            megaMenus.forEach((menu)=>{
                menu.classList.remove("active")
                if(menu.dataset.type === list.dataset.type){
                    menu.classList.add("active")
                }
                
                })

        })

        megaMenus.forEach((menu)=>{
            menu.addEventListener("mouseleave",()=>{
                if(menu.classList.contains("active")){
                    menu.classList.remove("active")
                    console.log("pl")
                }
            })
        })
       
    })
       
     // End mega menu 
// End header

// start products
let leftButn = document.querySelector(".controls .left")
let rightButn = document.querySelector(".controls .right")
console.log(rightButn)
let productSlider = document.querySelector(".products .products-slider")
console.log(productSlider)
let trans = 0
rightButn.addEventListener("click",()=>{
    if(trans >-2700){
        trans -=300 
        console.log(trans)
        if(trans === -2700){
            trans == 0
            console.log(trans)
        }

    }else if(trans === -2700){
        trans = 0
    }
    productSlider.style.transform =`translateX(${trans}px)`


})
leftButn.addEventListener("click",()=>{
    if(trans <0){
        trans +=300 
    productSlider.style.transform =`translateX(${trans}px)`
    }else if(trans === 0){
        trans = -2700
        console.log(trans)
        productSlider.style.transform =`translateX(${trans}px)`

    }

})
// End products
// start store
let prodList = document.querySelectorAll(".prodlist ul li")
let storeLists = document.querySelectorAll(".store")
let storeSlide1 = document.querySelector(".storeOne .store-slider ")
console.log(prodList)
prodList.forEach((list)=>{
    list.addEventListener("click",(list)=>{
        prodList.forEach((list)=>{
            list.classList.remove("active")
        })
        list.currentTarget.classList.add("active")
        storeLists.forEach((li)=>{
            li.classList.remove("active")
            if(list.currentTarget.textContent === li.dataset.type){
                li.classList.add("active")
            }
        })
    })
})
let rightstoreButn1 = document.querySelector(".storeOne .right")
let leftstoreButn1 = document.querySelector(".storeOne .left")
let bulletsUlOne = document.querySelector(".storeOne .bulletsStore")
let sliderOne = document.querySelector(".storeOne .store-slider")


// start queries
    document.addEventListener("DOMContentLoaded", one); 
    function one(){
        let querySmall =  window.matchMedia("(max-width:767px)");
        let queryMed = window.matchMedia("(min-width:768px) and (max-width:991px)");
        let queryLarge = window.matchMedia("(min-width:992px)");
        let listOne = document.createElement("li")
        listOne.classList.add("active")
        listOne.classList.add("mx-2")
        listOne.setAttribute("data-index","0")
        let listTwo = document.createElement("li")
        listTwo.classList.add("mx-2")
        listTwo.setAttribute("data-index","1")
        let listThree = document.createElement("li")
        listThree.classList.add("mx-2")
        listThree.setAttribute("data-index","2")
        let listFour = document.createElement("li")
        listFour.classList.add("mx-2")
        listFour.setAttribute("data-index","3")
        let listFive = document.createElement("li")
        listFive.classList.add("mx-2")
        listFive.setAttribute("data-index","4")
        let listSix = document.createElement("li")
        listSix.classList.add("mx-2")
        listSix.setAttribute("data-index","5")
        
        if(querySmall.matches){

            bulletsUlOne.appendChild(listOne)
            bulletsUlOne.appendChild(listTwo)
            bulletsUlOne.appendChild(listThree)
            bulletsUlOne.appendChild(listFour)
            bulletsUlOne.appendChild(listFive)
            bulletsUlOne.appendChild(listSix)
            let bulletList = document.querySelectorAll(".storeOne .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=500
                if(count === -500){
                    bulletList[1].classList.add("active")
                }else if(count ===-1000){
                    bulletList[2].classList.add("active")
                }else if(count===-1500 ){
                    bulletList[3].classList.add("active")   
                }else if (count ===-2000){
                    bulletList[4].classList.add("active")
                }else if (count===- 2500 ){
                    bulletList[5].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < +2500){
                    if(count === 0){
                        count = -3000
                    }
                    count +=500
                    if(count === -500){
                        bulletList[1].classList.add("active")
                    }else if(count === -1000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -1500 ){
                        bulletList[3].classList.add("active")   
                    }else if (count === -2000){
                        bulletList[4].classList.add("active")
                    }else if (count=== -2500 ){
                        bulletList[5].classList.add("active")
                        count === 0
                    }else if(count === 0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })
            
        }
        if(queryMed.matches){
            bulletsUlOne.appendChild(listOne)
            bulletsUlOne.appendChild(listTwo)
            bulletsUlOne.appendChild(listThree)
            bulletsUlOne.appendChild(listFour)
            let bulletList = document.querySelectorAll(".storeOne .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=750
                if(count === -750){
                    bulletList[1].classList.add("active")
                }else if(count ===-1500){
                    bulletList[2].classList.add("active")
                }else if (count === -2250){
                    bulletList[3].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2250){
                    if(count === 0){
                        count = -3000

                    }
                    count +=750
                    if(count === -750){
                        bulletList[1].classList.add("active")
                    }else if(count === -1500){
                        bulletList[2].classList.add("active")
                    }else if(count=== -2250 ){
                        bulletList[3].classList.add("active")   
                    }else if(count===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })        
            
        }

        if(queryLarge.matches){
            bulletsUlOne.appendChild(listOne)
            bulletsUlOne.appendChild(listTwo)
            bulletsUlOne.appendChild(listThree)
            let bulletList = document.querySelectorAll(".storeOne .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=1000
                if(count === -1000){
                    bulletList[1].classList.add("active")
                }else if(count ===-2000){
                    bulletList[2].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn1.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2500){
                    if(count === 0){
                        count = -3000

                    }
                    count +=1000
                    if(count === -1000){
                        bulletList[1].classList.add("active")
                    }else if(count === -2000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -3000 ){
                        bulletList[3].classList.add("active")   
                    }else if(count ===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderOne.style.transform =`translateX(${count}px)` 
            })        
        }
        
    }
    let storeSlide2 = document.querySelector(".storeTwo .store-slider ")
    let rightstoreButn2 = document.querySelector(".storeTwo .right")
let leftstoreButn2 = document.querySelector(".storeTwo .left")
let bulletsUlTwo = document.querySelector(".storeTwo .bulletsStore")
let sliderTwo = document.querySelector(".storeTwo .store-slider")

    document.addEventListener("DOMContentLoaded", two); 
    function two(){
        let querySmall =  window.matchMedia("(max-width:767px)");
        let queryMed = window.matchMedia("(min-width:768px) and (max-width:991px)");
        let queryLarge = window.matchMedia("(min-width:992px)");
        let listOne = document.createElement("li")
        listOne.classList.add("active")
        listOne.classList.add("mx-2")
        listOne.setAttribute("data-index","0")
        let listTwo = document.createElement("li")
        listTwo.classList.add("mx-2")
        listTwo.setAttribute("data-index","1")
        let listThree = document.createElement("li")
        listThree.classList.add("mx-2")
        listThree.setAttribute("data-index","2")
        let listFour = document.createElement("li")
        listFour.classList.add("mx-2")
        listFour.setAttribute("data-index","3")
        let listFive = document.createElement("li")
        listFive.classList.add("mx-2")
        listFive.setAttribute("data-index","4")
        let listSix = document.createElement("li")
        listSix.classList.add("mx-2")
        listSix.setAttribute("data-index","5")
        
        if(querySmall.matches){

            bulletsUlTwo.appendChild(listOne)
            bulletsUlTwo.appendChild(listTwo)
            bulletsUlTwo.appendChild(listThree)
            bulletsUlTwo.appendChild(listFour)
            bulletsUlTwo.appendChild(listFive)
            bulletsUlTwo.appendChild(listSix)
            let bulletList = document.querySelectorAll(".storeTwo .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=500
                if(count === -500){
                    bulletList[1].classList.add("active")
                }else if(count ===-1000){
                    bulletList[2].classList.add("active")
                }else if(count===-1500 ){
                    bulletList[3].classList.add("active")   
                }else if (count ===-2000){
                    bulletList[4].classList.add("active")
                }else if (count===- 2500 ){
                    bulletList[5].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderTwo.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < +2500){
                    if(count === 0){
                        count = -3000
                    }
                    count +=500
                    if(count === -500){
                        bulletList[1].classList.add("active")
                    }else if(count === -1000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -1500 ){
                        bulletList[3].classList.add("active")   
                    }else if (count === -2000){
                        bulletList[4].classList.add("active")
                    }else if (count=== -2500 ){
                        bulletList[5].classList.add("active")
                        count === 0
                    }else if(count === 0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderTwo.style.transform =`translateX(${count}px)` 
            })
            
        }
        if(queryMed.matches){
            bulletsUlTwo.appendChild(listOne)
            bulletsUlTwo.appendChild(listTwo)
            bulletsUlTwo.appendChild(listThree)
            bulletsUlTwo.appendChild(listFour)
            let bulletList = document.querySelectorAll(".storeTwo .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=750
                if(count === -750){
                    bulletList[1].classList.add("active")
                }else if(count ===-1500){
                    bulletList[2].classList.add("active")
                }else if (count === -2250){
                    bulletList[3].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderTwo.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2250){
                    if(count === 0){
                        count = -3000

                    }
                    count +=750
                    if(count === -750){
                        bulletList[1].classList.add("active")
                    }else if(count === -1500){
                        bulletList[2].classList.add("active")
                    }else if(count=== -2250 ){
                        bulletList[3].classList.add("active")   
                    }else if(count===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderTwo.style.transform =`translateX(${count}px)` 
            })        
            
        }

        if(queryLarge.matches){
            bulletsUlTwo.appendChild(listOne)
            bulletsUlTwo.appendChild(listTwo)
            bulletsUlTwo.appendChild(listThree)
            let bulletList = document.querySelectorAll(".storeTwo .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=1000
                if(count === -1000){
                    bulletList[1].classList.add("active")
                }else if(count ===-2000){
                    bulletList[2].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderTwo.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn2.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2500){
                    if(count === 0){
                        count = -3000

                    }
                    count +=1000
                    if(count === -1000){
                        bulletList[1].classList.add("active")
                    }else if(count === -2000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -3000 ){
                        bulletList[3].classList.add("active")   
                    }else if(count ===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderTwo   .style.transform =`translateX(${count}px)` 
            })        
        }
        
    }
    let storeSlide3 = document.querySelector(".storeThree .store-slider ")
    let rightstoreButn3 = document.querySelector(".storeThree .right")
    let leftstoreButn3 = document.querySelector(".storeThree .left")
    let bulletsUlThree = document.querySelector(".storeThree .bulletsStore")
    let sliderThree = document.querySelector(".storeThree .store-slider")
    document.addEventListener("DOMContentLoaded", three); 
    function three(){
        let querySmall =  window.matchMedia("(max-width:767px)");
        let queryMed = window.matchMedia("(min-width:768px) and (max-width:991px)");
        let queryLarge = window.matchMedia("(min-width:992px)");
        let listOne = document.createElement("li")
        listOne.classList.add("active")
        listOne.classList.add("mx-2")
        listOne.setAttribute("data-index","0")
        let listTwo = document.createElement("li")
        listTwo.classList.add("mx-2")
        listTwo.setAttribute("data-index","1")
        let listThree = document.createElement("li")
        listThree.classList.add("mx-2")
        listThree.setAttribute("data-index","2")
        let listFour = document.createElement("li")
        listFour.classList.add("mx-2")
        listFour.setAttribute("data-index","3")
        let listFive = document.createElement("li")
        listFive.classList.add("mx-2")
        listFive.setAttribute("data-index","4")
        let listSix = document.createElement("li")
        listSix.classList.add("mx-2")
        listSix.setAttribute("data-index","5")
        
        if(querySmall.matches){

            bulletsUlThree.appendChild(listOne)
            bulletsUlThree.appendChild(listTwo)
            bulletsUlThree.appendChild(listThree)
            bulletsUlThree.appendChild(listFour)
            bulletsUlThree.appendChild(listFive)
            bulletsUlThree.appendChild(listSix)
            let bulletList = document.querySelectorAll(".storeThree .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=500
                if(count === -500){
                    bulletList[1].classList.add("active")
                }else if(count ===-1000){
                    bulletList[2].classList.add("active")
                }else if(count===-1500 ){
                    bulletList[3].classList.add("active")   
                }else if (count ===-2000){
                    bulletList[4].classList.add("active")
                }else if (count===- 2500 ){
                    bulletList[5].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < +2500){
                    if(count === 0){
                        count = -3000
                    }
                    count +=500
                    if(count === -500){
                        bulletList[1].classList.add("active")
                    }else if(count === -1000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -1500 ){
                        bulletList[3].classList.add("active")   
                    }else if (count === -2000){
                        bulletList[4].classList.add("active")
                    }else if (count=== -2500 ){
                        bulletList[5].classList.add("active")
                        count === 0
                    }else if(count === 0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })
            
        }
        if(queryMed.matches){
            bulletsUlThree.appendChild(listOne)
            bulletsUlThree.appendChild(listTwo)
            bulletsUlThree.appendChild(listThree)
            bulletsUlThree.appendChild(listFour)
            let bulletList = document.querySelectorAll(".storeThree .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=750
                if(count === -750){
                    bulletList[1].classList.add("active")
                }else if(count ===-1500){
                    bulletList[2].classList.add("active")
                }else if (count === -2250){
                    bulletList[3].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2250){
                    if(count === 0){
                        count = -3000

                    }
                    count +=750
                    if(count === -750){
                        bulletList[1].classList.add("active")
                    }else if(count === -1500){
                        bulletList[2].classList.add("active")
                    }else if(count=== -2250 ){
                        bulletList[3].classList.add("active")   
                    }else if(count===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })        
            
        }

        if(queryLarge.matches){
            bulletsUlThree.appendChild(listOne)
            bulletsUlThree.appendChild(listTwo)
            bulletsUlThree.appendChild(listThree)
            let bulletList = document.querySelectorAll(".storeThree .bulletsStore li")
            console.log(bulletList);
            let count = 0
            rightstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                count -=1000
                if(count === -1000){
                    bulletList[1].classList.add("active")
                }else if(count ===-2000){
                    bulletList[2].classList.add("active")
                }else if (count === -3000){
                    count = 0
                    bulletList[0].classList.add("active")
                }
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })
            leftstoreButn3.addEventListener("click",()=>{
                bulletList.forEach((li)=>{
                    li.classList.remove("active")
                })
                if(count < 2500){
                    if(count === 0){
                        count = -3000

                    }
                    count +=1000
                    if(count === -1000){
                        bulletList[1].classList.add("active")
                    }else if(count === -2000){
                        bulletList[2].classList.add("active")
                    }else if(count=== -3000 ){
                        bulletList[3].classList.add("active")   
                    }else if(count ===0){
                        bulletList[0].classList.add("active")

                    }
                    
                }
                
                console.log(count)
                sliderThree.style.transform =`translateX(${count}px)` 
            })        
        }
        
    }


// End queries


// End store



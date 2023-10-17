// localStorage.removeItem('myData');
let prolist = JSON.parse(localStorage.getItem("prodata"))

console.log(prolist)
let btnlist = [
    { id :  0, btntext : "all"},
    { id :  1, btntext : "Airdopes"},
    { id :  2, btntext : "imortal"},
    { id :  3, btntext : "watch"},
    { id :  4, btntext : "Rockerz"},
    { id :  5, btntext : "stone"},
]
let daliyprofilter = document.querySelector(".daliyprofilter");
let dalitprocontener = document.querySelector(".dalitprocontener")



let thefilterbtn = btnlist.map((ele, index) =>{
    return(`<button id = "${index}" class = "mt-2" >${ele.btntext}</button>`)
})

daliyprofilter.innerHTML = thefilterbtn.join("")


const buttn = document.querySelectorAll(".daliyprofilter button");

console.log("buttn", buttn)
    
buttn.forEach((btn , index) =>{
    btn.addEventListener("click", () =>{
        filterbtn(index)
    })
})
    
buttn[0].classList.add("theBtncol")
const filterbtn = (index) => {
    for(let i = 0; i < buttn.length ; i++){
        if(index === i){
            buttn[i].classList.add("theBtncol")
            theFilterfuction(buttn[i].textContent)
        }else{
            buttn[i].classList.remove("theBtncol")
        }
    }
}


// ###########################################filter##############################

window.onload = () =>{
    theCardfun(prolist)
}

const theFilterfuction = (textFilter) =>{
    
    let filterData =  prolist.filter(ele =>{
        if(textFilter === ele.filtername || textFilter === "all"){
            return ele
        }
    })
    
    theCardfun(filterData)
}

const theCardfun = (theList) =>{
    let probox =  theList.map((ele) =>{
        return(`
        <artical class = " col-lg-4 col-md-6 col-sm-12 mt-4 " id = "TheCard" onclick="theShowData(${ele.id})">
            <div class = "box">
                <div class = "left">
                    <img src = ${ele.imgscr}/>
                    <span>60 Hours Playback</span>
                </div>
                <div class= "right">
                    <div class = "mt-1 reating"><i class="fa-solid fa-star"></i> ${ele.rating}</div>
                    <div class="thePrice mt-2 d-flex align-items-center justify-content-between">
                        <div class = "textbox w-100 ">
                            <h1 style = "background : ${ele.color1}">${ele.heading}</h1>
                            <p>₹ ${ele.price} <del>72% off</del></p>
                        </div>
                        <div class="color  d-flex align-items-center justify-content-end">
                            <span style="background: #9c9c9c; margin-left: -8px;"></span>
                            <span style="background: #080808; margin-left: -8px;"></span>
                            <span style="background: #d48f87; margin-left: -8px;"></span>
                            +4
                        </div>
                    </div>
                    <div class="btnbox">
                        <button>Add to card</button>
                    </div>
                </div>
            </div>
        </artical>`)
    })

    dalitprocontener.innerHTML = probox.join("")
}

const theShowData = (index) =>{

    prolist.forEach((ele) =>{
        if(ele.id === index){
            localStorage.setItem("product", JSON.stringify(ele))
            window.location.href = "Products.html"
            console.log(ele)
        }
    })
}




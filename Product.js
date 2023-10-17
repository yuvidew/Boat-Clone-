window.addEventListener("load" , () =>{
    let proData = JSON.parse(localStorage.getItem("product"))
    setTheImage(proData)
    setTheContend(proData)
})

// #####################################AddtheProductimage###########################333

const theProImg = document.querySelector(".theProImg")

const setTheImage  = (proData) =>{
    theProImg.src = proData.imgscr
    theProImg.alt = proData.filtername
}

// ###############################################AddTheContend#################################

const thePriceContext = document.querySelector(".thePriceContext")

const setTheContend = (proData) =>{
    thePriceContext.innerHTML = `
    <div class = "priceandContendBox">
        <p><i class="fa-solid fa-star" style="color: #FFD700;"></i>${proData.rating}</p>
        <h1>${proData.heading}</h1>
        <p>${proData.pera}</p>
        <div class="priceBox d-flex align-items-center gap-3">
            <h3>₹ ${proData.price}</h3>
            <del>${proData.off}% Off</del>
        </div>
    </div>
    `
}

// ################################Acordeatr###############################3

const acoordbtn = document.querySelector(".acoordbtn")
const arrow = document.querySelector(".arrow")
const Rewards = document.querySelector(".Rewards")

acoordbtn.addEventListener("click", () =>{
    if(Rewards.style.height === "25rem"){
        Rewards.style.height = "4rem"
        arrow.style.transform = 'rotate(-90deg)'
    }else{
        Rewards.style.height = "25rem"
        arrow.style.transform = 'rotate(90deg)'

    }
})



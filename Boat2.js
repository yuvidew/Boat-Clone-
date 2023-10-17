
const thedailbtn = document.querySelectorAll(".thedailyproduc button");
const TheDailyProCardList = document.querySelector(".TheDailyProCardList");
const amount = document.getElementById("amount")
const addcard = document.getElementById("thecard")
const theProlistcard = document.querySelector(".theProlistcard")
const bell = document.querySelector(".bell")
const theproParlist = document.querySelector(".theproParlist")
const payprice = document.querySelector(".payprice")

addcard.style.display= "block"
addcard.style.display= "flex"
theProlistcard.style.display= "none"
bell.style.display = "none"
let thedaliydelselist = [
    {id : "input0", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049", proname : "Airdopes 131", price : "1099"},
    {id : "input1", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Flex_Connect.jpg?v=1689751649", proname : "Wava Flex Connect", price : "1099 "},
    {id : "input2", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917", proname : "Airdopes 1361", price : "1499"},
    {id : "input3", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_ea76e8ff-d95c-49da-b6c9-fca4304dce11.jpg?v=1685686978", proname : "Rockerz 235 V2", price : "1300"},
]

let ProCard1List = []
let amountnum = 0
let items = 0
thedailbtn.forEach((btn, index) =>{
    btn.addEventListener("click", () =>{
        if(!ProCard1List.includes(thedaliydelselist[index])){
            ProCard1List.push(thedaliydelselist[index])
            amountnum += parseFloat(thedaliydelselist[index].price)
            amount.innerHTML = amountnum;
            payprice.innerHTML = amountnum;
            Createcardlist()
        }
        bell.style.display = "block"
        bell.style.display = "flex"
        
        if(index === 0){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 1){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 2){ 
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 3){
            items += parseFloat(1)
            bell.textContent = items
        }
    })
})


const Createcardlist = () =>{
    addcard.style.display= "none"
    theProlistcard.style.display= "block"
    let TheCardList = ProCard1List.map(ele =>{
        return(
            `<div class="box">
            <div class="imgbox">
                <img src=${ele.imgsrc} alt="">
            </div>
            <div class="textbox">
                <h1>${ele.proname}</h1>
                <h3><i class="fa-solid fa-indian-rupee-sign"></i>${ele.price}</h3>
            </div>
        </div>`
        )
    })

    TheDailyProCardList.innerHTML = TheCardList.join("")
    theproParlist.innerHTML = TheCardList.join("")
}


const incresbtn = (index, id) =>{
    let itemscount = 0
    if(index === 1){
        let theinput = document.getElementById(`${id}`);
        itemscount++
        theinput.value = itemscount
    }
}


// ####################################################Addcard###############################33

const thedaliybtns = document.querySelectorAll(".thedaliydelse2 button")

let thedaliydelselist2 = [
    {id : "input0", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/141_ANC.jpg?v=1690870925", proname : "Airdopes 141ANC", price : "1099"},
    {id : "input1", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Prism.jpg?v=1693203491", proname : "Uitima Prism", price : "1099 "},
    {id : "input2", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_245V2_Pro_1.jpg?v=1692782512", proname : "Rockerz 245 V2 Pro", price : "1499"},
    {id : "input3", imgsrc : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Sigma.jpg?v=1692764355", proname : "Wave Sigma", price : "1300"},
]



thedaliybtns.forEach((btn, index) =>{
    btn.addEventListener("click", () =>{
        if(!ProCard1List.includes(thedaliydelselist2[index])){
            ProCard1List.push(thedaliydelselist2[index])
            amountnum += parseFloat(thedaliydelselist2[index].price)
            amount.innerHTML = amountnum;
            Createcardlist()
        }
        bell.style.display = "block"
        bell.style.display = "flex"
        
        if(index === 0){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 1){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 2){ 
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 3){
            items += parseFloat(1)
            bell.textContent = items
        }
    })
})



/*####################################################################################3 */

const thebestofboat = document.querySelectorAll(".bestOfboatpro1 button")

let thedaliydelselist3 = [
    {id : "input0", imgsrc : "seller1.jpeg", proname : "Airdopes 141ANC", price : "1099"},
    {id : "input1", imgsrc : "seller2.jpeg", proname : "Uitima Prism", price : "1099 "},
    {id : "input2", imgsrc : "seller3.jpeg", proname : "Rockerz 245 V2 Pro", price : "1499"},
    {id : "input3", imgsrc : "seller4.jpeg", proname : "Wave Sigma", price : "1300"},
]

thebestofboat.forEach((btn,index) =>{
    btn.addEventListener("click", () =>{
        if(!ProCard1List.includes(thedaliydelselist3[index])){
            ProCard1List.push(thedaliydelselist3[index])
            amountnum += parseFloat(thedaliydelselist3[index].price)
            amount.innerHTML = amountnum;
            Createcardlist()
        }
        bell.style.display = "block"
        bell.style.display = "flex"
        
        if(index === 0){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 1){
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 2){ 
            items += parseFloat(1)
            bell.textContent = items
        }else if(index === 3){
            items += parseFloat(1)
            bell.textContent = items
        }
    })
})

// ############################################peyData############################################

const peyData = () =>{
    alert("Your order is succsefully Completed")
}


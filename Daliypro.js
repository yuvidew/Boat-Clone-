// localStorage.clear('prodata');
let prolistData = [
    {id : 0, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_100.jpg?v=1682408982", heading : "Airport 100", rating : "4.7", price : "1,499", off : "57",  pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 1, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-113.jpg?v=1682576552", heading : "Airport 113", rating : "4.5", price : "1,299", off : "57",  pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 2, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-115_1.jpg?v=1686139410", heading : "Airport 115", rating : "4.9", price : "1,399", off : "53",  pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 3, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD131_Black-panther.jpg?v=1688452928", heading : "Airopes 121 PRO", rating : "4.49", price : "1,099", off : "63",  pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 4, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/TRebel_Airdopes_141_Pro_8c334493-0d82-43c0-a42a-f455b76d7ab0.jpg?v=1688452927", heading : "Airport 131 black panther", rating : "5.0", price : "1,299", off : "57", pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 5, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-190.jpg?v=1682576552", heading : "Airdopes 131 captainamerica", rating : "4.9", price : "1,299", off : "57", pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    {id : 6, filtername : "Airdopes", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_458_c5fa5206-2212-46b6-8c7b-67c589474964.jpg?v=1688452928", heading : "Airdopes", rating : "4.9", price : "1,299", off : "5.7", pera : "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case"},
    // ################################################333
    {id : 7, filtername : "watch", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982", heading : "Storm Call", rating : "4.8", price : "1,799", off : "77", color1 : "d48f87",color2 : "22201f",color3 : "d1d1d1", pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 8, filtername : "watch", imgscr : "https://www.boat-lifestyle.com/cdn/shop/products/DisneyStormPackaging3.1579_300x.png?v=1640110355", heading : "Wave Lite", rating : "4.9", price : "1,799", off : "74",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 9, filtername : "watch", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Captain-America-Marvel-Edition.jpg?v=1682583585", heading : "Wave Flex Connect", rating : "4.8", price : "1,499", off : "81 ",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 10, filtername : "watch", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Iron-Man-Marvel-Edition.jpg?v=1682583585", heading : "Storm Call", rating : "4.8", price : "1,799", off : "77",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 11, filtername : "watch", imgscr : "https://www.boat-lifestyle.com/cdn/shop/products/main3_1_f63dc574-b8c3-40b9-85a5-99d8d57a807f_300x.png?v=1658829595", heading : "Wave Lit", rating : "4.9", price : "1,799", off : "74",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 12, filtername : "watch", imgscr : "https://www.boat-lifestyle.com/cdn/shop/products/black_21bd8228-f672-4ccd-84a2-aff8ec1c293d_300x.png?v=1670787230", heading : "Wave Call", rating : "4.9", price : "1,799", off : "77",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    {id : 13, filtername : "watch", imgscr : "https://www.boat-lifestyle.com/cdn/shop/products/black_ac115f6e-6cc0-4dc6-bc0d-3c78e5df388a_300x.png?v=1677047427", heading : "Wave Leap Call", rating : "4.9", price : "1,499", off : "79",  pera : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+"},
    // #############################imortal#######################33
    {id : 14, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_171_Packaging_1.3-removebg-preview_large.png?v=1689677203", heading : "Immortal 171 (Black Sabre)", rating : "5", price : "1299", off : "62%" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    {id : 15, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IMT121-bl_large.png?v=1685518203", heading : "Immortal 171 (Black Sabre)", rating : "4.8", price : "1099", off : "68" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    {id : 16, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM125_Balck_large.png?v=1695720355", heading : "Immortal 125 (Black Sabre)", rating : "5", price : "1199", off : "65" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    {id : 17, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM125White_large.png?v=1695720375", heading : "Immortal 125 (White Sabre)", rating : "5", price : "1199", off : "65" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    {id : 18, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/181.2987_2_large.png?v=1694174673", heading : "Immortal 181 (Black Sabre)", rating : "5", price : "1299", off : "62" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    {id : 19, filtername : "imortal", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/161_B_large.png?v=1692863965", heading : "Immortal 161", rating : "5", price : "1199", off : "65" , pera : "Wireless Gaming Earbuds with 40 Hours Playtime, Clear Calling with ENx™, Low Latency, RGB lights"},
    // #########################Rockerz####################
    {id : 20, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_large.png?v=1655377999", heading : "Rockerz 255 Pro+ (Black)", rating : "4.8", price : "999", off : "74" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 21, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245pr01_large.png?v=1667507969", heading : "Rockerz 245 Pro+ (Grey)", rating : "4.8", price : "1199", off : "52" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 22, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6af12e30-e6d0-43d3-afd2-500065309a3e_large.png?v=1673005562", heading : "Rockerz 245 Pro+ (Blue)", rating : "4.8", price : "999", off : "74" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 23, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_large.png?v=1687514654", heading : "Rockerz 245 V2 (Indianred)", rating : "4.8", price : "799", off : "73" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 24, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz245V2Pro_Black_large.png?v=1693369430", heading : "Rockerz 245 V2 (Active Black)", rating : "5", price : "1099", off : "68%" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 25, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_large.png?v=1673002621", heading : "Rockerz 450 (Lightblue)", rating : "4.8", price : "1499", off : "62" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},
    {id : 26, filtername : "Rockerz", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/255-ARC1_large.png?v=1685703828", heading : "Rockerz 255 ARC (Wave Blue)", rating : "4.8", price : "1299", off : "48" , pera : "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™ Charge"},

    // ###########################3stone###########################3
    {id : 27, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05ef4b39-9658-49d9-a2e2-10670c9a4255_large.png?v=1690185277", heading : "Stone 350 (Black)", rating : "4.8", price : "1599", off : "54" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
    {id : 28, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ab154db8-8ffc-4464-a37a-31f309893bfe_large.png?v=1686125474", heading : "Stone 180 (Steelblue)", rating : "4.8", price : "1299", off : "47" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
    {id : 29, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/74a6b20d-9842-49da-b279-022812b81e1f_large.png?v=1686204413", heading : "Stone 350 (Red)", rating : "4.8", price : "1599", off : "54" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
    {id : 30, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c64ba15d-2fe8-402c-9ea6-6205a554aed1_large.png?v=1686202982", heading : "Stone 1500 (Red)", rating : "4.9", price : "6990", off : "46" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
    {id : 31, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-2_large.png?v=1656101185", heading : "Stone 190 DC Edition", rating : "5", price : "1299", off : "56" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
    {id : 32, filtername : "stone", imgscr : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-193-red_large.png?v=1686203345", heading : "Stone 193 (Raging Red)", rating : "5", price : "1299", off : "56" , pera : "Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible"},
]

// console.log(prolist)
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
    theCardfun(prolistData)
}

const theFilterfuction = (textFilter) =>{
    
    let filterData =  prolistData.filter(ele =>{
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

    prolistData.forEach((ele) =>{
        if(ele.id === index){
            localStorage.setItem("product", JSON.stringify(ele))
            window.location.href = "Products.html"
            console.log(ele)
        }
    })
}




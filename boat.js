const hambarbtn = document.getElementById("hambaricon");
const Boatnavbar = document.getElementById("Boatnavbar")
hambarbtn.addEventListener("click", ()=>{
    if(hambarbtn.className === "fa-solid fa-bars"){
        hambarbtn.className = "fa-solid fa-xmark"
        Boatnavbar.style.left = "0"
    }else if(hambarbtn.className === "fa-solid fa-xmark"){
        hambarbtn.className = "fa-solid fa-bars"
        Boatnavbar.style.left = "-100%"
    }
})

const shopingcard = document.getElementById("shoping-card")

const cardopen = () =>{
    shopingcard.style.right = "0%"
}


const cardclose = () =>{
    shopingcard.style.right = "-100%"
}

// #############################33image-slider##########################3

const slides = document.querySelectorAll(".sliders img")
const sectioncont = document.querySelectorAll(".section_contener button")

let count = 0
slides.forEach((slide, index) => {
    slide.style.left = `${index*100}%`
})


    const countinc = () =>{
            if(count == slides.length-1){
                count = 0
                changeslide()
            }else{
                count++
                changeslide()
            }
        
        }

    setInterval(countinc, 3000)    

const changeslide = () => {
    slides.forEach(slides => {
        slides.style.transform = `translateX(-${count*100}%)`
    })
}



// #####################################video_hover################################


const BESTmenu = document.querySelectorAll(".bestMenu button");
const BESTmain = document.querySelectorAll(".bestMain");

BESTmenu.forEach(BESTmenu => {
    
    BESTmenu.addEventListener("click", () =>{
        BESTmain.forEach((main, index) => {
            if((BESTmenu.className === "currentmenu") && index === 0){
                main.classList.remove("visitable")
            }else if((BESTmenu.className === "earbuds") && index === 1){
                main.classList.remove("visitable")
            }else if((BESTmenu.className === "watch") && index === 2){
                main.classList.remove("visitable")
            }else if((BESTmenu.className === "Wireless") && index === 3){
                main.classList.remove("visitable")
            }else if((BESTmenu.className === "ANC") && index === 4){
                main.classList.remove("visitable")
            }   
            else{
                main.classList.add("visitable")
            }
        })
    })
})


// ###############################3This is for the searchbar#################################

const inputsearch = document.getElementById("inputsearch")
const prosearchlist = document.getElementById("prosearchlist")
const removelist = document.getElementById("removelist")
const listitem = document.getElementById("listitem")
prosearchlist.style.display = "none"
removelist.style.display = "none"
const productlist = [
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287", proname  : "True Wireless Earbuds"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062", proname : "Nekbands"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/Rockerz_100x.png?v=1684827714 100w", proname : "Wireless Headphones"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751", proname : "Wireless Speaker"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1684827787", proname : "Wired Headphone"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1684827816", proname : "Wired Earphone"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849", proname : "Soundbars"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903", proname : "Gaming Headphone"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961", proname : "Party Speakers"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994", proname : "Teimmers"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017", proname : "Chargers"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045", proname : "Power Banks"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1684828071", proname : "Cables"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1684828071", proname : "Car Accessories"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134", proname : "SuperHero Collection"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168", proname : "Trebel for Women"},
    {imgsrc : "//www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200", proname : "Limited Edition"}
]

inputsearch.addEventListener("input", (e) =>{
    prosearchlist.style.display = "block"
    removelist.style.display = "block"
    let result = []
    let inputval = e.target.value
    if(inputval.length){
        result = productlist.filter(key =>{
            return key.proname.toUpperCase().includes(inputval.toUpperCase())
        })
        desplay(result)
    }
})

const desplay = (result) =>{
    let contend = result.map(val =>{
        return `<li>
                    <a href="#">
                        <img src="${val.imgsrc}" alt="">
                        <p>${val.proname}</p>
                    </a>
                </li>`
    })

    listitem.innerHTML = contend.join("")
}



removelist.addEventListener("click", () =>{
    prosearchlist.style.display = "none"
    removelist.style.display = "none"
})




// ##############################################3this is for the press slider ###################################3

const presslidercont = document.querySelectorAll(".presslidercont article")
const btnboc = document.querySelectorAll(".btnbox button")
let slidecount = 0
presslidercont.forEach((slides, index) => {
    slides.style.left = `${index*100}%`
})

btnboc.forEach(thebtn =>{
    thebtn.addEventListener("click", () =>{
        if(thebtn.id === "left"){
            if(slidecount == 0){
                // slidecount = slides.length-1
                changepressslide()
            }else{
                slidecount--
                changepressslide()
            }
        }else if(thebtn.id === "right"){
            if(slidecount == slides.length-1){
                // slidecount = 0
                changepressslide()
            }else{
                slidecount++
                changepressslide()
                console.log(slidecount)
            }
        }
    })
})

const changepressslide = () =>{
    presslidercont.forEach(slides => {
        slides.style.transform = `translateX(-${slidecount*100}%)`
    })
}


// #####################################this for shoping card##############################################33

var form_1 = document.querySelector(".reg-item-profile-pic")
var form_2 = document.querySelector(".reg-item-parent-sec-1")
var form_3 = document.querySelector(".reg-item-parent-sec-2")
var form_4 = document.querySelector(".reg-item-3")

var formNext_1 = document.querySelector(".form-1-next")

var formNext_2 = document.querySelector(".form-2-next")
var formBack_2 = document.querySelector(".form-2-prev")

var formNext_3 = document.querySelector(".form-3-next")
var formBack_3 = document.querySelector(".form-3-prev")

var formDone = document.querySelector(".form-4-done")
var formBack_4 = document.querySelector(".form-4-prev")

var famHead = "Musa Kaasa Waremera";
var famChildren = ["YUSUF MUKIIBI GOLOBA", "Nakitende Safia", "Najjuma Empanga", "Nabukalu Kampungu"]
var goloobaChild = ["Nakitende Mayidina", "Rehema Nalweyiso", "Abdul Ssemwogere", "Nakijoba Safina", "Sserunjogi", "Nakijoba Marium", "Nalweyiso Rehema", "Dauda Ssemakula Mukunja", "Kinene Nyumba Leonard", "Umar Sserunjogi Tebukooza", "Kinene Nyumba Leonard", "Umar Sserunjogi Tebukooza", "Babirye Najjuma", "Birabwa", "Kato Ssemakula", "Haruna Kagwa Sharif", "Nankunja Aidati ", "Sswekyomya Kamya", "Ndugwa Godfrey"]

formNext_1.addEventListener("click", ()=>{
    var inputValue = document.querySelector("#full-nam")
    if(inputValue.value == famHead || famChildren.includes(inputValue.value) || goloobaChild.includes(inputValue.value)){
        formNext_1.style.display = "none";
        form_4.style.display = "block";
        handleEmptyinputs()
    } else{
        handleEmptyinputs()
        formNext_1.style.display = "none";
        form_2.style.display = "block";
    }
})

formNext_2.addEventListener("click", ()=>{
    var inputValue = document.querySelector("#father-nam")
    if(inputValue.value == famHead || famChildren.includes(inputValue.value) || goloobaChild.includes(inputValue.value)){
        document.querySelector(".form-2-btns").style.display = "none";
        form_4.style.display = "block";
    } else{
        document.querySelector(".form-2-btns").style.display = "none";
        form_3.style.display = "block";
    }
})

formNext_3.addEventListener("click", ()=>{
    document.querySelector(".form-3-btns").style.display = "none";
    form_4.style.display = "block";
})

formBack_2.addEventListener("click", ()=>{
    formNext_1.style.display = "flex";
    form_2.style.display = "none";
})

formBack_3.addEventListener("click", ()=>{
    document.querySelector(".form-2-btns").style.display = "block";
    form_3.style.display = "none";
})

formBack_4.addEventListener("click", ()=>{
    document.querySelector(".form-3-btns").style.display = "block";
    form_4.style.display = "none";
})

formDone.addEventListener("click", ()=>{
    document.querySelector(".success-register-complete").style.display = "block";
    document.querySelector(".registration-form").style.display = "none";
})

function handleEmptyinputs(){
    var userNamreg = document.querySelector("#user-nam")
    var fullNam = document.querySelector("#full-nam")
    if(userNamreg.value === "" || fullNam ===""){
        fullNam.setAttribute = "focus"
    }
}

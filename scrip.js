let arr=[];
let form=document.getElementById("form")
let image=document.getElementById("image")


form.addEventListener("submit",function(e){

e.preventDefault();

let endpoint ="upload.php";
const formdata=  new  FormData(e);
let obj=Object.formEntries(formdata)
formdata.append("image",e.target)
console.log(obj);
})
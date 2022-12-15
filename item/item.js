let productURL = "https://api.escuelajs.co/api/v1/products";
let bag=[];
function data_fetch(productURL){
    fetch(productURL)
    .then((res)=>res.json())
    .then((data)=>{
        display(data);
       console.log(data)
       bag=data;
    })
    .catch((err)=>console.log(err))  
}
function display(array){
    document.getElementById("container").innerHTML=null;
    array.forEach(element => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",element.images[1]);
        img.addEventListener("click",function(){
            window.location.href="product.html";
            add_product(element.title,element);
        })
        let title=document.createElement("h4");
        title.innerText=element.title;
        let price=document.createElement("h4");
        price.innerText="$"+element.price;
        let desc=document.createElement("p");
        desc.innerText=element.description;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.addEventListener("click",function(){
            alert("Item added to liked items");
            add_data("added_item",element);
        })
        div.append(img,title,price,btn,desc);
        document.getElementById("container").append(div);
    });
}
function renderPginationButtons(totalcount){
    let total_btns=Math.ceil(totalcount/20);
    function list_btn(){
        let arr=[];
        for(let i=1;i<=total_btns;i++){
            arr.push(getasbutton(i,'pagination-btn button',i));
        }
        return arr.join(' ');
    }
document.getElementById("pagination").innerHTML=`
<div class="pagination_list">
${(list_btn())}
Total Items : ${totalcount}
</div>
`
let pagination_btns=document.querySelectorAll(".pagination_list");
for(let pagination_btn of pagination_btns){
    pagination_btn.addEventListener("click",(event)=>{
        let dataID = event.target.dataset.id;
        let id=10*(dataID-1)
         data_fetch(`${productURL}?offset=${id}&limit=20`);
    })
}
}
renderPginationButtons(198);
function getasbutton(text,cls,dataid){
    return`<button class="${cls}" ${dataid ? `data-id=${dataid}`:""}>${text}</button>`
}
data_fetch(`${productURL}?offset=${0}&limit=20`);

function submit(){
    let value=document.getElementById("filter").value;
        bag.filter((element)=>{
       if(value==="1"){
        let sort=bag.sort((a,b) => b.price-a.price);
        display(sort);
       }else if(value==="2"){
        let sort=bag.sort((a,b) => a.price-b.price);
        display(sort);
       }else if(value==="3"){
       bag.sort((a,b)=>{
        if(a.title<b.title){
            return -1;
        }
        if(a.title>b.title){
            return 1;
        }
        return 0;
       })
        display(bag);
       }
       else{
        bag.sort((a,b)=>{
            if(a.title>b.title){
                return -1;
            }
            if(a.title<b.title){
                return 1;
            }
            return 0;
           })
            display(bag);
       }
    })
}
function search() {
    let value = document.querySelector("input").value;
    let filterdata = data.filter(function (element) {
        return element.name.toLowerCase().includes(value.toLocaleLowerCase());
    })
    display(filterdata);
}
function add_data(key,values){
    let new_data=JSON.parse(localStorage.getItem(key))||[];
    new_data.push(values);
    localStorage.setItem(key,JSON.stringify(new_data));
}
function add_product(key,values){
    let new_data=JSON.parse(localStorage.getItem(key))||[];
    new_data.push(values);
    localStorage.setItem(key,JSON.stringify(new_data));
}
    let data = JSON.parse(localStorage.getItem("added_item"));
    //console.log(data);
    function display_data(array) {
        document.querySelector("#product").innerHTML = "";
        array.forEach((element, index) => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", element.images[0]);
            let title = document.createElement("h5");
            title.innerText = element.title;
            let details = document.createElement("h5");
            details.innerText = element.description;
            let price = document.createElement("h1");
            price.innerText = "$" + element.price;
            let button = document.createElement("button");
            button.innerText = "Delete"
            button.addEventListener("click", function () {
                delete_data(data, index);
            })
            div.append(img, title, price, button);
            document.querySelector("#product").append(div);
            document.querySelector("#h2").innerText = "Total number of items are " + (array.length);
            let res = data.reduce((acc, element) => {
                return acc + Number(element.price);
            }, 0);
            document.querySelector("#h1").innerText = "Total cost of items are $" + res; 
            document.querySelector("#coupon").addEventListener("click",function(){
                let count=0;
                let c = document.querySelector("#input").value;
                if(c==="JUST4U"){
                    document.querySelector("#h1").innerText = "Total cost of items are $" + res*.3; 
                }else if(c!=="JUST4U"){
                    count++;
                }
                if(count>0){
                    alert("Incorrect coupon");
                    console.log(count)
                }
            });
        });
    }
    document.querySelector("#btn").addEventListener("click",function(){
            window.location.href="placeorder.html"
           }) 
    function delete_data(data, index) {
        data.splice(index, 1);
        localStorage.setItem("added_item", JSON.stringify(data));
        display_data(data);
    }
    display_data(data);

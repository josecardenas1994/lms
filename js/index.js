 var library =[];
var uniqueId = 0;


var lisb = document.getElementById("btn");
lisb.addEventListener("click",funk);


function item(dogBreed, ownerName,ticketNum,street,city,zip,bath){
    this.dogBreed = dogBreed;
    this.ownerName = ownerName;
    this.ticketNum = ticketNum;
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.bath = bath;


    uniqueId += 1;
}

function addb(){
    //console.log(addb);
    var dogBreed =document.getElementById("dogBreed").value;
    
    var ownerName =document.getElementById("ownerName").value;
    var ticketNum =document.getElementById("ticketNum").value;
    var street =document.getElementById("street").value;
    var city =document.getElementById("city").value;
    var zip =document.getElementById("zip").value;
    var bath =document.getElementById("bath").value;  
    

    var addIt = new item(dogBreed,ownerName,ticketNum,street,city,zip,bath);
    
    //console.log(addIt);
     library.push(addIt);
    var gt = Object.values(addIt);
   
    
    var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(gt);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with 

    document.getElementById("myList").innerHTML = JSON.stringify(gt);
    
 
};
 function func(){
     
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);

 }




 function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
}
   function funk(){
       addb();
       func();
   }
function init(){
  
   
 


 console.log(library);   
};



window.onload = init;
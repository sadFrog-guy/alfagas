
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('myModal2');

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0]; 
btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
function calculateTip() {
    var billAmt = document.getElementById("billAmount").value;
    var tipAmt = document.getElementById("tipPercent").value;
    
    if (billAmt === "" && tipAmt == 0){
    alert("Вы не указали количество литров");
    }
    var totalTip = (billAmt * tipAmt);
    totalTip = totalTip.toFixed(2)  
    document.getElementById("tip").innerHTML = totalTip;
  }
  
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };
 

//   jfdgnjdfngjdnfg
function calculateTip2() {
    var billAmt2 = document.getElementById("billAmount2").value;
    var tipAmt2 = document.getElementById("tipPercent2").value;
    
    if (billAmt2 === "" && tipAmt2 == 0){
    alert("Вы не указали количество литров");
    }
    var totalTip2 = (billAmt2 * tipAmt2);
    totalTip2 = totalTip2.toFixed(2)  
    document.getElementById("tip2").innerHTML = totalTip2;
}

document.getElementById("calculate2").onclick = function() {
    calculateTip2();
};
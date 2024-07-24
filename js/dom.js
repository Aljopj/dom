function clickme(){
    a=parseInt(document.getElementById('add').value)
    b=parseInt(document.getElementById('suu').value)
    document.getElementById("result").textContent=`sum is= ${a+b}`
}
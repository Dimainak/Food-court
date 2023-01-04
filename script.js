function getData()
{
    var name=document.getElementById("uname").value;
    var email=document.getElementById("mail").value;
    var mobile=document.getElementById("mobile").value;
    var item=document.getElementById("item").value;
    var address=document.getElementById("address").value;
    var quantity=document.getElementById("qty").value;
    localStorage.setItem("txtValue", name);
    localStorage.setItem("txtValue1", email);
    localStorage.setItem("txtValue2", mobile);
    localStorage.setItem("txtValue3", item);
    localStorage.setItem("txtValue4", address);
    localStorage.setItem("qtyIndex",quantity);
    
}
function Back(){
    window.location.href="index.html" ;
}
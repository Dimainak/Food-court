function showData()
{
    let name=localStorage.getItem("txtValue");
    let mail=localStorage.getItem("txtValue1");
    let phn=localStorage.getItem("txtValue2");
    let item=localStorage.getItem("txtValue3");
    let address=localStorage.getItem("txtValue4");
    let z=localStorage.getItem("qtyIndex")
    document.getElementById("demo1").innerHTML=name;
    document.getElementById("demo2").innerHTML=mail;
    document.getElementById("demo3").innerHTML=phn;
    document.getElementById("demo6").innerHTML=address;
    document.getElementById("demo4").innerHTML=item;
    //let qty=localStorage.getItem("txtValue5");
    /*console.log(name);
    console.log(mail);
    console.log(phn);
    console.log(item);
    console.log(address);*/
    if(z!==null)
    {
        document.getElementById("demo5").innerHTML=z;
    }
}

function Next(){
    window.location.href="payment.html";
}
function back()
{
    window.location.href="order.html";
}
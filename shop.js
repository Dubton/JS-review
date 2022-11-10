function clearCart(){
    document.getElementsByClassName("cart-items")[0].innerHTML=''
}

function listRemove(item){
    item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)
}

function AddToCart(listing){
    document.getElementsByClassName("cart-items")[0].appendChild(document.createElement("div")).setAttribute("class", "cart-row")
    document.getElementsByClassName("cart-items")[0].lastChild.appendChild(document.createElement("div")).setAttribute("class", "cart-item cart-column")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].appendChild(document.createElement("img")).setAttribute("class", "cart-item-image")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].childNodes[0].setAttribute("src", listing.parentNode.parentNode.childNodes[3].getAttribute("src"))
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].childNodes[0].setAttribute("width", "100")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].childNodes[0].setAttribute("height", "100")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].appendChild(document.createElement("span")).setAttribute("class", "cart-item-title")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[0].childNodes[1].innerHTML=listing.parentNode.parentNode.childNodes[1].innerHTML
    document.getElementsByClassName("cart-items")[0].lastChild.appendChild(document.createElement("span")).setAttribute("class", "cart-price cart-column")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[1].innerHTML=listing.parentNode.childNodes[1].innerHTML
    document.getElementsByClassName("cart-items")[0].lastChild.appendChild(document.createElement("div")).setAttribute("class", "cart-quantity cart-column")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].appendChild(document.createElement("input")).setAttribute("class", "cart-quantity-input")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[0].setAttribute("type", "number")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[0].setAttribute("value", 1)
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[0].setAttribute("onchange", "updateTotal()")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].appendChild(document.createElement("button")).setAttribute("class", "btn btn-danger")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[1].setAttribute("type", "button")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[1].setAttribute("onclick", "listRemove(this)")
    document.getElementsByClassName("cart-items")[0].lastChild.childNodes[2].childNodes[1].innerHTML="REMOVE"
    updateTotal()
}

function updateTotal(){
    let total=0
    let i=1
    while(i<document.getElementsByClassName("cart-items")[0].childNodes.length){
        let value=document.getElementsByClassName("cart-items")[0].childNodes[i].childNodes[1].innerHTML.slice(1)*document.getElementsByClassName("cart-items")[0].childNodes[i].childNodes[2].childNodes[0].value
        total=value+total
        i++
    }
    document.getElementsByClassName("cart-total-price")[0].innerHTML="$"+`${total.toFixed(2)}`
}
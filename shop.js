function clearCart(){
    document.getElementsByClassName("cart-items")[0].innerHTML=''
}

function listRemove(item){
    item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)
}

function AddToCart(object){
    
}
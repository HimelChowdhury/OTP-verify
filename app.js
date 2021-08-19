document.getElementById('gerante-pin-button').addEventListener("click", function(){
  document.getElementById('pin-Show-Display').value = getOTP();

})
 


function getOTP(){
    const randnumber = Math.random()*10000
    const pinnNum = (randnumber + '').split('.')[0]
    if(pinnNum.length === 4){
        return pinnNum;
    }
else{
    return getOTP()
}

}

document.getElementById('Typing-Number').addEventListener('click', function(event){
    const digit = event.target.innerText;
    
if(digit === 'C'){
    document.getElementById('Type-Display').value = ' '; 
}
else{
    const type =  document.getElementById('Type-Display');
    type.value = type.value + digit;
  
}
  
})

function OTPverifay(){
    const pinDisplayOTP = document.getElementById('pin-Show-Display').value;
    const typeDisplayOTP = document.getElementById("Type-Display").value;
    if( pinDisplayOTP ===  typeDisplayOTP){
       document.getElementById('true').style.display = "block";
       document.getElementById('false').style.display = "none";
    }
    else{
        document.getElementById('false').style.display = "block";
        document.getElementById('true').style.display = "none";
    }
    
    
}



    

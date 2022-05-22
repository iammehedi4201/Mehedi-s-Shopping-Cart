// Mobile js start from here


let selectPlusButton =document.getElementById("plusBtn");

selectPlusButton.addEventListener("click",function ()
{  

    let catchInputValue = document.getElementById("inputValue").value;

     catchInputValue =parseFloat(catchInputValue);

     catchInputValue++;

     document.getElementById("inputValue").value = catchInputValue;

     
     

    
})

function updatePrice()
{
    
    
}
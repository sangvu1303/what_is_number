let input = document.getElementById("getNumber");
input.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("enter").click();
    }
});



let count = 0;
function calculate(){
    let number = parseFloat(document.getElementById('getNumber').value);
    document.getElementById('countToOne').innerHTML = '';

    // số lẻ,chẵn,thập phân
    if(Number.isInteger(number)){
        if(number % 2 === 0){
            document.getElementById('decimal').innerHTML = `${number} là số chẵn `;
        } else{
            document.getElementById('decimal').innerHTML = `${number} là số lẻ `;
        }
    } else{
        document.getElementById('decimal').innerHTML = `${number} là số thập phân `;
    }


    // số nguyên tố
    let prime = 1;
    if(number < 2){
        prime = 0;
    } else {
        for(let i = 2; i < number - 1; i++){
            if(number % i === 0){
                prime = 0;
                break;
            }
        }
    }
    if(prime === 0){
        document.getElementById('primeNumber').innerHTML = `${number} không phải là số nguyên tố `;
    } else{
        document.getElementById('primeNumber').innerHTML = `${number} là số nguyên tố `;
    }


    // ghi ra chuỗi số
    if(number>0){
        for(let i = 0; i <= number ; i++){
            document.getElementById('countToOne').innerHTML +=(i + ' ');
        }
        if(Number.isInteger(number) === false)
            document.getElementById('countToOne').innerHTML +=(number);
    } 
    else // nhỏ hơn 0 
    {
        if(Number.isInteger(number) === false)
            document.getElementById('countToOne').innerHTML +=(number + ' ');
        for(let i = 0; i >= number ; number++){
            document.getElementById('countToOne').innerHTML +=(Math.ceil(number) + ' ');
        }
    }


    // đếm số
    count += 1;
    document.getElementById('countEnter').innerHTML = ` Bạn đã nhập ${count} số `;
}
const seats = document.getElementsByClassName("seat");
let count = 0;

for(const seat of seats){
    seat.addEventListener("click",function(){
        const seatName = seat.innerText;
        //change color after clicking
        seat.classList.add('bg-green-500');
        
        //decrease seat number

        let seatNumberText =document.getElementById("seat-number").innerText;
        let seatNumber = parseInt(seatNumberText);
        //console.log(typeof seatNumberText);
        
        // count
        count = count + 1;
        
        seatNumber = seatNumber - 1;
        
       document.getElementById("seat-number").innerText = seatNumber;

       //add seat number
       let addSeatText =document.getElementById("add-seat").innerText;
       let addSeat = parseInt(addSeatText);
       //console.log( addSeat);
       addSeat = addSeat+1;
       document.getElementById("add-seat").innerText = addSeat;

       //set seat and price
       const setSeat = document.getElementById("set-seat");
       const div = document.createElement('div');
        div.classList.add("flex","gap-28","mt-6");
        setSeat.appendChild(div);
    // const p = document.createElement('p');
    // p.innerText = 'tania';
    // setSeat.appendChild(p);
       const p1 = document.createElement('p');
       p1.innerText = seatName;
       div.appendChild(p1);

       const p2 = document.createElement('p');
       p2.innerText = 'Economy';
       div.appendChild(p2);
       
       const p3 = document.createElement('p');
       p3.innerText = '550';
       div.appendChild(p3);

       //calculate total price
       const price = 550;
       const totalPrice = price * count;
       
     //------------set price--------------
     const priceText = document.getElementById('set-price').innerText;
     document.getElementById('set-price').innerText =totalPrice;

    //  ----------------coupon------------------------------
    // const coupon = document.getElementById('coupon');
    // const couponValue = coupon.value;
    // console.log(couponValue);
     
    function check(){
        const coupon = document.getElementById('coupon');
    const couponValue = coupon.value.toUpperCase();
    console.log(couponValue);

    const button = document.getElementById('btn') =couponValue;

     
    if(couponValue == NEW15 || couponValue == COUPLE20){
        console.log('you are right');
    }
    else{
        console.log('you are wrong');
    }
    }


     


    })
}


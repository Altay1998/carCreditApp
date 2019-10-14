let cardInfo = function (cardNum, date, cvv, cash) {
    this.num = cardNum;
    this.date = date;
    this.cvv = cvv;
    this.cash = cash;
}
let cards = {
    card1: new cardInfo('12345678', '2010', '123', '123000'),
    card2: new cardInfo('23442422', '2010', '234', '123000'),
    card3: new cardInfo('43543543', '2010', '453', '123000'),
    card4: new cardInfo('53454355', '2010', '545', '123000'),
    card5: new cardInfo('34353455', '2010', '654', '123000'),
    card6: new cardInfo('53234554', '2010', '756', '123000'),
    card7: new cardInfo('53453455', '2010', '235', '123000'),
    card8: new cardInfo('23443242', '2010', '666', '123000'),
    card9: new cardInfo('34646346', '2010', '456', '123000'),
    card10: new cardInfo('34563466', '2010', '354', '123000'),
    card11: new cardInfo('43634566', '2010', '375', '123000'),
    card12: new cardInfo('64364566', '2010', '111', '123000'),
    card13: new cardInfo('32345345', '2010', '222', '123000'),
    card14: new cardInfo('78687667', '2010', '333', '123000'),
    card15: new cardInfo('58725275', '2010', '555', '123000'),
    card16: new cardInfo('45543737', '2010', '777', '123000'),
    card17: new cardInfo('56464567', '2010', '875', '123000'),
}
let pay = function () {
    let cardnum = document.getElementById("crdNUm");
    let cardDate = document.getElementById("crddate");
    let cardCvv = document.getElementById("crdCvv");
    let cardcash = parseInt(document.getElementById("cash").value);
    
    if (checkCardInfo(cardnum,cardDate,cardCvv)){
    for (let f in cards) {
        
        if ((cardnum.value==cards[f].num)&&(cardcash<=parseInt(cards[f].cash))) {
            cards[f].cash -= cardcash;
            alert(`Odenis ugurla heyata kecirildi.Yekun mebleg ${cards[f].cash}`)
        }
        else if ((cardnum.value==cards[f].num)&&(cardcash>parseInt(cards[f].cash))) {
            alert("Balans azdir");
        }
    }

}}
let checkCardInfo = function (num, date, cvv) {
    let cout=0;
    for (let f in cards) {
        if (cards[f].num == num.value) {
            cout=0;
            if (cards[f].date == date.value)   {
                if (cards[f].cvv == cvv.value)   {
                    return true;
            } else{
                return false;
            }
            }  else{
                return false;
            } 
            break;         
       } 
       cout++;
    }
    if(cout!=0){
        return false;
    }
    
}
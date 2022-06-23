const basicPercent = 15; //базовый процент
const borrowers = ["семейная ипотека","льготная ипотека","обычная","ипотека для IT-специалистов"]; //набор ипотек
const discounts = [8, 13, 0, 5.5] //скидки



for(let i=0; i< borrowers.length; i+=1){
    if (i==0){
        totalPercent = basicPercent - discounts[0];
        console.log(borrowers[i] + ' : ' + totalPercent + ' процентов годовых');
    } else if (i==1){
        totalPercent = basicPercent - discounts[1];
        console.log(borrowers[i] + ' : ' +totalPercent + ' процентов годовых');
    } else if (i==2) {
        totalPercent = basicPercent - discounts[2];
        console.log(borrowers[i] + ' : ' + totalPercent + ' процентов годовых');
    } else if (i==3) {
        totalPercent = basicPercent - discounts[3];
        console.log(borrowers[i] + ' : ' +totalPercent + ' процентов годовых');
    }
}
    
// Задача №1. PerDay, PerWeek, PerMonth
function perDay() {
    let seconds = 60;
    let minutes = 60;
    let day = seconds * minutes;
    console.log(day);
}
  perDay();

function perWeek() {
    let day = 3600;
    let week = 7;
    let secondsPerWeek = day * week;
    console.log(secondsPerWeek);
}
 perWeek();

function perMonth() {
    let day = 3600;
    let month = 30;
    let secondsPerMonth = day * month;
    console.log(secondsPerMonth);
}
 perMonth();

 // Задача №2 month ot 1 do 12

 let month = 9;
 if (month == 12 || month <= 2) {
 let result = 'Зима';
 }
 if (month >= 3 && month <= 5) {
 result = 'Весна';
 }
 if (month >= 6 && month <= 8) {
 result = 'Лето';
 }
 if (month >= 9 && month <= 11) {
 result = 'Осень';
 }
 console.log(result);
 
// Задача №3 Capitals

let Capitals = {
    "Минск": "Белорусь",
    "Москва": "РФ",
    "Киев": "Украина"
}
for (key in Capitals){
    console.log(key + "  это - " + Capitals[key]);
}

// Zadacha #4 функция,принимает параметром число от 1 до 7 ,а возвращает день недели на русском языке

function DayOfWeek(denNedeli) {
    if (denNedeli == 1){
    console.log('Ponedelnik');
    }else if (denNedeli == 2){
        console.log('Vtornik');
        } else if (denNedeli == 3){
            console.log('Sreda');
            } else if (denNedeli == 4){
                console.log('Chetverg');
                } else if (denNedeli == 5){
                    console.log('Piatnica');
                    } else if (denNedeli == 6){
                        console.log('Sybbota');
                        } else if (denNedeli == 7){
                            console.log('Voskresenie');
                            }
}
DayOfWeek(4);

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

let month = 6;
switch (month) {
    
    case 1, 2, 12 => System.out.println("зима");
    case 3, 4, 5 => System.out.println("весна");
    case 6, 7, 8 => System.out.println("лето");
    case 9, 10, 11 => System.out.println("осень");
};

public static void checkSeason(int month); {
    
    if (month / 3 == 1)
        System.out.println("весна");
    else if (month / 3 == 2)
        System.out.println("лето");
    else if (month / 3 == 3)
        System.out.println("осень");
    else
        System.out.println("зима");
}
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
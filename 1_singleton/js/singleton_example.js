class WeekDays {
    daysEs = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'
    ];

    daysEn = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    constructor(language) {
        this.language = language;
        
        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.language === 'es' 
            ? this.daysEs 
            : this.daysEn;
    }
}

const weekDaysEs = new WeekDays('es');
console.log(weekDaysEs.getDays());

const weekDaysEn = new WeekDays('en');
console.log(weekDaysEn.getDays());

console.log(weekDaysEs === weekDaysEn);
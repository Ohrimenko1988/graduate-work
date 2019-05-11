
export class DateParser {
    public static parse(date: string | Date): string {
        let tempDate: Date = new Date();

        if (date instanceof Date) {
            tempDate = date;
        }

        if (date instanceof String) {
            tempDate = new Date(date)
        }

        const day: number = tempDate.getDate();
        const month: number = tempDate.getMonth() + 1;
        const year: number = tempDate.getFullYear();

        let convertedDay: string = "" + day
        let convertedMonth: string = "" + month;
        let convertedYear: string = "" + year;

        if (day < 10) {
            convertedDay = `0${day}`;
        }

        if (month < 10) {
            convertedMonth = `0${month}`;
        }

        return `${convertedDay}.${convertedMonth}.${convertedYear}`
    }
}

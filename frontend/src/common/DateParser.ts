
export class DateParser {
    public static parse(date: string | Date): string {
        let tempDate: Date = new Date();

        if (date instanceof Date) {
            tempDate = date;
        }

        if (date instanceof String) {
            tempDate = new Date(date)
        }

        return `${tempDate.getDate()}.${tempDate.getMonth() + 1}.${tempDate.getFullYear()}`
    }
}

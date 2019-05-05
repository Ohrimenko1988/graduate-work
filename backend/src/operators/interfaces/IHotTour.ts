export interface IHotTour {
    getTourLink(): string;
    getImageSource(): string;
    getTitle(): string;
    getCountry(): string;
    getResort(): string;
    getTypeOfAccommodation(): string;
    getDuration(): string;
    getDepartureDate(): string;
    getArrivalDate(): string;
    getAdultsCapacity(): number;
    getChildrenCapacity(): number;
    getPrice(): string;
}

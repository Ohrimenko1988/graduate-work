import React from 'react';
import SearchForm from './search-form/SearchForm';
import TourListItem, { TourListItemProps } from './search-form/TourListItem';
import axios from 'axios';
import { ITour } from './common/interfaces/ITour';
import PriceRange from './filter/PriceRange';

interface AppState {
  hotTours: TourListItemProps[];
}

export default class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)

    this.state = {
      hotTours: new Array()
    }

  }

  componentWillMount() {
    axios.get("http://localhost:8080/hot-tours").then((resp: any) => {
      let recivedTours: TourListItemProps[] = new Array();
      console.log(resp);
      const hotTours: ITour[] = resp.data

      console.log(hotTours);


      hotTours.map((tour: ITour) => {
        let itemProps: TourListItemProps = {
          imageSource: tour.imageSource,
          title: tour.title,
          country: tour.country,
          resort: tour.resort,
          typeOfAccommodation: tour.accommodation,
          duration: "" + tour.duration,
          departureDate: tour.departureDate,
          arrivalDate: tour.arrivalDate,
          adultsCapacity: tour.adultsCapacity,
          childrenCapacity: tour.childrenCapacity,
          price: tour.price
        }

        recivedTours.push(itemProps)
      })

      console.log(recivedTours);

      this.setState({
        hotTours: recivedTours
      })
    })
  }

  renderHotTours() {
    return this.state.hotTours.map(tour => {
      return <TourListItem {...tour} />
    })
  }

  // const tourListItemProps: TourListItemProps = {
  //   imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
  //   title: 'Title',
  //   country: 'Country',
  //   resort: 'Resort',
  //   typeOfAccommodation: 'Accom',
  //   duration: 'Duration',
  //   departureDate: 'Departure Date',
  //   arrivalDate: 'Arrival Date',
  //   adultsCapacity: 2,
  //   childrenCapacity: 0,
  //   price: 'Price'
  // }


  // return hotTours.map((tour: IHotTour) => {
  // let itemProps: TourListItemProps = {
  //   imageSource: tour.imageSource,
  //   title: tour.title,
  //   country: tour.country,
  //   resort: tour.resort,
  //   typeOfAccommodation: tour.accommodation,
  //   duration: "" + tour.duration,
  //   departureDate: tour.departureDate,
  //   arrivalDate: tour.arrivalDate,
  //   adultsCapacity: tour.adultsCapacity,
  //   childrenCapacity: tour.childrenCapacity,
  //   price: tour.price
  // }

  // return <TourListItem {...itemProps} />
  // })


  render() {
    return (
      <div className='main-page app-body-arrea' >
        <div className='app-arrea-item header-arrea'>Header</div>

        <div className='app-arrea-item search-form-arrea' ><SearchForm /></div>

        <div className='app-arrea-item main-page-content'>


          <div className='content-item left-comercial-arrea'>Left Comercial</div>

          <div className='content-item content-arrea'>

            {this.renderHotTours()}


          </div>

          <div className='content-item right-comercial-arrea'>Right Comercial</div>

        </div>

        <div className='app-arrea-item footer'>Footer</div>


      </div>
    );
  }
}


import React from 'react';
import SearchForm from './search-form/SearchForm';
import TourListItem, { TourListItemProps } from './TourListItem';
import axios from 'axios';
import { ITour } from './common/interfaces/ITour';
import PriceRange from './filter/PriceRange';
import { connect } from 'react-redux';
import { AppConstants } from './AppConstants';

interface MainPageState {
  hotTours: TourListItemProps[];
}

class MainPage extends React.Component<any, MainPageState> {
  private static readonly HOT_TOURS_REQUEST_URL: string = `${AppConstants.BASE_REQUEST_URL}${AppConstants.HOT_TOURS_URI}`;

  constructor(props: any) {
    super(props)

    this.state = {
      hotTours: new Array()
    }

  }

  componentWillMount() {
    axios.get(MainPage.HOT_TOURS_REQUEST_URL).then((resp: any) => {
      let recivedTours: TourListItemProps[] = new Array();
      console.log("Response of hot tours request \n", resp);

      const hotTours: ITour[] = resp.data
      console.log("Received 'ITour' list \n", hotTours);


      hotTours.map((tour: ITour) => {
        let itemProps: TourListItemProps = {
          tourLink: tour.tourLink,
          imageSource: tour.imageSource,
          title: tour.title,
          country: tour.country,
          resort: tour.resort,
          accommodation: tour.accommodation,
          duration: "" + tour.duration,
          departureDate: tour.departureDate,
          arrivalDate: tour.arrivalDate,
          adultsCapacity: tour.adultsCapacity,
          childrenCapacity: tour.childrenCapacity,
          price: tour.price
        }

        recivedTours.push(itemProps)
      })

      console.log("List of 'TourListItemProps' \n", recivedTours);

      this.setState({
        hotTours: recivedTours
      })
    });
  }

  renderHotTours() {
    return this.state.hotTours.map(tour => {
      return <TourListItem {...tour} />
    })
  }

  render() {
    return (
      <div className='main-page app-body-arrea' >
        <div className='app-arrea-item header-arrea'>Header</div>
        <div className='app-arrea-item search-form-arrea' ><SearchForm /></div>
        <div className='app-arrea-item main-page-content'>
          <div className='content-item left-comercial-arrea'></div>
          <div className='content-item content-arrea'>
            {this.renderHotTours()}
          </div>
          <div className='content-item right-comercial-arrea'></div>
        </div>
        <div className='app-arrea-item footer'>Footer</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: (trackName: any) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(MainPage);


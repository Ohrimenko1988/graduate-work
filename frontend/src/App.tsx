import React from 'react';
import SearchForm from './search-form/SearchForm';
import TourListItem, { TourListItemProps } from './search-form/TourListItem';

const App: React.FC = () => {

  const divStyle = {
    color: 'blue',

  }

  const tourListItemProps: TourListItemProps = {
    imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
    title: 'Title',
    country: 'Country',
    resort: 'Resort',
    typeOfAccommodation: 'Accom',
    duration: 'Duration',
    departureDate: 'Departure Date',
    arrivalDate: 'Arrival Date',
    adultsCapacity: 2,
    childrenCapacity: 0,
    price: 'Price'
  }

  return (
    <div className='app-body-arrea'>
      <div className='app-arrea-item header-arrea'>Header</div>

      <div className='app-arrea-item search-form-arrea' ><SearchForm /></div>

      <div className='app-arrea-item main-page-content'>


        <div className='content-item left-comercial-arrea'>Left Comercial</div>

        <div className='content-item content-arrea'>
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
          <TourListItem {...tourListItemProps} />
        </div>

        <div className='content-item right-comercial-arrea'>Right Comercial</div>

      </div>

      <div className='app-arrea-item footer'>Footer</div>


    </div>
  );
}

export default App;

import { Tabs} from 'antd'
import React from 'react'
import Footer from '../components/footer/Footer'
import HotelGallery from '../components/hotelInfos/HotelGallery'
import Amenities from '../components/hotelInfos/Amenities'
import HotelLocation from '../components/hotelInfos/HotelLocation'
import Overview from '../components/hotelInfos/Overview'
import Polices from '../components/hotelInfos/Polices'
import Room from '../components/hotelInfos/Room'
import SearchHeader from '../components/searchHeader'
import { cityImages } from '../data/data'

// import { Sticky, StickyContainer } from 'react-sticky';

const { TabPane } = Tabs;

// const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
//   <Sticky bottomOffset={80}>
//     {({ style }) => (
//       <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
//     )}
//   </Sticky>
// );
const reverseButton = <button className='btn-primary hidden font-medium md:block'>Өрөө захиалах</button>


function HotelScreen() {
  return (
    <div className='max-h-screen'>
      <SearchHeader fixed withFilterRow />
      <div className='md:pt-[110px]'>
        <div className='md:container'>
          <HotelGallery images={cityImages(10)} />
          {/* <StickyContainer> */}
            <Tabs size="middle" className='mb-14 border-t md:border-0 border-gray-light' tabBarExtraContent={reverseButton}>
              <TabPane tab="Тойм" key="1">
                <Overview />
              </TabPane>
              <TabPane tab="Өрөөнүүд" key="2">
                <Room />
              </TabPane>
              <TabPane tab="Байршил" key="3">
                <HotelLocation />
              </TabPane>
              <TabPane tab="Тав тухтай байдал" key="4">
                <Amenities />
              </TabPane>
              <TabPane tab="Дэг журам" key="5">
                <Polices />
              </TabPane>
              {/* <TabPane tab="Сэтгэл ханамж" key="6">
                <HotelLocation />
              </TabPane> */}
            </Tabs>
          {/* </StickyContainer> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HotelScreen
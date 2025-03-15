import React from 'react'
import Hero from './HomeComp/Hero'
import Search from './HomeComp/Search'
import FeaturedHotel from './HomeComp/FeaturedHotel'
import PopularDestinations from './HomeComp/PopularDestination'

const HomeComp = () => {
  return (
    <div>
      <Hero/>
      <Search/>
      <FeaturedHotel/>
      <PopularDestinations/>
    </div>
  )
}

export default HomeComp

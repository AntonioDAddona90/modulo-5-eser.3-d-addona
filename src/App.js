import React, {Component} from 'react'
import NavigationBar from './components/Navigationbar';
import CarouselHero from './components/CarouselHero';
import Footer from './components/Footer';

import LifeCycleExample from './components/LifecycleExample';

class App extends Component {
  constructor (props)  {
    super(props)
  }

  render() {
    return (
      <>
       <LifeCycleExample />
       
       <NavigationBar />
       <CarouselHero />
       
       <Footer />
      </>
    )
  }
}

export default App;

import React from 'react'
import styled from 'styled-components'

import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        desc='Order Online for Touchless Delivery'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
        bgImg='model-s.jpg'
      />
      <Section
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
        bgImg='model-y.jpg'
      />
      <Section
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
        bgImg='model-3.jpg'
      />
      <Section
        title='Model X'
        desc='Order Online for Touchless Delivery'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
        bgImg='model-x.jpg'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        desc='Money-back Guarantee'
        bgImg='solar-panel.jpg'
        leftBtnTxt='Order Now'
        rightBtnTxt='Learn More'
      />
      <Section
        title='Solars for New Roofs'
        desc='Solar Roof Costs Less Than a New Roof'
        bgImg='solar-roof.jpg'
        leftBtnTxt='Order Now'
        rightBtnTxt='Learn More'
      />
      <Section
        title='Accessories'
        bgImg='accessories.jpg'
        leftBtnTxt='Shop Now'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`

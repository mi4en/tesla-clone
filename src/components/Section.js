import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

const Section = ({ title, desc, bgImg, leftBtnTxt, rightBtnTxt }) => {
  return (
    <Wrap bgImg={bgImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <BtnGroup>
            <LeftBtn>{leftBtnTxt}</LeftBtn>
            {rightBtnTxt && <RightBtn>{rightBtnTxt}</RightBtn>}
          </BtnGroup>
        </Fade>

        <DownArrow src='/images/down-arrow.svg'></DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ bgImg }) => `url('images/${bgImg}')`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Buttons = styled.div``

const BtnGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightBtn = styled(LeftBtn)`
  background-color: #fff;
  opacity: 0.65;
  color: #333;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

// Section.defaultProps = {
//   desc: 'Order Online for Touchless Delivery',
//   leftBtnTxt: 'Custom Order',
//   rightBtnTxt: 'Existing Inventory',
// }

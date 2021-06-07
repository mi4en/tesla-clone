import React from 'react'
import styled from 'styled-components'

const Section = () => {
	return (
		<Wrap>
			<h3>Hi, I am section</h3>
		</Wrap>
	)
}

export default Section

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('/images/model-s.jpg');
`

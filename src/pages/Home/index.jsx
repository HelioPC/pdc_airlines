import React from 'react'

import Welcome from './components/Welcome'
import * as C from './style'
import model7 from '../../assets/images/model-777.jpeg'
import Destiny from './components/Destiny'
import Bottom from './components/Bottom'

const Home = () => {
	return (
		<>
			<C.Container>
				<Welcome
					title='PDC - Airlines'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non'
                    background={model7}
				/>
				<Destiny />
				<Bottom />
			</C.Container>
		</>
	)
}

export default Home

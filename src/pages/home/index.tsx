import React from 'react'
import { Link } from 'react-router-dom'
import { Notice } from './styles'

const Home = () => {

	return (
		<>
			Home
			<Link to="/activatedProducts">
				<Notice>
					Thank you
				</Notice>
				<button>Get started</button>
			</Link>
			
		</>
	)
}

export default Home
import axios from 'axios'
import { ActivatedProduct } from './types'

const api = {
	getActivatedProducts: async (): Promise<ActivatedProduct | undefined> => {
		try {
			const response = await axios.get('http://localhost:3001/activatedProducts')
			return response.data
		} catch (e) {
			console.log(e)
		}
		
	},
}

export default api
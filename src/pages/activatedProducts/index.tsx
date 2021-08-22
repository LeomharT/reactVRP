import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activatedProductsSelector } from '../../store/activatedProducts/selector'
import { getActivatedProductsAsyncAction } from '../../store/activatedProducts/actions'
import { getActivatedProductsModule } from '../../store/activatedProducts/module'
import { DynamicModuleLoader } from 'redux-dynamic-modules'
import { Link } from 'react-router-dom'

const ActivatedProducts = () => {
	const dispatch = useDispatch()
	const activatedProductsState = useSelector(activatedProductsSelector)

	useEffect(() => {
		const asyncFunc = async () => {
			await dispatch(getActivatedProductsAsyncAction())
		}
		asyncFunc()

	}, [dispatch])

	const handleRefresh = () => {
		dispatch(getActivatedProductsAsyncAction())
	}

	return (
		<DynamicModuleLoader modules={[getActivatedProductsModule()]}>
			activatedProducts:
			<p>
				{ activatedProductsState && JSON.stringify(activatedProductsState.activatedProducts, null, 2)}
			</p>
			<button onClick={handleRefresh}>Refresh</button>
			<Link to="/">
				<button>Home page</button>
			</Link>
			
		</DynamicModuleLoader>
	)
}

export default ActivatedProducts
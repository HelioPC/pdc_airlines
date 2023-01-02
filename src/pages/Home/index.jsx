import React, { useState } from 'react'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import { ThreeDots } from 'react-loader-spinner'

const LoadingIndicator = () => {
	const { promiseInProgress } = usePromiseTracker()

	return (
		promiseInProgress &&
		<ThreeDots 
			height='80' 
			width='80' 
			radius='9'
			color='#282936' 
			ariaLabel='three-dots-loading'
			wrapperStyle={{}}
			wrapperClassName=''
			visible={true}
		/>
	)
}

const Home = () => {
	const [count, setCount] = useState(0)
	const [disable, setDisable] = useState(false)

	const FetchTest = async () => {
		setDisable(true)
		await new Promise(res => setTimeout(res, 5000))
	}

	const handleClick = () => {
		trackPromise(
			FetchTest().then(() => {
				setCount((count) => count + 1)
				setDisable(false)
			}),
		)
	}

	return (
		<div className='w-screen min-h-screen flex flex-col justify-center items-center'>
			<h1 className='mb-20 text-center sm:text-5xl'>
				{`You click ${count} time${count === 1 ? '': 's'}`}
			</h1>
			<button
				onClick={() => handleClick()}
				disabled={disable}
				className={`
					px-5 py-3 rounded-md border-0 text-white
					hover:scale-105 duration-500
					${
						disable ?
						'bg-[#AAA] cursor-not-allowed':
						'bg-[#282936] cursor-pointer'
					}
				`}
			>
				count is {count}
			</button>
			<LoadingIndicator />
		</div>
	)
}

export default Home

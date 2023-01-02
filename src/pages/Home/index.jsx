import React, { useState } from 'react'

const Home = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='w-screen min-h-screen flex flex-col justify-center items-center'>
			<h1 className='mb-20 text-center sm:text-5xl'>
				{`You click ${count} time${count === 1 ? '': 's'}`}
			</h1>
			<button
				onClick={() => setCount((count) => count + 1)}
				className='px-5 py-3 rounded-md border-0 bg-[#282936] text-white hover:scale-105 duration-500'
			>
				count is {count}
			</button>
		</div>
	)
}

export default Home

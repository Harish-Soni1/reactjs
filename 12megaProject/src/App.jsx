import './App.css'
import authService from "./appWrite/auth"
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { logIn, logOut } from './store/authSlice';
import { Footer, Header } from './components';


function App() {

	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		authService.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(logIn({userData}))
				}
				else {
					dispatch(logOut())
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false))
	}, [])

	return loading ? null: (
		<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
			<div className='w-full block'>
				< Header />

				< Footer />
			</div>
		</div>
	)
}

export default App

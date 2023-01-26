import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BookingProvider } from './contexts/BookingContext'
import { UserProvider } from './contexts/UserContext'
import Auth from './pages/Auth'
import Booking from './pages/Booking'
import FlySearchResult from './pages/FlySearchResult'
import Home from './pages/Home'
import Page404 from './pages/Page404'

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <BookingProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sign' element={<Auth />} />
                        <Route path='/flySearch' element={<FlySearchResult />} />
                        <Route path='/book' element={<Booking />} />
                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </BookingProvider>
            </UserProvider>
        </BrowserRouter>
    )
}

export default App

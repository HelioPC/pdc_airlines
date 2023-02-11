import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { BookingProvider } from './contexts/BookingContext'
import { UserProvider } from './contexts/UserContext'
import Auth from './pages/Auth'
import Booking from './pages/Booking'
import FlySearchResult from './pages/FlySearchResult'
import Home from './pages/Home'
import MyFlight from './pages/MyFlight'
import Page404 from './pages/Page404'
import MemberDashboard from './pages/MemberDashboard'
import MemberFlights from './pages/MemberFlights'

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <BookingProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sign' element={<Auth />} />
                        <Route path='/flySearch' element={<FlySearchResult />} />
                        <Route path='/book/:id' element={<Booking />} />
                        <Route path='/search' element={<MyFlight />} />
                        <Route path='/member/:id' element={<ProtectedRoute />}>
                            <Route path='/member/:id' element={<MemberDashboard />} />
                            <Route path='/member/:id/flights' element={<MemberFlights />} />
                        </Route>
                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </BookingProvider>
            </UserProvider>
        </BrowserRouter >
    )
}

export default App

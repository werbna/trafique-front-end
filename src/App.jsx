import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import TripsList from './components/TripsList/TripsList';
import TripDetails from './components/TripDetails/TripDetails';
import TripForm from './components/TripForm/TripForm';
import * as tripService from '../src/services/tripsService';
import * as authService from '../src/services/authService';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [trips, setTrips] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllTrips = async () => {
      const tripsData = await tripService.index();
      console.log('tripsData', tripsData)
      setTrips(tripsData);
    }
    if (user) fetchAllTrips()
  }, [user])

  const handleAddTrip = async (tripFormData) => {
    const newTrip = await tripService.create(tripFormData);
    setTrips([...trips, newTrip]);
    navigate('/trips')
  }  

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
            <Route path='/' 
            element={<Dashboard user={user} />} />
            <Route path='/trips' 
            element={<TripsList user={user} trips={trips} />} />
            <Route path='/trips/new' 
            element={<TripForm setUser={setUser} handleAddTrip={handleAddTrip} />} />

            <Route path='/trips/:tripId' 
            element={<TripDetails setUser={setUser} trips={trips} />} />
            </>
          ) : (
            <Route path='/' 
            element={<Landing />} />
          )}
          <Route path='/signup' 
          element={<SignupForm setUser={setUser} />} />
          <Route path='/signin' 
          element={<SigninForm setUser={setUser} />} />

        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;

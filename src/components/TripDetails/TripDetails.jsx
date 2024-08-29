import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as tripService from '../../services/tripsService'

const TripDetails = (props) => {
  const { tripId } = useParams()
  const [trip, setTrip] = useState(null)

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const tripData = await tripService.show(tripId)
        console.log('tripData:', tripData)
        setTrip(tripData)
      } catch (error) {
        console.error('Error fetching trip:', error)
      }
    }
    fetchTrip()
  }, [tripId])

  console.log('Trip state:', trip)

  return (
    <>
      <main>
        {trip ? (
          <div>
            <h1>Trip Details</h1>
            <p>Destination: {trip.destination}</p>
            <h2>Trip Logs:</h2>
            <ul>
              {trip.logEntries.map(logEntry => (
                <li key={logEntry._id}>
                  <p>Title: {logEntry.title}</p>
                  <p>Content: {logEntry.content}</p>
                  <p>Rating:  {logEntry.rating}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading trip details...</p>
        )}
      </main>
    </>
  );
}
export default TripDetails;

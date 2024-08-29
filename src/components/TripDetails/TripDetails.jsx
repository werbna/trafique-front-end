import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as tripService from "../../services/tripsService";
import LogEntryForm from "../LogEntryForm/LogEntryForm";

const TripDetails = (props) => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const tripData = await tripService.show(tripId);
        console.log("tripData:", tripData);
        setTrip(tripData);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };
    fetchTrip();
  }, [tripId]);

  const handleAddLogEntry = async (logEntryFormData) => {
    const newLogEntry = await tripService.addLogEntry(tripId, logEntryFormData);
    setTrip({ ...trip, logEntries: [...trip.logEntries, newLogEntry] });
  };

  console.log("Trip state:", trip);
  return (
    <>
      <main>
        {trip ? (
          <div>
            <h1>Trip Details</h1>
            <h2>LogEntryForm</h2>

            
            <LogEntryForm handleAddLogEntry={handleAddLogEntry} />
            <p>Destination: {trip.destination}</p>
            <h2>Trip Logs:</h2>
            <ul>
              {trip.logEntries.map((logEntry) => (
                <li key={logEntry._id}>
                  <p>Author: {logEntry.author.username}</p>
                  <p>Title: {logEntry.title}</p>
                  <p>Content: {logEntry.content}</p>
                  <p>Rating: {logEntry.rating}</p>
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
};
export default TripDetails;

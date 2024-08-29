import { Link } from "react-router-dom";

const TripsList = (props) => {
  console.log(props.trips)
  if (!props.trips) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h2><Link to="/Trips/New">Create Trip</Link></h2>
      <main>
        {props.trips && props.trips.map((trip) => (
          <Link key={trip._id} to={`/trips/${trip._id}`}>
            <article>
              <header>
                <p>{trip.destination}</p>
              </header>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
};

export default TripsList;

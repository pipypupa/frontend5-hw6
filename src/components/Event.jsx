import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUser, FaClock } from "react-icons/fa";
import { Card } from "./Event.styled";

function EventCard({ name, location, speaker, start, end }) {
  const startDate = new Date(start).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const duration = (new Date(end) - new Date(start)) / (1000 * 60 * 60);

  return (
    <Card>
      <h3>{name}</h3>
      <p>
        <FaMapMarkerAlt /> {location}
      </p>
      <p>
        <FaUser /> {speaker}
      </p>
      <p>
        <FaClock /> {startDate}
      </p>
      <p>⏳ {duration} hours</p>
    </Card>
  );
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default EventCard;

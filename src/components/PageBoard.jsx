import PropTypes from "prop-types";
import EventCard from "./Event";
import { Board, Title, Grid } from "./PageBoard.styled";

function PageBoard({ events }) {
  return (
    <Board>
      <Title>24th Core Worlds Coalition Conference</Title>

      <Grid>
        {events.map((evt, index) => (
          <EventCard
            key={index}
            name={evt.name}
            location={evt.location}
            speaker={evt.speaker}
            start={evt.time.start}
            end={evt.time.end}
          />
        ))}
      </Grid>
    </Board>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PageBoard;

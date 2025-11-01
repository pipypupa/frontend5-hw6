import { Event } from "./Event";
import { Title } from "./PageBoard.styled";
import { List } from "./Event.styled";
import PropTypes, { } from "prop-types";
export const PageBoard = ({ title, events }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      <List>
        {events.map((event, index) => {
          return (
            <Event
              key={index}
              name={event.name}
              location={event.location}
              speaker={event.speaker}
              type={event.type}
              start={event.time.start}
              end={event.time.end}
            />
          );
        })}
      </List>
    </section>
  );
};

PageBoard.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

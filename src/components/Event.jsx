import { Item, Subtitle, Parag, Wrapper, Row } from "./Event.styled"
import { BsGeoAltFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { TbClockHour8 } from "react-icons/tb";
import PropTypes from "prop-types";

export const Event = ({ name, location, speaker, type, start, end }) => {
    return (
        <Item>
            <Subtitle>{name}</Subtitle>
            <Wrapper>
                <Row><BsGeoAltFill display="inline" size="20px"/><Parag as="p">{location}</Parag></Row>
                <Row><IoPerson size="20px"/><Parag as="p">{speaker}</Parag></Row>
                <Row><MdNewspaper size="20px"/><Parag as="p">{type}</Parag></Row>
                <Row><TbClockHour8 size="20px"/><Parag as="p">Start:{start}</Parag></Row>
                <Parag as="p">End: {end}</Parag>
            </Wrapper>
        </Item>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}
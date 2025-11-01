import styled from "styled-components";

export const List = styled.ul`
  background-color: pink;
  border: 2px solid #2c6eaf;
  border-radius: 8px;
  padding: 15px;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Item = styled.li`
  background-color: #fff1e6;
  width: 500px;
  height: 250px;
  border-radius: 15px;
  padding: 15px 10px;
  border: 2px solid orange;
`;

export const Subtitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 27px;
`;

export const Parag = styled(Subtitle)`
  font-weight: 100;
  font-size: 20px;
  margin-top: 13px;
  margin-bottom: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

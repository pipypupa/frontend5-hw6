import styled from "styled-components";

export const Board = styled.section`
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  max-width: 1100px; /* Центрований контейнер */
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  background: #d9e8ff;
  padding: 12px;
  border-radius: 8px;
  color: #1a3e72;
  margin-bottom: 25px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три картки в ряд */
  grid-template-rows: repeat(2, auto); /* Два рядки */
  justify-items: center;
  align-items: start;
  gap: 25px; /* Відступи між картками */
`;

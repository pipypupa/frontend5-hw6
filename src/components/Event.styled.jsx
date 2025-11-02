import styled from "styled-components";

export const Card = styled.div`
  background: #fff7f2;
  border: 1px solid #f1c4a8;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin: 0 0 12px 0;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    margin: 6px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: #d66a2e;
  }
`;

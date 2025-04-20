import styled from "styled-components";

const ButtonContainer = ({ className, children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export const Button = styled(ButtonContainer)`
  display: inline-block;
  width: fit-content;
  margin: 0 auto;
  padding: 8px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 0 #000;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000;
    color: #fff;
    box-shadow: none;
    cursor: pointer;
  }
`;

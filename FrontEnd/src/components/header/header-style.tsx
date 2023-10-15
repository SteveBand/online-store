import styled from "styled-components";

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  width: 95%;
  padding: 2px 10px;
  background-color: var(--white);
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;

  .icon {
    padding: 5px;
    border-radius: 50%;
    background-color: var(--lightGray);
    color: var(--darkGray);
    font-size: 1.5rem;
    cursor: pointer;
    transition: 200ms ease;

    &:hover {
      scale: 1.05;
    }
  }
`;

import styled from "styled-components";

export const RightSectionWrapper = styled.div<{ $activeSearch: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  .currency {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: 200ms ease;

    &:hover {
      scale: 1.05;
    }
  }

  a {
    color: black;
    letter-spacing: 1px;
    text-decoration: none;
    background-color: var(--lightGray);
    padding: 2px 10px;
    font-weight: 900;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: 786px) {
    a {
      display: ${(prop) => (prop.$activeSearch ? "none" : "block")};
    }

    .currency,
    .bell {
      display: none;
    }
  }
`;

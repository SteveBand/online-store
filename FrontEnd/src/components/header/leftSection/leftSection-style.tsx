import styled from "styled-components";

export const LeftSectionWrapper = styled.div<{ $activeSearch: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;

  .search-input {
    background-color: var(--lightGray);
    border-radius: 20px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    input {
      background-color: transparent;
      outline: none;
      border: none;
      font-size: 0.95rem;
      height: inherit;
      width: ${(prop) => (prop.$activeSearch ? "300px" : "120px")};
      transition: 300ms ease;
    }

    .search-icon {
      color: var(--purple);
      font-size: 1.25rem;
      cursor: pointer;
      display: ${(prop) => (prop.$activeSearch ? "block" : "none")};
    }
  }

  @media screen and (max-width: 786px) {
    .search-input {
      input {
        width: ${(prop) => (prop.$activeSearch ? "200px" : "100px")};
      }
    }
  }
`;

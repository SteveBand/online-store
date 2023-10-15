import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  flex: 1;
  background-color: var(--white);
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;

  ul.upper {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    margin-top: 30px;
    gap: 10px;
    li {
      width: 80%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 2px 10px;
      border-radius: 5px;
      cursor: pointer;
      letter-spacing: 1px;
    }

    li.active {
      background-color: var(--purple);
      color: var(--white);
    }
  }

  ul.bottom {
    flex: 0.2;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    li {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: 1px;
      cursor: pointer;
    }

    li.logout {
      color: #da0a0a;
    }
  }

  @media screen and (max-width: 786px) {
    ul.upper {
      gap: 20px;
      li {
        width: 50%;
        display: flex;
        justify-content: center;
        .icon {
          font-size: 24px;
        }
      }
    }

    ul.bottom {
      gap: 20px;
      li {
        justify-content: center;
        .icon {
          font-size: 24px;
        }
      }
    }
    span {
      display: none;
    }
  }
`;

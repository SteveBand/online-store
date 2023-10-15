import { FiBell, FiMessageSquare } from "react-icons/fi";
import { RightSectionWrapper } from "./rightSection-style";
import { Link } from "react-router-dom";

export const RightSection: React.FC<Props> = ({ activeSearch }) => {
  return (
    <RightSectionWrapper $activeSearch={activeSearch}>
      <div
        className="currency"
        style={{ backgroundImage: `url(./images/israel.png)` }}
      ></div>

      <FiBell className="icon bell" />
      <Link to={"/login"}>Login</Link>
    </RightSectionWrapper>
  );
};

interface Props {
  activeSearch: boolean;
}

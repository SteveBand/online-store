import { HeaderWrapper } from "./header-style";
import { LeftSection } from "./leftSection/LeftSection";
import { RightSection } from "./rightSection/RightSection";
import { useState } from "react";

export const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <HeaderWrapper>
      <LeftSection
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
      />
      <RightSection activeSearch={activeSearch} />
    </HeaderWrapper>
  );
};

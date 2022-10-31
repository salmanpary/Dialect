import React from "react";
import { useMediaQuery } from "usehooks-ts";
import CourseLaptopPage from "./CourseLaptopPage";
import CourseMobilePage from "./CourseMobilePage";
const CoursePage = () => {
  const matches = useMediaQuery("(max-width: 1110px)");
  const [component, setcomponent] = React.useState(null);
  React.useEffect(() => {
    if (matches) {
      setcomponent(<CourseMobilePage />);
    } else {
      setcomponent(<CourseLaptopPage />);
    }
  }, [matches]);
  return <>{component}</>;
};

export default CoursePage;

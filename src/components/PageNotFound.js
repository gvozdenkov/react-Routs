import React from "react";
import { useHistory } from "react-router-dom";
import SvgButton from "./nav2/SvgButton";

function PageNotFound() {
  const history = useHistory();
  return (
    <div>
      <h3>404 Page Not Found</h3>
      <p>Uh oh! There's nothing here... Sorry. 🥺</p>
      <SvgButton rotation={180} onClick={() => history.goBack()} />
    </div>
  );
}

export default PageNotFound;

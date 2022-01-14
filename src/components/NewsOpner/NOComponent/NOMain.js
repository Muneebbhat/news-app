import React from "react";
import NOMDescription from "./NOMainComponents/NOMDescription";
import NOMHeaderComponent from "./NOMainComponents/NOMHeaderComponent";
import NOMThumbnail from "./NOMainComponents/NOMThumbnail";

const NOpenerMain = () => {
  return (
    <div className="col-lg-9 col-md-9 col-mod-single col-mod-main">
      <NOMHeaderComponent/>
      <NOMThumbnail/>
      <NOMDescription/>
    </div>
  );
};

export default NOpenerMain;

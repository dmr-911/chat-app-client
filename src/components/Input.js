import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Write something" />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />

        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <img src={Img} alt="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;

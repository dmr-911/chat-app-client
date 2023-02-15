import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;

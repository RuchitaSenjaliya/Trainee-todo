import "./Services.css";

import OneService from "./OneService";

export default function Services() {
  return (
    <div className="services">
      <div className="home-dark">
        <div className="content">
          <div className="title">List of ToDos</div>
          <div className="container">
            <OneService />
            <OneService />
            <OneService />
            <OneService />
          </div>
        </div>
      </div>
    </div>
  );
}

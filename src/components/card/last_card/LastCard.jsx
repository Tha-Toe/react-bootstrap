import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./lastCard.css";
export default function LastCard() {
  return (
    <div className="card bg-white border-0 rounded-4">
      <div className="text-dark mt-4 ms-4">
        <div className="fw-bold">Activities</div>
        <div className="text-secondary latest_text">890,344 Sales</div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">08:42</div>
          <div className="circle_1"></div>
          <div className="text-secondary latest_text">
            Outlines keep you honest. And keep structure
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">10:00</div>
          <div className="circle_blue"></div>
          <div className="text-secondary latest_text">AEOL meeting</div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">10:47</div>
          <div className="cirlce_red"></div>
          <div className="text-secondary latest_text">
            Make deposit <span className="text-primary">USD 700</span>. to ESL
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">16:50</div>
          <div className="circle_blue"></div>
          <div className="text-secondary latest_text">
            Indulging in poorly driving and keep structure keep great
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">21:03</div>
          <div className="cirlce_red"></div>
          <div className="text-secondary latest_text">
            New order placed .<span className="text-primary">#XF-2356</span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">16:50</div>
          <div className="circle_blue"></div>
          <div className="text-secondary latest_text">
            Indulging in poorly driving and keep structure keep great
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">21:03</div>
          <div className="cirlce_red"></div>
          <div className="text-secondary latest_text">
            New order placed .<span className="text-primary">#XF-2356</span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-start activities_list_container mt-4">
          <div className="fw-bold">16:50</div>
          <div className="circle_blue"></div>
          <div className="text-secondary latest_text">
            Indulging in poorly driving and keep structure keep great
          </div>
        </div>
      </div>
    </div>
  );
}

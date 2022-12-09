import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./middleCard.css";
export default function MiddleCard() {
  return (
    <div className="card bg-white border-0 rounded-4">
      <div className="text-dark mt-4 ms-4">
        <div className="fw-bold">Trends</div>
        <div className="text-secondary latest_text">Latest trends</div>
      </div>
      <img src="/success.jpeg" className="success_img" />
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row justify-content-between align-items-center list_container mt-4">
          <div className="d-flex flex-row align-items-center">
            <img src="/list.jpeg" alt="" className="list_img" />
            <div className="d-flex flex-column align-items-start ms-2">
              <div className="fw-bold">Top Authors</div>
              <div className="text-secondary latest_text">
                Ricky Hunt, Sandra Trepp
              </div>
            </div>
          </div>
          <div className="text-secondary latest_text">+82$</div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center list_container mt-4">
          <div className="d-flex flex-row align-items-center">
            <img src="/list.jpeg" alt="" className="list_img" />
            <div className="d-flex flex-column align-items-start ms-2">
              <div className="fw-bold">Top Sales</div>
              <div className="text-secondary latest_text">PitStop Emails</div>
            </div>
          </div>
          <div className="text-secondary latest_text">+82$</div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center list_container mt-4 mb-4">
          <div className="d-flex flex-row align-items-center">
            <img src="/list.jpeg" alt="" className="list_img" />
            <div className="d-flex flex-column align-items-start ms-2">
              <div className="fw-bold">Top Engagement</div>
              <div className="text-secondary latest_text">KT.com</div>
            </div>
          </div>
          <div className="text-secondary latest_text">+82$</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Home.css'; // Make sure to create this CSS file to include the styles

export default function Home() {
  return (
    <section className="home-section">
      <div className="container py-5 py-lg-0 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-extrabold text-shadow">
            Managing Your Apartments Made Easy
            <strong className="d-block text-primary fw-extrabold"> Apartment Management App </strong>
          </h1>
          <p className="mt-4 fs-4 text-shadow">
            Welcome to the ultimate solution for apartment management. Our app helps landlords, property managers, and tenants streamline apartment management tasks. From tracking maintenance requests to managing tenant information and payments, we've got you covered!
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-4">
            <a
              className="btn btn-primary text-white px-4 py-2 shadow-sm"
              href="/dashboard"
            >
              Get Started
            </a>
            <a
              className="btn btn-secondary text-white px-4 py-2 shadow-sm"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="blog-section mt-5">
          <h2 className="display-5 fw-extrabold text-shadow text-center">User Reviews</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card m-3">
              <img src="https://www.shutterstock.com/shutterstock/photos/1659053650/display_1500/stock-vector--ustomer-satisfaction-icon-reputation-stars-line-icon-with-thumb-up-quality-review-with-1659053650.jpg" className="card-img-top" alt="Reviewer" />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">"This app has completely transformed how I manage my properties. Highly recommended!"</p>
              </div>
            </div>
            <div className="card m-3">
              <img src="https://www.shutterstock.com/shutterstock/photos/1659053650/display_1500/stock-vector--ustomer-satisfaction-icon-reputation-stars-line-icon-with-thumb-up-quality-review-with-1659053650.jpg" className="card-img-top" alt="Reviewer" />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">"A must-have tool for any landlord or property manager. It's user-friendly and efficient."</p>
              </div>
            </div>
            <div className="card m-3">
              <img src="https://www.shutterstock.com/shutterstock/photos/1659053650/display_1500/stock-vector--ustomer-satisfaction-icon-reputation-stars-line-icon-with-thumb-up-quality-review-with-1659053650.jpg" className="card-img-top" alt="Reviewer" />
              <div className="card-body">
                <h5 className="card-title">Alice Johnson</h5>
                <p className="card-text">"Fantastic app! It makes tenant management so much easier."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section text-center" id="contact">
          <h2 className="display-5 fw-extrabold text-shadow">Contact Us</h2>
          <p className="fs-5 text-shadow">
            Have any questions or need assistance? Get in touch with us!
          </p>
          <div className="mt-4 d-flex flex-column align-items-center">
            <p className="text-shadow">
              <strong>Email:</strong> support@apartmentapp.com
            </p>
            <p className="text-shadow">
              <strong>Phone:</strong> +254 717 370 359
            </p>
            <p className="text-shadow">
              <strong>Address:</strong> 4th Street, Githurai, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
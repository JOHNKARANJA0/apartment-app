import React, { useContext, useEffect, useState } from 'react'


export default function Home() 
{
    return (
        <section className="bg-light">
          <div className="container py-5 py-lg-0 min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1 className="display-4 fw-extrabold">
                Understand User Flow.
                <strong className="d-block text-danger fw-extrabold"> Task Manager. </strong>
              </h1>
              <p className="mt-4 fs-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
              </p>
              <div className="mt-4 d-flex flex-wrap justify-content-center gap-4">
                <a
                  className="btn btn-danger text-white px-4 py-2 shadow-sm hover:bg-danger focus:outline-none focus:ring active:bg-danger"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="btn btn-outline-danger text-danger px-4 py-2 shadow-sm hover-text-danger focus:outline-none focus:ring active:text-danger"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}   
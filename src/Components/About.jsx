import React from "react";
import img1 from '../assets/images/office1.jpg';
import img2 from '../assets/images/office2.jpg';

function About() {
    return (
        <section className="py-5" id="about">
            <div className="container">
                <div className="row align-items-center">

                    {/* About text */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2>About Manu Philip & Company</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Founded in 2022, Manu Philip & Company was born out of a vision to provide accessible, reliable, and high-quality financial services to businesses across industries. What started as a small firm with a big commitment to excellence has quickly grown into a trusted name in the field of Chartered Accountancy.

                            Backed by a team of dedicated professionals, we offer a full spectrum of services including audit & assurance, taxation, compliance, business projections, and outsourcing. Our approach is grounded in transparency, client-centric thinking, and up-to-date expertise with evolving regulatory landscapes.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Whether you're a startup or an established enterprise, we tailor our solutions to your business goals, helping you make confident financial decisions and stay compliant every step of the way.

                            At Manu Philip & Company, we believe in long-term partnerships built on trust, professionalism, and results.
                        </p>
                    </div>

                    {/* About images */}
                    <div className="col-md-6">
                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                            <img
                                src={img1}
                                alt="Office 1"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: "48%", height: "auto" }}
                                
                            />
                            <img
                                src={img2}
                                alt="Office 2"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: "48%", height: "auto" }}
                                
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;

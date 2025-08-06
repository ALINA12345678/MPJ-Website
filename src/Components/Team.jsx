import React from "react";
import team1 from "../assets/images/Manu.jpg";
import team2 from "../assets/images/Bisna.jpg";
import team3 from "../assets/images/Fasna.jpg";
import team4 from "../assets/images/Safana.jpg";

function Team() {
    return (
        <section className="py-5 bg-light" id="team">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Meet Our Team</h2>
                    <p>Experienced professionals who drive Manu Philip & Company’s success.</p>
                </div>
                <div className="row justify-content-center align-items-stretch">
                    {/* Image Column */}
                    <div className="col-md-4 mb-4 d-flex">
                        <div className="card shadow border-0 w-100">
                            <img src={team1} className="card-img-top" alt="Team member 1" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Manu Philip</h5>
                                <p className="card-text">Founder & Chartered Accountant</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 mb-4 d-flex align-items-stretch">
                        <div className="card shadow border-0 w-100">
                            <div className="card-body text-start d-flex flex-column justify-content-center">
                                <h4 className="mb-2">About the Founder</h4>
                                <blockquote className="blockquote mb-3" style={{ fontSize: "1rem" }}>
                                    <p className="mb-0">"Excellence isn’t a skill — it’s an attitude."</p>
                                </blockquote>
                                <p style={{ textAlign: "justify" }}>
                                    <strong>Manu Philip Joseph</strong> is a Chartered Accountant based in Kochi, Kerala with over 7 years of experience in the field of accounting, auditing, and financial advisory. He holds a B.Com degree and has completed the Certificate Course on Public Finance & Government Accounting from ICAI. He also holds the DISA (Diploma in Information Systems Audit) qualification.
                                </p>
                                <p style={{ textAlign: "justify" }}>
                                    He passed the Chartered Accountancy exam in 2021 and currently leads his own firm, offering a range of professional services with a focus on audit, taxation, and compliance.
                                </p>
                                <p style={{ textAlign: "justify" }}>
                                    Beyond numbers, he is an active Toastmaster, refining his public speaking and leadership skills.
                                </p>



                            </div>
                        </div>
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <img
                                src={team2}
                                className="card-img-top"
                                alt="Team member 2"
                                style={{
                                    width: '100%',
                                    height: '280px',
                                    objectFit: 'cover'
                                }}
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">Bisna M B</h5>
                                <p className="card-text">Trainee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <img
                                src={team3}
                                className="card-img-top"
                                alt="Team member 3"
                                style={{
                                    width: '100%',
                                    height: '280px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fasnamol K</h5>
                                <p className="card-text">Trainee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <img
                                src={team4}
                                className="card-img-top"
                                alt="Team member 4"
                                style={{
                                    width: '100%',
                                    height: '280px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fathima Safana P.C</h5>
                                <p className="card-text">Trainee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

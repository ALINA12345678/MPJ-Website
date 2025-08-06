import React from "react";

function Services() {
    return (
        <section className="py-5 bg-light" id="services">
            <div className="container">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">

                    {/* Audit & Assurance */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Audit & Assurance</h5>
                                <p className="card-text text-justify">
                                    We deliver independent audit and assurance services to build
                                    trust and transparency, ensuring your financial statements are
                                    accurate and compliant.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Taxation */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Taxation</h5>
                                <p className="card-text text-justify">
                                    Our team offers expert tax advisory, planning, and compliance
                                    support to optimize your tax position while meeting all
                                    statutory obligations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Business Projections */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Business Projections</h5>
                                <p className="card-text text-justify">
                                    We help you build robust business projections and financial
                                    models to support strategic decision-making and secure
                                    funding or growth initiatives.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outsourcing */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Outsourcing</h5>
                                <p className="card-text text-justify">
                                    Streamline your operations by outsourcing bookkeeping,
                                    payroll, and accounting processes to our trusted team,
                                    enabling you to focus on core activities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Compliance */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Compliance</h5>
                                <p className="card-text text-justify">
                                    Stay compliant with changing regulations through our
                                    end-to-end compliance services, covering statutory filings,
                                    corporate governance, and reporting.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Business Incorporation */}
                    <div className="col-md-4 mb-4">
                        <div className="card service-card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Business Incorporation</h5>
                                <p className="card-text text-justify">
                                    We help you kickstart your business with expert support for company registration,
                                    legal documentation, and startup compliance – tailored for entrepreneurs and startups.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;

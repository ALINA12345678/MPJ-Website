import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("movlkrlg"); // Use your own Formspree form ID

    return (
        <section id="contact" className="py-5" style={{ backgroundColor: '#FFF' }}>
            <div className="container">
                <h2 className="text-center mb-4">Get in Touch</h2>
                <p className="text-center mb-5">
                    We'd love to hear from you. Whether you have a question, a project idea, or just want to say hi — reach out!
                </p>

                <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6">
                        {state.succeeded ? (
                            <p className="text-success">Thank you! Your message has been sent successfully.</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" id="name" name="name" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" name="message" rows="5" className="form-control" required></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="btn btn-success btn-lg custom-contact-btn"
                                    style={{
                                        backgroundColor: '#3A5A40',
                                        borderColor: '#3A5A40',
                                        color: '#ffffff',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 10px rgba(58, 90, 64, 0.3)',
                                        padding: '12px 28px',
                                        letterSpacing: '0.5px',
                                        fontWeight: '500',
                                        fontSize: '1.1rem',
                                        borderRadius: '8px',
                                        cursor: state.submitting ? 'not-allowed' : 'pointer',
                                        opacity: state.submitting ? 0.7 : 1
                                    }}
                                    onMouseOver={(e) => {
                                        if (!state.submitting) {
                                            e.target.style.backgroundColor = '#588157';
                                            e.target.style.borderColor = '#588157';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        if (!state.submitting) {
                                            e.target.style.backgroundColor = '#3A5A40';
                                            e.target.style.borderColor = '#3A5A40';
                                        }
                                    }}
                                >
                                    {state.submitting ? "Sending..." : "Send"}
                                </button>

                            </form>
                        )}
                    </div>

                    {/* Contact Details */}
                    <div className="col-md-6">
                        <div className="ps-md-4 mt-5 mt-md-0">
                            <h5>Contact Information</h5>
                            <p><strong>Email:</strong> mp@camanuphilip.com</p>
                            <p><strong>Phone:</strong> +91 77363 79414</p>
                            <p><strong>Address:</strong> Chammany Ark, 64/2312 E, St Francis Xavier's Church Rd, Kathrikadavu, Kaloor, Kochi, Ernakulam, Kerala 682017</p>

                            <div className="mt-4">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3645200488436!2d76.29469527503096!3d9.986717690118008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873f9132412b9%3A0xbc0e368497a7eb30!2sManu%20Philip%20%26%20Company%2C%20Chartered%20Accountants!5e0!3m2!1sbn!2sin!4v1754459061872!5m2!1sbn!2sin"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

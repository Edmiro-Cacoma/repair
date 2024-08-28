import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <div className="map-container">
                <iframe
                    title="Luanda Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63548.41751597287!2d13.1813338!3d-8.8399876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b0484b611d%3A0xa07530b79a8ef0d5!2sLuanda%2C%20Angola!5e0!3m2!1sen!2s!4v1618584774569!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="form-container">
                <h2>Contacte-nos</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Telefone</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Assunto</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import { useState, useEffect } from 'react';

export default function DisclaimerModal() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // check if previously agreed
    const agreed = localStorage.getItem('disclaimerAgreed');
    if (agreed) {
      setShowModal(false);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '600px',
          textAlign: 'center',
        }}
      >
        <h2>Acknowledgement & Disclaimer</h2>
        <p style={{ textAlign: 'justify' }}>
          By proceeding further and clicking on the "I AGREE" button below, I acknowledge that I of my own accord wish to know more about Manu Philip & Company for my own information and use. I further acknowledge that there has been no solicitation, invitation or inducement of any sort whatsoever from Manu Philip & Company or any of its members.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Manu Philip & Company is regulated by the Institute of Chartered Accountants of India ('ICAI') and this website has been developed by adhering to the guidelines prescribed by it. While every attempt has been made to comply with these guidelines in letter and in spirit, inadvertent non-compliances may have occurred. We would be deeply obliged if you were to bring such non-compliances, if any, to our notice by contacting us at <strong>mp@camanuphilip.com</strong>.
        </p>
        <button onClick={handleAgree}>I AGREE</button>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = () => {
    if (name && email) { //
      setSubmitted(true);
      setMessage(`Thank you, ${name}! We'll contact you at ${email}`); //
    }
  };
//
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setSelectedOption('');
  };
//
  return (
    <div style={{  minHeight: '100vh', backgroundColor: '#f9fafb', padding: '32px 16px' }}>
      <div style={{  maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{  textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{  fontSize: '36px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }} data-cy="main-heading">
             Cypress Test Sample Page
          </h1>
          <p style={{  color: '#6b7280', fontSize: '16px' }} data-cy="subtitle">
             A demo page with various elements for testing
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Contact Form */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }} data-cy="form-title">
              Contact Form
            </h2>
            
            {!submitted ? (
              <div data-cy="contact-form">
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    data-cy="name-input"
                    value={name}
                    onChange={(e) =>  setName(e.target.value)}
                    style={{ width: '100%',  padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
                    placeholder="Enter your name"
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    data-cy="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="option" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Select Option
                  </label>
                  <select
                    id="option"
                    data-cy="option-select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{ width: '100%',  padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
                  >
                    <option value=""> Choose an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <button
                  onClick={handleSubmit}
                  data-cy="submit-button"
                  style={{ width: '100%',  backgroundColor: '#2563eb', color: 'white', padding: '10px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div data-cy="success-message">
                <div style={{ backgroundColor: '#dcfce7',  border: '1px solid #86efac', color: '#166534', padding: '12px 16px', borderRadius: '6px', marginBottom: '16px' }}>
                  {message}
                </div>
                <button
                  onClick={resetForm}
                  data-cy="reset-button"
                  style={{ width: '100%',  backgroundColor: '#6b7280', color: 'white', padding: '10px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                >
                  Reset Form
                </button>
              </div>
            )}
          </div>

          {/* Interactive Elements */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '24px',  fontWeight: '600', marginBottom: '16px' }} data-cy="interactive-title">
               Interactive Elements
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Counter</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={() => setCount(count - 1)}
                  data-cy="decrement-button"
                  style={{ backgroundColor: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                  -
                </button>
                <span style={{ fontSize: '24px',  fontWeight: 'bold', minWidth: '40px', textAlign: 'center' }} data-cy="counter-value">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  data-cy="increment-button"
                  style={{ backgroundColor: '#22c55e', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                  +
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Toggle Visibility</h3>
              <button
                onClick={() => setIsVisible(!isVisible)}
                data-cy="toggle-button"
                style={{ backgroundColor: '#9333ea', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}
              >
                {isVisible ? 'Hide' : 'Show'} Content
              </button>
              {isVisible && (
                <div
                  data-cy="toggleable-content"
                  style={{ backgroundColor: '#f3e8ff',  padding: '16px', borderRadius: '6px', color: '#581c87' }}
                >
                  This content can be toggled on and off!
                </div>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>List Items</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} data-cy="item-list">
                <li data-cy="list-item-1" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></span>
                  First Item
                </li>
                <li data-cy="list-item-2" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></span>
                  Second Item
                </li>
                <li data-cy="list-item-3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></span>
                  Third Item
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginTop: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }} data-cy="links-title">
            Navigation Links
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a
              href="#home"
              data-cy="home-link"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              Home
            </a>
            <a
              href="#about"
              data-cy="about-link"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              About
            </a>
            <a
              href="#contact"
              data-cy="contact-link"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
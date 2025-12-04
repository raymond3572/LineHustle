import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function OrderForm({ product }) {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    notes: '',
    photo: null
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    // Setup EmailJS integration (requires your own EmailJS setup)
    // You must sign up at https://emailjs.com, create a service, email template, and get your user ID.
    // Then replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' below.
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('product', product?.name || '');
    formData.append('email', form.email);
    formData.append('notes', form.notes);
    formData.append('photo', form.photo);

    const emailParams = {
      to_name: form.name,
      from_email: form.email,
      message: form.notes,
      product: product?.name,
      // no attachment support in free tier; see EmailJS docs
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        emailParams,
        'YOUR_USER_ID'
      );
      setStatus('Order sent! You will be contacted soon.');
    } catch (error) {
      setStatus('Error sending order. Please try again.');
    }
  }

  return (
    <form className="orderForm" onSubmit={handleSubmit}>
      <label>
        Name: <input name="name" required value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email: <input name="email" required value={form.email} type="email" onChange={handleChange} />
      </label>
      <label>
        Notes / Description:<br/>
        <textarea name="notes" value={form.notes} onChange={handleChange} />
      </label>
      <label>
        Reference Photo:<br/>
        <input name="photo" type="file" accept="image/*" onChange={handleChange} />
      </label>
      <button type="submit">Place Order</button>
      <p>{status}</p>
      <p style={{marginTop:'1em',fontSize:'0.9em'}}>After submitting, your order info will be sent to raymond3572@gmail.com</p>
      <p style={{fontSize:'0.8em',color:'#999'}}>Note: You must set up EmailJS and enter your Service ID, Template ID, and User ID in the code. See src/components/OrderForm.js for setup instructions.</p>
    </form>
  );
}
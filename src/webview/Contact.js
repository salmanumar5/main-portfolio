import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center mx-4 mb-8 justify-center w-full'>
      <div className='w-full h-[500px] mb-8 p-8 transition-all duration-500'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28030.572470427614!2d77.25948389834329!3d28.575120582814147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce391b053aeef%3A0x3c66da6bc8fccdde!2sNew%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720722688360!5m2!1sen!2sin'
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title='map'
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='w-full max-w-3xl mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
        <form className='flex flex-col'>
          <label className='mb-2' htmlFor='name'>Name</label>
          <input className='mb-4 p-2 border border-gray-300 rounded w-full' type='text' id='name' name='name' />
          <label className='mb-2' htmlFor='email'>Email</label>
          <input className='mb-4 p-2 border border-gray-300 rounded w-full' type='email' id='email' name='email' />
          <label className='mb-2' htmlFor='message'>Message</label>
          <textarea className='mb-4 p-2 border border-gray-300 rounded w-full' id='message' name='message' rows='5'></textarea>
          <button className='p-2 bg-[#3e3e42] text-white rounded hover:bg-[#f5bc52] hover:text-black' type='submit'>Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;

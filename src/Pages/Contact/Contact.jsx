import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import ContactUs from "../../assets/Images/contactus.png";
import './contact.css';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  // State for input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler for form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can handle form submission, for example, sending data to a server
  //   console.log(formData);
  // };

  return (
    <div>
      <div className='bg-black min-h-[50rem] 2xl:min-h-screen'>
        <Header />
        <div className='bg-white mx-[22px] lg:mx-36 rounded-2xl my-10 min-h-[36rem] 2xl:min-h-[50rem] md:flex block'>
          {/* Form */}
          <div className='min-h-[25rem] w-full lg:w-[46%] mx-3 lg:my-5'>
            <div>
              <h1 className='text-3xl lg:text-5xl 2xl:text-7xl font-black mx-2 pt-4 lg:pt-1 lg:mt-6 2xl:mt-7'>Get In Touch 24x7</h1>
              <p className='mx-4 lg:mx-3 font-bold text-sm 2xl:text-lg 2xl:mt-10 mt-4 text-gray-600'>Our friendly team would love to hear from you.</p>
            </div>
            <div className='min-h-[16rem] 2xl:min-h-[25rem] mx-2 my-8 2xl:my-12'>
              <div className='flex gap-3 2xl:gap-4'>
                <div className='h-14 2xl:h-16 flex flex-col w-[45%]'>
                  <label htmlFor="firstName" className='text-xs 2xl:text-sm font-medium'>First Name</label>
                  <input id='firstName' name='firstName' value={formData.firstName} onChange={handleInputChange} className='placeholder:px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='First Name' />
                </div>
                <div className='h-14 2xl:h-16 flex flex-col w-[45%]'>
                  <label htmlFor="lastName" className='text-xs 2xl:text-sm font-medium'>Last Name</label>
                  <input id='lastName' name='lastName' value={formData.lastName} onChange={handleInputChange} className='placeholder:px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Last Name'/>
                </div>
              </div>
              <div className='my-3 2xl:my-6'>
                <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                  <label htmlFor="email" className='text-xs 2xl:text-sm font-medium'>Email</label>
                  <input id='email' name='email' value={formData.email} onChange={handleInputChange} className='placeholder:px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Email' />
                </div>
                <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                  <label htmlFor="phoneNumber" className='text-xs 2xl:text-sm font-medium'>Phone number</label>
                  <input id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} className='placeholder:px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="tel" placeholder='Phone number' />
                </div>
                <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-[92%]'>
                  <label htmlFor="message" className='text-xs 2xl:text-sm font-medium'>Message</label>
                  <input id='message' name='message' value={formData.message} onChange={handleInputChange} className='placeholder:px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Message' />
                </div>
              </div>
            </div>
            <div>
              <button  className='mx-2 bg-black rounded-full text-white text-center w-[88%] py-3 2xl:py-4 text-lg 2xl:text-2xl font-medium'>Send Message to Future</button>
            </div>
          </div>
          {/* Image */}
          <div className='min-h-[25rem] 2xl:min-h-[50rem] w-full lg:w-[54%] rounded-2xl flex items-center justify-center bg-white lg:bg-gray-200'>
            <div className='min-h-[20rem]'>
              <img className='object-cover w-full 2xl:h-[50rem]' src={ContactUs} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>


  );
}

export default Contact;

import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import ContactUs from "../../assets/Images/contactus.webp";
import './contact.css';
import Footer from '../../Components/Footer/Footer';
import Faq from '../../Components/faq/Faq';
import { faqData } from '../../Data/faqData';
import toast from 'react-hot-toast';
import { contactAPI } from '../../utils/APIservice';

const Contact = () => {
  // State for input fields
  const [reference, setReference] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    referredBy: '',
  });

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  // Validation function for email using regex
  function isValidEmail(inputEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData); //test

    if (!formData?.email?.trimEnd()?.length || !formData?.firstName?.trimEnd()?.length || !formData?.lastName?.trimEnd()?.length || !formData?.phoneNumber?.trimEnd()?.length || !formData?.referredBy?.trimEnd()?.length) {
      return toast.error("Please enter all fields");
    }

    if (formData?.message?.trimEnd()?.length < 10) {
      return toast.error("Please enter a message with at least 10 characters");
    }

    const emailCheck = isValidEmail(formData?.email?.trimEnd());
    if (!emailCheck) return toast.error("Please enter a valid email address");

    if (formData.referredBy === "Others") {
      if (!reference?.trimEnd()?.length) return toast.error("Please enter reference details");
    }

    try {
      toast.promise(
        contactAPI(
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            message: formData.message,
            referredBy: formData.referredBy === "Others" ? reference : formData.referredBy,
          }
        ),
        {
          loading: 'Submitting details...',
          success: <b>message sent successfully!</b>,
          error: <b>Unable to send message. Please try again later.</b>,
        }
      );
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(error?.message);
      return
    }
  };

  return (
    <div>
      <div className=''>
        <Header />
        <form onSubmit={handleSubmit} >
          <div className='bg-white mx-[22px] lg:mx-36 rounded-2xl my-10 md:flex block'>
            {/* Form */}
            <div className='min-h-[25rem] w-full lg:w-[46%] mx-3 lg:my-5 p-4 pb-10'>
              <div>
                <h1 className='text-3xl lg:text-5xl 2xl:text-7xl font-black mx-2 pt-4 lg:pt-1 lg:mt-6 2xl:mt-7'>Get In Touch 24x7</h1>
                <p className='mx-4 lg:mx-3 font-bold text-sm 2xl:text-lg 2xl:mt-10 mt-4 text-gray-600'>Our friendly team would love to hear from you.</p>
              </div>
              <div className='min-h-[16rem] 2xl:min-h-[25rem] mx-2 my-8 2xl:my-12'>
                <div className='flex gap-3 2xl:gap-4'>
                  <div className='h-14 2xl:h-16 flex flex-col w-[45%]'>
                    <label htmlFor="firstName" className='text-xs 2xl:text-sm font-medium'>First Name</label>
                    <input id='firstName' name='firstName' value={formData.firstName} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='First Name' />
                  </div>
                  <div className='h-14 2xl:h-16 flex flex-col w-[45%]'>
                    <label htmlFor="lastName" className='text-xs 2xl:text-sm font-medium'>Last Name</label>
                    <input id='lastName' name='lastName' value={formData.lastName} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Last Name' />
                  </div>
                </div>
                <div className='my-3 2xl:my-6'>
                  <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                    <label htmlFor="email" className='text-xs 2xl:text-sm font-medium'>Email</label>
                    <input id='email' name='email' value={formData.email} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Email' />
                  </div>
                  <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                    <label htmlFor="phoneNumber" className='text-xs 2xl:text-sm font-medium'>Phone number</label>
                    <input id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="tel" placeholder='Phone number' />
                  </div>
                  <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-[92%]'>
                    <label htmlFor="message" className='text-xs 2xl:text-sm font-medium'>Message</label>
                    <input id='message' name='message' value={formData.message} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Message' />
                  </div>
                  <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-[92%]'>
                    <label htmlFor="referredBy" className='text-xs 2xl:text-sm font-medium'>How did you hear about us?</label>
                    <select id='referredBy' name='referredBy' value={formData.referredBy} aria-valuenow={formData.referredBy} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Facebook, instagram, twitter'>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Discord">Discord</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  {formData.referredBy === "Others" &&
                    <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-[92%]'>
                      <label htmlFor="reference2" className='text-xs 2xl:text-sm font-medium'>Others, Please Specify</label>
                      <input id='reference2' name='reference2' value={reference} onChange={(e) => setReference(e.target.value)} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Referred by' />
                    </div>
                  }
                </div>
              </div>
              <div>
                <button type='submit' className='mx-2 bg-black rounded-full text-white text-center w-[88%] py-3 2xl:py-4 text-lg 2xl:text-2xl font-medium'>
                  Be a Part of the Future
                </button>
              </div>
            </div>
            {/* Image */}
            <div className='min-h-[25rem] 2xl:min-h-[50rem] w-full lg:w-[54%] rounded-2xl flex items-center justify-center bg-white lg:bg-gray-200'>
              <div className='min-h-[20rem]'>
                <img className='object-cover w-full 2xl:h-[50rem]' src={ContactUs} alt="" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <Faq {...faqData} />

      <Footer />
    </div>


  );
}

export default Contact;

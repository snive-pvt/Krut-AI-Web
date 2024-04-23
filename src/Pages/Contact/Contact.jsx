import React from 'react'
import Header from "../../Components/Header/Header"
import ContactUs from "../../assets/Images/contactus.png"
import './contact.css'


const Contact = () => {
  return (

    <div>
  
        <div  className='bg-black  min-h-[50rem] 2xl:min-h-screen'  >
        <Header></Header>
         
        <div className='bg-white  mx-36 rounded-2xl my-10 min-h-[36rem] 2xl:min-h-[50rem] flex'>
            {/* Form */}
            <div className=' min-h-[25rem]  w-[46%] mx-5  my-5'>
                <div className=''>
                <h1 className='text-5xl 2xl:text-7xl font-black mx-2 mt-6 2xl:mt-7'>Get In Touch 24x7</h1>
                <p className='mx-3 font-bold text-sm 2xl:text-lg 2xl:mt-10 mt-4 text-gray-600'>Our freindly team would love to hear from you.</p>
                </div>
                
                <div className=' min-h-[16rem] 2xl:min-h-[25rem] mx-2 my-8 2xl:my-12'>
                    
                     <div className='flex gap-3 2xl:gap-4'>
                        <div className='h-14 2xl:h-16  flex flex-col w-[45%] '>
                        <label htmlFor="firstname" className='text-xs 2xl:text-sm font-medium'>First Name</label>
                        <input id='firstname' className='2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='First Name' />
                        </div>
                        <div className='h-14 2xl:h-16 flex flex-col w-[45%]'>
                        <label htmlFor="firstname" className='text-xs 2xl:text-sm font-medium'>Last Name</label>
                        <input className='2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Last Name'/>
                        </div>
                        
                        
                     </div>

                     <div className='my-3 2xl:my-6'>
                        <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                                 <label htmlFor="email" className='text-xs 2xl:text-sm font-medium'>Email</label>
                        <input id='email' className='2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Email' />
                        </div>
                        <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-[92%]'>
                        <label htmlFor="phonenumber" className='text-xs 2xl:text-sm font-medium'>Phone number</label>
                        <input id='phonenumber' className='2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="tel" placeholder='Phone number' />
                        </div>
                        <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-[92%]'>
                        <label htmlFor="message" className='text-xs 2xl:text-sm font-medium'>Message</label>
                        <input id='message' className='2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Message' />
                        </div>
                     </div>

                </div>
                <div>
                <button className='mx-2 bg-black rounded-full text-white text-center w-[88%] py-3 2xl:py-4 text-lg 2xl:text-2xl font-medium'>Send Message to Future</button>
                </div>
               
            </div>
             


             {/* Image */}
            <div className=' min-h-[25rem] 2xl:min-h-[50rem] w-[54%] rounded-2xl flex items-center' style={{background:'#F2F2F2'}}>
              <div className='min-h-[20rem]'>
              <img src={ContactUs} alt="" style={{ width: '35em', height: '35em' }}/>
              </div>
                  
            </div>
            
        </div>  
        </div>
         



    </div>
  )
}

export default Contact
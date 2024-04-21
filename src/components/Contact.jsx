import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';



const Contact = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      district: '',
      message: ''
    }
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setShowSuccessMessage(true); 
  };

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, [showSuccessMessage]);

  return (
    <>
    
    <div className='md:pl-44 md:pr-44 pl-4 pr-4 pt-10'>
      <h3 className='md:text-5xl text-3xl pt-10 md:pt-24 pb-4 font-bold '>Get in touch with us </h3>
      <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
        <div className='md:grid md:grid-cols-2 md:gap-4 pt-4 '>
         
          <div>
            <label htmlFor="firstname" className='text-sm text-gray-800 font-semibold'>First Name</label>
            <div className='md:pt-2'>
              <Controller
                name="firstname"
                control={control}
                rules={{
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name must contain only letters"
                  }
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      name="firstname"
                      type='text'
                      placeholder='Enter First Name'
                      className='border-slate-900 border rounded-md md:w-full h-10 pl-2 w-full focus:outline-none focus:border-[#638889]'
                    />
                    {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>

         
          <div className='pt-4 md:pt-0'>
            <label htmlFor="lastname" className='text-sm text-gray-800 font-semibold'>Last Name</label>
            <div className='md:pt-2'>
              <Controller
                name="lastname"
                control={control}
                rules={{
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Last name must contain only letters"
                  }
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      name="lastname"
                      type='text'
                      placeholder='Enter Last Name'
                      className='border-slate-900 border rounded-md  md:w-full h-10 pl-2 w-full focus:outline-none focus:border-[#638889]'
                    />
                    {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className='pt-4 md:pt-0'>
          <label htmlFor="email" className='text-sm text-gray-800 font-semibold'>Email</label>
          <div className='md:pt-2'>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    name="email"
                    type='email'
                    placeholder='Enter Your Email Address'
                    className='border-slate-900 border rounded-md  md:w-full h-10 pl-2 w-full focus:outline-none focus:border-[#638889]'
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        
        <div className='pt-4 md:pt-0'>
          <label htmlFor="phoneNumber" className='text-sm text-gray-800 font-semibold'>Phone Number</label>
          <div className='md:pt-2'>
          <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone number is required",
                
                pattern: {
                  value: /^[0-9]{10}$/  ,
                  message: "Phone number must contain only 10 numbers"
                }
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    name="phoneNumber"
                    type='tel'
                    placeholder='Enter Your Phone Number'
                    className='border-slate-900 border rounded-md  md:w-full h-10 pl-2 w-full focus:outline-none focus:border-[#638889]'
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                </div>
              )}
            /> 
          </div>
        </div>

        
        <div className='pt-4'>
          <label htmlFor="district" className='text-sm text-gray-800 font-semibold w-full'>District</label>
          <div className='md:pt-2 md:pb-4'>
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    name='district'
                    className='border-slate-900 border rounded-md  w-full h-10 pl-2 focus:outline-none focus:border-[#638889]'
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <option value="">Select District</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Vavuniya">Vavuniya</option>
                    <option value="Mullithivu">Mullithivu</option>
                  </select>
                  {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        
        <div className='pt-4 md:pt-0'>
          <label htmlFor="message" className='text-sm text-gray-800 font-semibold'>Message</label>
          <div className='md:pt-2'>
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <div>
                  <textarea
                    {...field}
                    name="message"
                    placeholder='Enter Your Message'
                    className='border-slate-900 border rounded-md  w-full pl-2 pt-2 focus:outline-none focus:border-[#638889]'
                    rows={4}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        
        <div className='pt-4'>
          <button type="submit" className='text-center text-white bg-[#638889] w-full h-10 rounded-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:text-blackgit init
 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300'>Submit</button>
        </div>
      </form>

      
      {showSuccessMessage && (
        <div className="text-green-500 pt-4">
          Form submitted successfully!
        </div>
      )}
    </div>
    </>
  );
};

export default Contact;

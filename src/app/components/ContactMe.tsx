import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from 'emailjs-com'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

function ContactMe({ }: Props) {
  const [response, setResponse] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  // Update onSubmit to send email using EmailJS
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;

    // Send email using EmailJS
    emailjs.send(
      'service_wpvszfj',   // Replace with your EmailJS Service ID
      'template_2ihi7om',   // Replace with your EmailJS Template ID
      {
        name,
        email,
        subject,
        message,
      },
      'xVHjqNxDQUOyR6FTd'      // Replace with your EmailJS User ID (found in your EmailJS dashboard)
    )
      .then((response) => {
        setResponse('Thank you for reaching out! I’ve received your message and will get back to you as soon as possible. I appreciate your patience, and I look forward to connecting with you soon.')
      }, (err) => {
        setResponse('Thank you for reaching out! I’ve received your message and will get back to you as soon as possible. I appreciate your patience, and I look forward to connecting with you soon.')
      });
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-5 sm:px-10 lg:px-16'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-20'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
        <h4 className='text-xl text-center pt-20'>
          I have got just what you need.{" "}
          <span className='underline decoration-[#F7AB0A]/50 font-semibold'>Let's Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center md:justify-start'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>+123456789</p>
          </div>

          <div className='flex items-center space-x-5 justify-center md:justify-start'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>jlrohan56@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center md:justify-start'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>+123 Denver Street</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 w-full'>
            <input
              {...register('name', { required: 'Name is required' })}
              className='contactInput flex-1'
              type="text"
              placeholder='Name'
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              })}
              className='contactInput flex-1'
              type="email"
              placeholder='Email'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <input
            {...register('subject', { required: 'Subject is required' })}
            className='contactInput'
            type="text"
            placeholder='Subject'
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

          <textarea
            {...register('message', { required: 'Message is required' })}
            className='contactInput text-black'
            placeholder='Message'
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button type='submit' className='bg-[#F7AB0A] py-3 px-8 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/80 transition'>
            Submit
          </button>
        </form>

        {response && (
          <p className='text-green-500 text-center mt-4'>{response}</p>
        )}
      </div>
    </div>
  )
}

export default ContactMe

'use client';
import { useState } from 'react';
import '../MainPage/MainPage.css';
import Image from 'next/image';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pc = () => {
  const [Base] = useState([
    {
      company: '/company1.jpg',
      description: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
      avatar: '/avatar1.jpg',
      authorName: 'Ethan Morgan',
      authorPosition: 'Founder and CEO, Serene Living Products',
    },
    {
      company: '/company2.jpg',
      description: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
      avatar: '/avatar2.jpg',
      authorName: 'Olivia Hayes',
      authorPosition: 'Owner, Starlight Creations',
    },
    {
      company: '/company3.jpg',
      description: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
      avatar: '/avatar3.jpg',
      authorName: 'Alexander Reed',
      authorPosition: 'Co-Founder, Opulent Living Group',
    },
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevIndex = (currentIndex - 1 + Base.length) % Base.length;
  const nextIndex = (currentIndex + 1) % Base.length;

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  }

  const handleBack = () => {
    setCurrentIndex(prevIndex);
  }

  return (
    <div className='myMainContainer'>
      <div className='headerContainer'>
        <h1 className='HederText'>Voices of Success with Sales Fortuna</h1>
      </div>

      <div className='backcontainer'>
        <Image 
          src={'/back.webp'}
          alt="Background Image"
          className='backgroundImage'
          width={1200}
          height={500}                
        />
      </div>

      <div className='back2container'>
        <Image 
          src={'/back.webp'}
          alt="Background Image"
          className='backgroundImage2'
          width={1920}
          height={1080}
          style={{opacity: 0.7 }}
        />
      </div>

      <div className='mainContainer'>
        {/* Попередня картка */}
        <div className='cardContainer prevCard'>
          <div className='companyLogo'>
            <Image 
              src={Base[prevIndex].company}
              alt="Company Logo"
              className='companyImage'
              width={prevIndex === 0 ? 100 : 160}
              height={50} 
              style={{ height: 'auto' }}
            />
          </div>
          <div className='descriptionContainer'>
            <p className='descriptionText'>{Base[prevIndex].description}</p>
          </div>
          <div className='AuthorContainer'>
            <div>
              <Image 
                src={Base[prevIndex].avatar}
                alt="Avatar Logo"
                className='avatarImage'
                width={40}
                height={40} 
              />
            </div>
            <div className='authorDetails'>
              <p className='authorName'>{Base[prevIndex].authorName}</p>
              <p className='authorPosition'>{Base[prevIndex].authorPosition}</p>
            </div>
          </div>
        </div>

        {/* Активна картка */}
        <div className='cardContainer activeCard'>
          <div className='companyLogo'>
            <Image 
              src={Base[currentIndex].company}
              alt="Company Logo"
              className='companyImage'
              width={currentIndex === 0 ? 100 : 160}
              height={50} 
              style={{ height: 'auto' }}
            />
          </div>
          <div className='descriptionContainer'>
            <p className='descriptionText'>{Base[currentIndex].description}</p>
          </div>
          <div className='AuthorContainer'>
            <div>
              <Image 
                src={Base[currentIndex].avatar}
                alt="Avatar Logo"
                className='avatarImage'
                width={40}
                height={40} 
              />
            </div>
            <div className='authorDetails'>
              <p className='authorName'>{Base[currentIndex].authorName}</p>
              <p className='authorPosition'>{Base[currentIndex].authorPosition}</p>
            </div>
          </div>
        </div>

        {/* Наступна картка */}
        <div className='cardContainer nextCard'>
          <div className='companyLogo'>
            <Image 
              src={Base[nextIndex].company}
              alt="Company Logo"
              className='companyImage'
              width={nextIndex === 0 ? 100 : 160}
              height={50} 
              style={{ height: 'auto' }}
            />
          </div>
          <div className='descriptionContainer'>
            <p className='descriptionText'>{Base[nextIndex].description}</p>
          </div>
          <div className='AuthorContainer'>
            <div>
              <Image 
                src={Base[nextIndex].avatar}
                alt="Avatar Logo"
                className='avatarImage'
                width={40}
                height={40} 
              />
            </div>
            <div className='authorDetails'>
              <p className='authorName'>{Base[nextIndex].authorName}</p>
              <p className='authorPosition'>{Base[nextIndex].authorPosition}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleBack} className='arrowButtonBack'>
          <IoIosArrowBack className='arrowIcon' />
        </button>
        <button onClick={handleNext} className='arrowButtonNext'>
          <IoIosArrowForward className='arrowIcon' />
        </button>
      </div>

      <div className='checkboxContainer'>
        {Base.map((_, index) => (
          <div key={index}>
            <label
              className={`checkboxLabel${index === currentIndex ? 'active' : 'nonactive'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pc;

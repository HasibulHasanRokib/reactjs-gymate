
import './Home.css'

const Home = () => {
  return (
    <>
       <div id='home'>

        <section className='hero-section'>

        <div className="hero-text">
        <p className='font-semibold text-white mx-10 my-3 z-10'>FIND YOUR ENERGY</p>
        <img src="https://gymate-stefvndev.vercel.app/static/media/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="" className="absolute w-[18%]" />
           <h1 className='text-5xl text-white mb-10 font-bold'>MAKE YOUR BODY <p className='my-5 font-thin'>FIT & PERFECT</p></h1>
           <button className='class-btn'>OUR CLASSES <i className='fa-solid fa-arrow-right text-[#FF0336]'></i></button> 
        </div>
        <section className='flex flex-col justify-center items-center mr-10'>
        <div className='-rotate-90 my-10'>    
        <p className='font-bold text-white text-xl'>SHARE</p>
        </div>
        <p className='border-l-2 h-14 border-[#FF0336]'></p>
        <div className='flex flex-col-reverse my-5'>
        <i className="fa-brands fa-facebook text-white text-xl my-2"></i>
        <i className="fa-brands fa-twitter text-white text-xl my-2"></i>
        <i className="fa-brands fa-linkedin text-white text-xl "></i>
        </div>
        </section>

        </section>

         <section className='about-section'>
            <div className="about-card-section">
             <div className="about-card">
                <img src="/src/assets/download.png" alt="" />
                <div className="about-card-body">
                    <h3 className='text-center font-bold my-3 text-xl'>PROGRESSION</h3>
                    <p className='text-center'>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                </div>
             </div>
             <div className="about-card">
                <img src="/src/assets/download.png" alt="" />
                <div className="about-card-body">
                    <h3 className='text-center font-bold my-3 text-xl'>PROGRESSION</h3>
                    <p className='text-center'>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                </div>
             </div>
             <div className="about-card">
                <img src="/src/assets/download.png" alt="" />
                <div className="about-card-body">
                    <h3 className='text-center font-bold my-3 text-xl'>PROGRESSION</h3>
                    <p className='text-center'>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                </div>
             </div>
            </div>

            <div className="about-bottom-section">
                <div className="bottom-text-section">
                   <h5 className='font-bold z-10 ml-10 mt-3 text-white'>WHO WE ARE</h5> 
                   <img src="https://gymate-stefvndev.vercel.app/static/media/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="" className="absolute w-[18%]" />
                   <h2 className='font-bold text-4xl'>Take Your Health And Body To Next Level</h2>
                   <p className='font-lighter text-gray-500'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                   <div>
                    <div className="about-bottom-card-section flex">
                        <div className="bottom-card">
                            <img src="https://gymate-stefvndev.vercel.app/static/media/weightlifter.fdb39166bd9fd960aac2.png" alt="" />
                            <h2 className='font-bold text-center'>PROFESSIONAL TRAINERS</h2>
                        </div>
                        <div className="bottom-card">
                            <img src="https://gymate-stefvndev.vercel.app/static/media/weightlifter.fdb39166bd9fd960aac2.png" alt="" />
                            <h2 className='font-bold text-center'>PROFESSIONAL TRAINERS</h2>
                        </div>
                        <div className="bottom-card">
                            <img src="https://gymate-stefvndev.vercel.app/static/media/weightlifter.fdb39166bd9fd960aac2.png" alt="" />
                            <h2 className='font-bold text-center'>PROFESSIONAL TRAINERS</h2>
                        </div>
                    </div>
                   </div>
                   <a href="#" className='tour-btn'>TAKE A TOUR <i className='fa-solid fa-arrow-right text-white'></i> </a>
                </div>
                <div className="bottom-img-section flex items-center">
                <img src="/src/assets/girl-side-text.png" alt="" />
                 <img src="https://gymate-stefvndev.vercel.app/static/media/girl-run.2823e00263d26d8f8230.png" alt="" />
                </div>
            </div>
         </section>

         <section className='classes-section'>
         <div className="classes-text flex flex-col items-center gap-4">
         <p className='font-bold'>OUR FEATURED CLASS</p>
         <h2 className='font-bold text-3xl'>We Are Offering Best Flexible Classes</h2>
         </div>
         <div className="classes-card--section">
         {/* 1 */}
         <div className="classes-card--one relative">
            <div className="classes-img--one"></div>
            <div className="classes-card--body">
            <h3>Cycling</h3>
            <p>Wednesday: 9:00am-10.00am</p>
            </div>
         </div>
         {/* 2 */}
         <div className="classes-card--two relative">
            <div className="classes-img--two"></div>
            <div className="classes-card--body">
            <h3>Karate</h3>
            <p>Friday: 10:00am-11:00am</p>
            </div>
         </div>
         {/* 3 */}
         <div className="classes-card--three relative">
            <div className="classes-img--three"></div>
            <div className="classes-card--body">
            <h3>Power</h3>
            <p>Saturday: 9:00am-10:00am</p>
            </div>
         </div>
         {/* 4 */}
         <div className="classes-card--four relative">
            <div className="classes-img--four"></div>
            <div className="classes-card--body">
            <h3>Meditation</h3>
            <p>Sunday: 9:00am-10.00am</p>
            </div>
         </div>
         {/* 5 */}
         <div className="classes-card--five relative">
            <div className="classes-img--five"></div>
            <div className="classes-card--body">
            <h3>Martial Arts</h3>
            <p>Monday: 9:00am-10.00am</p>
            </div>
         </div>
         {/* 3 */}
         <div className="classes-card--six relative">
            <div className="classes-img--six"></div>
            <div className="classes-card--body">
            <h3>Workout</h3>
            <p>Tuesday: 9:00am-10.00am</p>
            </div>
         </div>


         </div>
         </section>

         <section className='featured'>  
        <div className='w-[60%] flex justify-center gap-4 items-center'>
        <span className='w-[30rem]'>
          <h2 className='text-3xl font-bold text-white'>We Are Always Providing Best Fitness Service For You</h2>
          </span>
          <button className='class-btn'>Join With Us<i className='fa-solid fa-arrow-right text-[#FF0336]'></i></button> 
        </div>

         </section>

         <section className='choose-section'>
         <div className="choose-body">
            <div className="choose-section--one relative">
                <img className='choose-img' src="/src/assets/main-img.png" alt="" />
               <span className='choose-img--two'></span>
            </div>
            <div className="choose-section--two">
             <div className="choose-text flex flex-col gap-3">
                <p className='font-bold text-white'>WHY CHOOSE US</p>
                <h3 className='text-3xl font-bold text-white'>We Can Give A Shape Of Your Body Here!</h3>
                <p className='text-slate-300'>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
             </div>
             <div className="choose-card--section">
             {/* 1 */}
                <div className="choose-card w-[13rem] flex gap-2">
                    <img className='bg-[#2b2b2b] hover:bg-red-500 cursor-pointer p-3 h-16 rounded-full ' src="/src/assets/choose (1).png" alt="" />
                    <h3 className='font-bold text-white text-lg'>Free Fitness Training</h3>
                </div>
             {/* 2 */}
                <div className="choose-card w-[13rem] flex gap-2">
                    <img className='bg-[#2b2b2b] hover:bg-red-500 cursor-pointer p-3 h-16 rounded-full ' src="/src/assets/choose (2).png" alt="" />
                    <h3 className='font-bold text-white text-lg'>Free Fitness Training</h3>
                </div>
             {/* 3 */}
                <div className="choose-card w-[13rem] flex gap-2">
                    <img className='bg-[#2b2b2b] hover:bg-red-500 cursor-pointer p-3 h-16 rounded-full ' src="/src/assets/choose (3).png" alt="" />
                    <h3 className='font-bold text-white text-lg'>Free Fitness Training</h3>
                </div>
             {/* 4 */}
                <div className="choose-card w-[13rem] flex gap-2">
                    <img className='bg-[#2b2b2b] hover:bg-red-500 cursor-pointer p-3 h-16 rounded-full ' src="/src/assets/choose (4).png" alt="" />
                    <h3 className='font-bold text-white text-lg'>Free Fitness Training</h3>
                </div>
             </div>
             <button className='class-btn my-[5rem] '>OUR CLASSES<i className='fa-solid fa-arrow-right text-[#FF0336] mx-0.5'></i></button> 
            </div>
            </div>
         </section>



       </div>


    </>
  )
}

export default Home

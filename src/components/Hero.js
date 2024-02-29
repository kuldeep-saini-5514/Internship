import React from 'react'

const Hero = () => {

    const TherapyOption = ({ title, imageUrl, altText }) => (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-1.5 py-5 w-full text-3xl font-semibold text-black whitespace-nowrap bg-white rounded-lg max-md:mt-6">
            <div className="justify-center px-8 py-7 max-md:px-5">{title}</div>
            <img 
              loading="lazy" 
              src={imageUrl}
              alt={altText} 
              className="self-end mt-48 mr-2.5 w-8 aspect-square max-md:mt-10" />
              
          </div>
        </div>
      );
      
      const therapyOptions = [
        {
          title: "Individual Therapy",
          imageUrl: "../../images/zummit.jpg",
          altText: "An icon representing individual therapy"
        },
        {
          title: "Group Therapy",
          imageUrl: "../../images/zummit.jpg",
          altText: "An icon representing group therapy"
        },
        {
          title: "Support Group",
          imageUrl: "../../images/zummit.jpg",
          altText: "An icon representing support group"
        }
      ];

  return (
    <div>
         <main className="flex justify-center items-center px-16 py-12 bg-sky-200 max-md:px-5">
      <div className="flex flex-col mt-8 w-full max-w-[1128px] max-md:max-w-full">
        <header className="text-5xl font-medium leading-10 text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Find Your Path to Mental Wellness with AroundWithin
        </header>
        <section className="mt-8 text-3xl font-medium leading-10 text-center text-zinc-800 max-md-w-full">
          Join a community of individuals committed to mental well-being and gain access to valuable resources and support
        </section>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            {therapyOptions.map(option => (
              <TherapyOption 
                key={option.title} 
                title={option.title} 
                imageUrl={option.imageUrl} 
                altText={option.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Hero
import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex  ">
      <div className="mx-auto max-w-xl text-center">
        <h1 className=" font-extrabold sm:text-5xl">
          Our digital products...
          <strong className="font-extrabold text-primary sm:block"> Let's get started. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/75 focus:outline-none focus:ring active:bg-primary sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary/75 focus:outline-none focus:ring active:text-primary sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
import React from 'react'

const App = () => {
  return (
    <>
    <section className='section_1 flex flex-row justify-between'>
      <div className="group_1">
        <h1 className="main_heading text-[3.8rem] mb-6 leading-[.9] text-[hsl(300,43%,22%)] font-bold">10,000+ of our users love our products.</h1>
      <p className="main_para font-medium  text-[17px] mt-1 leading-tight text-[hsl(303,10%,53%)]">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </div>
      <div className="group_2 mt-5 flex flex-col gap-5">
        <div className="banner_1 w-[360px] pl-5 pt-4 pb-4 pr-15 mr-20 rounded bg-[hsl(300,24%,96%)] flex flex-row gap-4">
          <div className="part_1 flex flex-row gap-2">
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
          </div>
          <div className="part_2">
            <h2 className="title font-bold text-[15px] leading-tight text-[hsl(300,43%,22%)]">Rated 5 Stars in Reviews</h2>
          </div>
        </div>
        <div className="banner_2 w-[350px] pl-5 pr-1 pt-4 pb-4 ml-8 rounded bg-[hsl(300,24%,96%)] flex flex-row gap-4">
          <div className="part_1 flex flex-row gap-2">
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
          </div>
          <div className="part_2">
            <h2 className="title font-bold text-[15px] leading-tight text-[hsl(300,43%,22%)]">Rated 5 Stars in Reviews</h2>
          </div>
        </div>
        <div className="banner_3 w-[350px] pl-5 pt-4 pb-4 ml-15 rounded bg-[hsl(300,24%,96%)] flex flex-row gap-4">
          <div className="part_1 flex flex-row gap-2">
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
            <img src="/images/icon-star.svg" alt="icon" className='w-4 h-4' />
          </div>
          <div className="part_2">
            <h2 className="title font-bold text-[15px] leading-tight text-[hsl(300,43%,22%)]">Rated 5 Stars in Reviews</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="section_2 mt-25 flex flex-row justify-between gap-7">
      <div className="box_1 w-[100%] h-[230px] bg-[hsl(300,43%,22%)] pl-6 pr-6 pt-8 pb-8 rounded-[.4rem]">
        <div className="profile flex flex-row gap-4">
          <div className="pic">
            <img src="/images/image-colton.jpg" alt="pic" className='w-10 h-10 rounded-full' />
          </div>
          <div className="info">
            <h1 className="head font-bold text-[15px] leading-tight text-[hsl(300,24%,96%)]">Colton Smith</h1>
            <h2 className="font-bold text-[15px] leading-tight text-[hsl(333,80%,67%)]">Verified Buyer</h2>
            </div>
          </div>
            <p className="para font-normal  text-[15px] mt-5 leading-[1.4] text-[hsl(300,24%,96%)]">"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
      </div>

      <div className="box_2 w-[100%] h-[230px] bg-[hsl(300,43%,22%)] mt-4 pl-6 pr-6 pt-8 pb-8 rounded-[.4rem]">
        <div className="profile flex flex-row gap-4">
          <div className="pic">
            <img src="/images/image-irene.jpg" alt="pic" className='w-10 h-10 rounded-full' />
          </div>
          <div className="info">
            <h1 className="head font-bold text-[15px] leading-tight text-[hsl(300,24%,96%)]">Irene Roberts</h1>
            <h2 className="font-bold text-[15px] leading-tight text-[hsl(333,80%,67%)]">Verified Buyer</h2>
            </div>
          </div>
            <p className="para font-normal  text-[15px] mt-5 leading-[1.4] text-[hsl(300,24%,96%)]">"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
      </div>

      <div className="box_3 w-[100%] h-[230px] bg-[hsl(300,43%,22%)] mt-8 pl-6 pr-6 pt-8 pb-8 rounded-[.4rem]">
        <div className="profile flex flex-row gap-4">
          <div className="pic">
            <img src="/images/image-anne.jpg" alt="pic" className='w-10 h-10 rounded-full' />
          </div>
          <div className="info">
            <h1 className="head font-bold text-[15px] leading-tight text-[hsl(300,24%,96%)]">Anne Wallace</h1>
            <h2 className="font-bold text-[15px] leading-tight text-[hsl(333,80%,67%)]">Verified Buyer</h2>
          </div>
          </div>
            <p className="para font-normal  text-[15px] mt-5 leading-[1.4] text-[hsl(300,24%,96%)]">"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
      </div>

    </section>
    </>
  )
}

export default App

import React from "react";

const serviceLists = [
    {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", image: "/images/home/services/icon1.png"},
    {id:1, title: "Fast delivery", des: "We deliver your order promptly to your door", image: "/images/home/services/icon2.png"},
    {id:1, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering ", image: "/images/home/services/icon3.png"},
    {id:1, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", image: "/images/home/services/icon4.png"},
]

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* This is text */}
        <div className="md:w-1/2">
          <div className="text-left w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h5 className="title">Our Culinary Journey And Services</h5>
            <blockquote className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </blockquote>

            <button className="btn bg-green text-white px-8 py-3 rounded-full">Explore</button>
          </div>
        </div>

        {/* This is image div */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-col-1 gap-8 items-center">
            {
                serviceLists.map((service)=>(
                    <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-300 hover:border">
                        <img src={service.image} alt="" className="mx-auto"/>
                        <h5 className="pt-3 font-semibold">{service.title}</h5>
                        <p className="text-[#90BD95]">{service.des}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

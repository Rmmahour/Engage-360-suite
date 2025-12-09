"use client"

import React from "react";
import Slider from "react-slick";


export default function TestimonialsSlider() {
    const stories = [
        {
            quote:
                "Want to write about all things, services are very fast and genuine. All the team members are very humble and kind. Anytime, anywhere, if we got any kind of issue on our dashboard (system), all the team doing support like 'one click solution'. Overall, feel very good...",
            name: "Nikhil Chavda",
            title: "IT Coordinator",
            company: "Bafit",
        },
        {
            quote:
                "We've been using Basiq360 for our dealer management and CRM needs, and the experience has been excellent. The platform is cloud-based, and packed with features that help streamline order management, sales tracking, and customer network oversight. Integration with accounting software like SAP Business One makes daily operations much smoother. Their support team is responsive and knowledgeable, and the system has helped us improve productivity and decision-making across the board. Highly recommend for any business looking to scale and simplify dealer operations.",
            name: "Ravi Surelia",
            title: "IT Head",
            company: "Kelvin Pipes",
        },
        {
            quote:
                "Its been 2 years working with them and we have a great experience!team is super great and they are offering a great support.",
            name: "Mudit Nanda",
            title: "Zonal Sales Head",
            company: "Bonus Locks",
        },
        {
            quote:
                "I had a great experience with Abacus Desk, The service provided by their team is also commendable, professional and helpful, i would definitely recommend Abacus Desk for Excellent Service.",
            name: "Vikas Sharma",
            title: "IT Manager",
            company: "Sirca",
        },
        {
            quote:
                "Abacus Desk offers a wide range of services across Customer Experience (CX), Sales Customer Relationship Management (CRM), Enterprise Software, Martech, and Advertising. Their solutions are tailored to enhance client relationships and streamline business processes, ensuring a seamless customer journey. In the area of Enterprise Software, they deliver robust and scalable applications that support operational efficiency and business growth.",
            name: "Ravish Ranjan",
            title: "General Manager",
            company: "Information Technology",
        },
        {
            quote:
                "We are extremely satisfied with the technical support provided by specially 'Mayank Harsh' and his team. Their expertise in DMS is exceptional they are highly knowledgeable, responsive, and consistently willing to assist with any issues we encounter.In addition to their technical capabilities, their professionalism and courteous behaviour have made every interaction seamless and positive. We truly value their dedication and consistent support.",
            name: "Harrison IT",
            title: "IT manager",
            company: "Harrison IT",
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-full max-w-[1200px] mx-auto">
            <Slider {...settings} className="h-[100%]">
                {stories.map((story, index) => (
                    <>
                        <div
                            key={`${story.name}-${index}`}
                            className="w-[98%] mx-auto rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 h-[100%]"
                        >
                            <p className="text-sm sm:text-base text-slate-800 mb-2">“{story.quote}”</p>
                            <p className="text-xs font-semibold text-slate-900">{story.name}</p>
                            <p className="text-[11px] text-slate-500">
                                {story.title}, {story.company}
                            </p>
                        </div>
                    </>
                ))}
            </Slider>
        </div>
    );
}
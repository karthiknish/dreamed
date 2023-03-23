const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      country: "UK",
      testimonial:
        "I went to the UK for my master's degree, and it was a life-changing experience. The quality of education, cultural exposure, and opportunities for personal growth were incredible. I would recommend studying in the UK to anyone looking to expand their horizons.",
      image:
        "https://media.istockphoto.com/id/1128932923/photo/confident-male-college-student-on-campus.jpg?s=612x612&w=0&k=20&c=oYkE9wnO_XZ8vphCh_MeVxNzsJLolTsa4yyKxS0za1I=",
    },
    {
      name: "Priya Charan",
      country: "USA",
      testimonial:
        "Studying in the USA was a dream come true for me. The professors were knowledgeable, and the campus facilities were top-notch. I had the opportunity to interact with students from diverse backgrounds, which helped me grow both personally and professionally.",
      image:
        "https://media.istockphoto.com/id/1043730632/photo/happy-young-indian-woman-with-mobile-phone-and-bag-by-isolated-white-background.jpg?s=612x612&w=0&k=20&c=ocLfEmfHvrG3V8zVh8taYbooLz1HG66v_YV1QcifLT0=",
    },
    {
      name: "Ravi Hariharan",
      country: "Australia",
      testimonial:
        "My master's degree in Australia was an unforgettable experience. The quality of education and the support from the faculty were exceptional. The diverse culture and beautiful landscapes made my time there truly memorable. I highly recommend studying in Australia.",
      image:
        "https://media.istockphoto.com/id/1250410774/photo/im-here-to-learn.jpg?s=612x612&w=0&k=20&c=GfSvH4mNgxdomrPHnat8VrqoPjtKzdtvkEmsAXjBq0I=",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-medium mb-8">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <img
                className="h-16 w-16 object-cover rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-500 mb-2">
                {testimonial.country}
              </p>
              <p className="text-gray-600 text-justify">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

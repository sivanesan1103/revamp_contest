

import BoxReveal from "@/components/magicui/box-reveal";




export const CourseCard = () => {
  const products = [
    {
      id: 1,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    {
      id: 2,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 3.0,
    },
    {
      id: 3,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    {
      id: 4,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    {
      id: 5,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 4.0,
    },
    {
      id:6,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    {
      id: 7,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    {
      id: 8,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "https://img.freepik.com/free-vector/modern-hosting-concept_23-2147972600.jpg",
      price: "$599",
      rating: 5.0,
    },
    // Add more products here
  ];

  return (
    <div className="mx-auto my-12 2xl:container">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={product.image}
                alt={product.title}
              />
            </a>
            
            <div className="px-5 pb-5">
            <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>

              <div>
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              </div></BoxReveal>
              
              <div className="flex items-center mt-2.5 mb-5">
              <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 ${
                        index < product.rating
                          ? "text-yellow-300"
                          : "text-gray-200 dark:text-gray-600"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                </BoxReveal>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
};

import { useState, useRef, useEffect } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("usa");
  const scrollContainerRef = useRef(null);
  const scrollInterval = 1000; // Change this value to adjust the scrolling interval (in milliseconds)
  const scrollDistance = 1000; // Change this value to adjust the scrolling distance (in pixels)

  const countries = {
    uk: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUt3YV4aMOfvUDXqdU6h6Wc_wNCh3Q8zpYLw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunL2bPN8_XasI88S1Cc4We_MP36uMZW2ydw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm0YNfPLzW3f4UFenqW1QD2LNgzcnQsZzxg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUt3YV4aMOfvUDXqdU6h6Wc_wNCh3Q8zpYLw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunL2bPN8_XasI88S1Cc4We_MP36uMZW2ydw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm0YNfPLzW3f4UFenqW1QD2LNgzcnQsZzxg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUt3YV4aMOfvUDXqdU6h6Wc_wNCh3Q8zpYLw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunL2bPN8_XasI88S1Cc4We_MP36uMZW2ydw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm0YNfPLzW3f4UFenqW1QD2LNgzcnQsZzxg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm0YNfPLzW3f4UFenqW1QD2LNgzcnQsZzxg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUt3YV4aMOfvUDXqdU6h6Wc_wNCh3Q8zpYLw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunL2bPN8_XasI88S1Cc4We_MP36uMZW2ydw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm0YNfPLzW3f4UFenqW1QD2LNgzcnQsZzxg&usqp=CAU",
    ],
    usa: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZsh6IYqmtXM5hXkdCw93GH2XDxyV3phSjg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDhX_9HalQrNy2YIeVvLeDXG_cVrMBx1saw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DVLa_lQMD3X2YXW8kUqgy4OHsRq7Zeunzg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZsh6IYqmtXM5hXkdCw93GH2XDxyV3phSjg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDhX_9HalQrNy2YIeVvLeDXG_cVrMBx1saw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DVLa_lQMD3X2YXW8kUqgy4OHsRq7Zeunzg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZsh6IYqmtXM5hXkdCw93GH2XDxyV3phSjg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDhX_9HalQrNy2YIeVvLeDXG_cVrMBx1saw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DVLa_lQMD3X2YXW8kUqgy4OHsRq7Zeunzg&usqp=CAU",
    ],
    canada: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtg1ilIPjR4JQzPCc_lkxloaFHnM3IqTWPA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Vi9mNwr2BR34EmnmDqZ2Cn56QMyBAH8AxQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptWSJnzoi9tO3LYaQ9lwopZVkJs8mF6dFfQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtg1ilIPjR4JQzPCc_lkxloaFHnM3IqTWPA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Vi9mNwr2BR34EmnmDqZ2Cn56QMyBAH8AxQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptWSJnzoi9tO3LYaQ9lwopZVkJs8mF6dFfQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtg1ilIPjR4JQzPCc_lkxloaFHnM3IqTWPA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Vi9mNwr2BR34EmnmDqZ2Cn56QMyBAH8AxQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptWSJnzoi9tO3LYaQ9lwopZVkJs8mF6dFfQ&usqp=CAU",
    ],
  };
  useEffect(() => {
    const totalImages = countries[activeTab].length;
    const visibleImages = 3;
    const singleImageWidth =
      scrollContainerRef.current.clientWidth / visibleImages;
    const totalScrollDistance =
      singleImageWidth * (totalImages - visibleImages);

    const scrollIntervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        if (scrollContainerRef.current.scrollLeft >= totalScrollDistance) {
          scrollContainerRef.current.scrollLeft = singleImageWidth;
        } else {
          scrollContainerRef.current.scrollLeft += singleImageWidth;
        }
      }
    }, scrollInterval);

    return () => clearInterval(scrollIntervalId);
  }, [activeTab]);

  const renderImages = (images) => {
    return images.map((image, index) => (
      <div key={index} className="inline-block w-1/3 p-2">
        <img
          src={image}
          alt={`University ${index + 1}`}
          className="object-contain w-full h-16 md:h-20"
        />
      </div>
    ));
  };

  return (
    <section className="container mx-auto px-4 md:px-0 py-12">
      <div className="flex justify-center">
        <div className="bg-white rounded-md w-full">
          <div className="flex flex-row items-center justify-center">
            <button
              className={`py-2 px-4 focus:outline-none text-sm md:text-base font-semibold ${
                activeTab === "uk"
                  ? "text-gray-300 bg-merakiui-primary"
                  : "text-merakiui-primary"
              }`}
              onClick={() => setActiveTab("uk")}
            >
              UK
            </button>
            <button
              className={`py-2 px-4 focus:outline-none text-sm md:text-base font-semibold ${
                activeTab === "usa"
                  ? "text-gray-300 bg-merakiui-primary"
                  : "text-merakiui-primary"
              }`}
              onClick={() => setActiveTab("usa")}
            >
              USA
            </button>
            <button
              className={`py-2 px-4 focus:outline-none text-sm md:text-base font-semibold ${
                activeTab === "canada"
                  ? "text-gray-300 bg-merakiui-primary"
                  : "text-merakiui-primary"
              }`}
              onClick={() => setActiveTab("canada")}
            >
              Canada
            </button>
          </div>
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            <div className="flex w-max">
              {activeTab === "uk" && renderImages(countries.uk)}
              {activeTab === "usa" && renderImages(countries.usa)}
              {activeTab === "canada" && renderImages(countries.canada)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

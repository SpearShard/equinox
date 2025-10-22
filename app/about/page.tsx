import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function AboutPage() {

  const clientLogos = [
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/aditya-birla-hindalco-logo-1536x1281.jpg",
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/bosch-logo-1536x1081.jpg",
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/credai1.jpg",
    // 👇 Duplicate or replace with 29 total
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/dnvgl.png",
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/indain-railway-1536x1536.png",
    "https://equinoxsdrones.com/wp-content/uploads/2023/07/juwi-logo.jpg",
    
  ];
  return (
    <>
      <div className="min-h-screen">
        <div className="max-sm:p-[5vw] max-sm:h-auto max-sm:bg-white h-[100vh] relative flex items-center justify-center px-12 bg-gray-100">
          {/* Background Image */}
          <Image
            src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus1.svg"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-8">

            {/* Text Section */}
            <div className=" max-sm:w-screen max-sm:p-[5vw] max-sm: md:w-1/2 w-full   max-sm:space-y-[0]  text-white space-y-6">
              <h1 className="max-sm:text-[10vw] text-5xl md:text-6xl font-bold text-[#0179C0]">
                About Us
              </h1>
              <p className="max-sm:mt-[7vw]  text-lg md:text-xl text-black leading-relaxed">
                Ascend to new heights with premier UAV services and unleash the full potential of technology,
                including comprehensive drone survey solutions, through our trusted services.
              </p>
            </div>

            {/* Image Section */}
            <div className=" max-sm:h-[60vw] md:w-1/2 w-full h-[400px] md:h-[500px] relative">
              <Image
                src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus2.svg"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>


        <div className="second-page bg-white">
          {/* <div className="relative flex justify-center items-center h-[5vw] ">
            <Image
              src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus3.svg"
              alt="About Us"
              fill
              className="object-contain"
            />
          </div> */}
          <div className="box relative bg-[#F3F4FA] flex justify-center items-center rounded-[10px] shadow-md p-[1vw] mx-auto w-fit">
            <h1 className="text-[#038BD5] text-lg font-semibold text-center leading-snug">
              WE&apos;RE THE BEST DRONE TECH COMPANY OF THE YEAR 2023
            </h1>
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:relative three-boxes flex justify-center items-center gap-4 p-6">
            {/* Box 1 */}
            <div className="max-sm:p-[3vw]  max-sm:w-full p-[1vw] box1 relative w-1/3  rounded-lg overflow-hidden">
              <div className="max-sm:h-[30vw]  relative image h-[10vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                  alt="About Us"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text mt-[1vw] text-black">
                <h1>Nation Wide Operation</h1>
                <p>Expanding our premier drone survey services nationwide, our deliverables have earned the staunch endorsement of numerous private firms and government agencies, reaffirming our offerings&apos; technical excellence and reliability. Be a part of Mechzilla Technology community to keep up the quality of your assets anywhere in India.</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="max-sm:p-[3vw]  max-sm:w-full p-[1vw] box2 relative  w-1/3  rounded-lg overflow-hidden">
              <div className="max-sm:h-[30vw] relative image h-[10vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus5.svg"
                  alt="About Us"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-[1vw] text-black">
                <h1>Innovative Technology</h1>
                <p>Supported by revolutionary drone technology, artificial intelligence, and a diverse range of software, our users are guaranteed to procure precise and secure data even from the most vulnerable locations. We continue to achieve centimetre-level accuracy successfully through cutting-edge drone technology and equipment.​</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="max-sm:p-[3vw]  max-sm:w-full p-[1vw] box3 relative  w-1/3  rounded-lg overflow-hidden">
              <div className="max-sm:h-[30vw] relative h-[10vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus6.svg"
                  alt="About Us"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-[1vw] text-black">
                <h1>Wide range of Industries</h1>
                <p>With precision targeting across various industries, our steadfast commitment extends to serving the transportation, renewable energy, mining, utilities, infrastructure, and agricultural sectors with unwavering reliability through cutting-edge drone-powered solutions. Rest assured, your mapping missions remain at the forefront of our priorities.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="third-page">
          <div className="max-sm:bg-red-500 max-sm:h-[30vh]  relative h-[50vh] w-full">
            {/* Background Image */}
            <Image
              src="https://equinoxsdrones.com/wp-content/uploads/2024/11/website-02-1536x260.png"
              alt="Our Mission"
              fill
              className="object-cover max-sm:object-fill"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center text-white">
              <h1 className="text-[3vw] max-sm:text-[10vw] font-bold mb-4">Our Mission</h1>
              <p className="max-sm:text-[3.7vw] max-sm:w-full text-[1.5vw] w-[80%] md:w-[70%] lg:w-[60%]">
                We aim to innovate and integrate drone solutions into scalable real-world applications,
                and we are among the best drone companies in Bangalore. We provide aerial solutions by
                delivering high-quality geospatial solutions with speed, accuracy, and innovation to both
                the public and private sectors.
              </p>
            </div>
          </div>


          <div className=" text bg-white flex justify-center items-center">
            <div className="max-sm:text-[5vw] max-sm:text-left max-sm:p-[5vw] max-sm:w-full w-[70vw] text-[1.5vw] flex flex-col relative bg-white p-[2vw] text-black gap-[2vw] text-center">
              <h1>Mechzilla Technology Pvt Ltd. is a flourishing startup founded by Ashish Aman(CEO). Headquartered in the ‘Silicon Valley’ of India, the company continues its primary operations from Bangalore, Karnataka. Awarded as the best drone company in 2019 and best Drone Tech Company in 2023. We continue to yield the utmost quality in drone surveys.</h1>
              <h1>With more than ten years of experience and expertise in drone technology, collective wisdom and capabilities are invested in projects to accomplish the maximum potential of our client’s vision. Consistent and unsurpassed aerial service personnel, modern equipment and essential software are a few of our prized possessions.</h1>
              <h1>With more than 15 dedicated teams strategically positioned throughout India, we have completed over 500 projects, encompassing an impressive 1 Lakh+ acres of land in a relatively short time frame. Our project begins with comprehensive R&D, followed by innovative data processing & content delivery at competitive prices and significant accuracy. Thoroughly trained and licensed professionals work tirelessly to ensure that the required services are swiftly delivered. Moreover, as one of the best drone companies in Bangalore, our commitment to excellence and pioneering solutions continues to drive our success.</h1>
            </div>
          </div>

        </div>
        <div className="bg-white py-16 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#0179C0] mb-12 text-center">
            Our Founders
          </h1>

          <div className="w-[80vw] flex flex-col gap-12">
            {/* Founder 1 */}
            <div className="founder-card bg-[#F3F4FA] rounded-2xl shadow-md flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/team1.jpg"
                  alt="Founder 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#0179C0]">Ashish Aman</h2>
                <p className="text-lg text-gray-600 mb-3">Founder</p>
                <p className="text-gray-700 mb-6">
                  Technology Evangelist Geospatial Tank Taskmaster. Has played a pioneer role in drone operations before starting his own venture with amazing skills of flying.
                </p>
                <div className="flex justify-center md:justify-start gap-4 text-[#0179C0]">
                  <FaFacebookF className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                  <FaTwitter className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                  <FaLinkedinIn className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="founder-card bg-[#F3F4FA] rounded-2xl shadow-md flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-10-19_at_10.15.12-removebg-preview.png"
                  alt="Founder 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#0179C0]">Sonali</h2>
                <p className="text-lg text-gray-600 mb-3">COO - Operations</p>
                <p className="text-gray-700 mb-6">
                  Operational excellence by overseeing all critical functions from drone deployments to client satisfaction. Her strategic leadership drives innovation, efficiency, and growth within the organization, ensuring we stay at the forefront of the drone industry.
                </p>
                <div className="flex justify-center md:justify-start gap-4 text-[#0179C0]">
                  <FaFacebookF className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                  <FaTwitter className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                  <FaLinkedinIn className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-16 flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-[#0179C0] mb-6 text-center">
              Our Clients
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 mb-12 text-center w-[80vw]">
              Over the years, we’ve collaborated with some of the most innovative
              companies and organizations across multiple industries. Here are a few
              of the trusted partners we’ve worked with.
            </p>

            {/* Grid of client logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 w-[85vw] justify-items-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative w-[120px] h-[80px] flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white py-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#0179C0] mb-12 text-center">
              Our Achievements
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[90vw]">

              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#F3F4FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/land-surveyed.svg"
                    alt="Feature 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#0179C0] mb-1">1 Lakh+</h2>
                <p className="text-gray-700 font-medium">ACRES LAND SURVEYED</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#F3F4FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/projects-done.svg"
                    alt="Feature 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#0179C0] mb-1">500+</h2>
                <p className="text-gray-700 font-medium">PROJECTS DONE</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#F3F4FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/image-processing.svg"
                    alt="Feature 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#0179C0] mb-1">10 Lakhs+</h2>
                <p className="text-gray-700 font-medium">IMAGES PROCESSED</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#F3F4FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/flight-mission.svg"
                    alt="Feature 4"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#0179C0] mb-1">10,000+</h2>
                <p className="text-gray-700 font-medium">FLIGHTS</p>
              </div>

            </div>
          </div>
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Background Image */}
            <Image
              src="https://equinoxsdrones.com/wp-content/uploads/2023/07/contact-background-banner1.svg"
              alt="Get in Touch Background"
              fill
              className="object-cover"
            />

            {/* Overlay */}

            {/* Content */}
            <div className="absolute flex flex-col items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl text-[#0179C0] font-bold mb-4">Get in touch with us</h1>
              <p className="text-lg md:text-xl text-black mb-6">
                Get in touch with us for all your drone related services
              </p>
              <button className="bg-[#0179C0] hover:bg-[#2b1f5a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}



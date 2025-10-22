import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhitePage() {

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
    <div className=" bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero section with background image */}
      <div className=" relative w-full h-[100vh] overflow-hidden">
        <Image
          src='/ban.svg'
          alt="here is the bg"
          fill
          className="object-cover   object-center"
        />
        {/* Content on top of image */}
        <div className=" max-sm:mt-[25vw] absolute top-[5vw] left-[3vw] w-[43vw] ">
        <h1 className=" leading-[1.2] max-sm:text-[5vw]  max-sm:w-[94vw] max-sm:top:10% text-[#0179C0] text-[2vw] font-bold p-4">
          Transforming Possibilities with India’s Top  Drone Technology Partner
        </h1>
        <p className="text-gray-700 px-4 max-sm:w-screen pb-8">
          Delivering precise aerial insights through drone surveys and mapping
          that are efficient, affordable, and reliable, helping businesses
          optimize operations and manage key assets effectively.
        </p>
        <button className="max-sm:text-[4vw] max-sm:px-[5vw] max-sm:py-[2vw] text-[1vw] bg-[#0179C0] ml-[0.8vw] text-white rounded-[50px] px-[1.5vw] py-[0.5vw]">
          Get Started
        </button>
      </div>
      </div>
      {/* Boxes beneath the hero section */}
      <div className=" -mt-[10vw] relative z-2 px-[3vw]  max-sm:items-center max-sm:px-[0vw]">
        <div className=" flex items-center max-sm:w-screen max-sm:flex-col max-sm:mt-[10vw]   gap-[5vw] justify-center">
          <div className="lg:p-[1vw]  lg:h-[18vw] lg:w-[15vw] max-sm:w-[90vw]  max-sm:justify-center  w-57 p-4 h-70 bg-white flex flex-col shadow-lg rounded-lg flex items-center justify-center">
            <Image src='/drone.png' className="max-sm:w-[25vw]" alt="box1" width={58} height={48} />
            <h1 className="max-sm:text-[7vw]  text-[2vw] text-[#048BD6] font-bold">10X</h1>
            <h3 className="max-sm:text-[6vw] text-[1.1vw] text-black text-blackfont-bold">Faster Data Acquisition</h3>
            <p className="max-sm:text-[4vw] max-sm:leading-[5vw] text-[0.8vw] text-center text-black">Our qualified drone pilots and high-end UAV surveying and inspection allow us to procure data 10x faster than other traditional methods.</p>
          </div>
          <div className="lg:p-[1vw]  lg:h-[18vw] lg:w-[15vw] max-sm:w-[90vw]  w-57 h-70 bg-white shadow-lg rounded-lg flex flex-col p-4 items-center justify-center">
            <Image className="max-sm:w-[25vw]" src='data:image/png;base64,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' alt="box1" width={58} height={48} />
            <h1 className="text-[2vw] max-sm:text-[7vw] text-[#048BD6] font-bold">99%</h1>
            <h3 className="max-sm:text-[6vw] text-[1.1vw] text-black text-blackfont-bold">Accurate Survey</h3>
            <p className="max-sm:text-[4vw] max-sm:leading-[5vw] text-[0.8vw] text-center text-black">We use machine learning, comprehensive UAV surveying, and mapping to produce up to 99% accurate volumetric measurements and yield estimation.</p>
          </div>
          <div className="lg:p-[1vw]  lg:h-[18vw] lg:w-[15vw] max-sm:w-[90vw]  w-57 h-70 bg-white shadow-lg rounded-lg flex flex-col p-4 items-center justify-center">
            <Image className="max-sm:w-[25vw]" src='data:image/png;base64,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' alt="box1" width={58} height={48} />
            <h1 className=" max-sm:text-[7vw] text-[2vw] text-[#048BD6] font-bold">Leading</h1>
            <h3 className="max-sm:text-[6vw] text-[1.1vw] text-black text-blackfont-bold">in Industry</h3>
            <p className="max-sm:text-[4vw] max-sm:leading-[5vw] text-[0.8vw] text-center text-black">We have triumphantly earned our place in the drone industry through exceptional performance and dedication. We received the award for the Best Drone Tech Company of the year in 2023.</p>
          </div>
        </div>
      </div>

      <div className= " lg:justify-center flex  max-sm:flex-col  pt-[3vw] gap-[2vw]">
        <Image src='https://equinoxsdrones.com/wp-content/uploads/2023/07/about-us-banner1-768x512.png' alt="shape" width={846} height={564} />
        <div className=" max-sm:p-[5vw] max-sm:w-full  w-[30vw]">
          <h1 className="max-sm:text-[9vw] max-sm:leading-[9vw] text-[2vw] text-[#048BD6] font-bold">We Are Equinox&apos;s Drones.</h1>
          <h2 className="max-sm:text-[8vw] text-[1.5vw] text-black font-bold">About Us</h2>
          <p className="max-sm:text-[5vw] text-[1.3vw] text-black">Endeavoring to deliver innovative data processes and content delivery, our drone survey company in India provides aerial solutions by delivering high-quality Geo-Spatial solutions backed with enhanced speed and precision for both the public and private sectors. We offer highly accurate and detailed GIS Surveying, drone inspection, mining services, flood assessment, crop health monitoring, topographic survey, UAV data processing, 3D mapping, and aerial photography. Our qualified personnel include wind turbine experts. We provide specialized drone services for projects across India and have earned the knowledge and skills to accomplish them through experience, teamwork, and reliable equipment. As one of the best drone companies in India, we excel in drone mapping and surveying, offering top-tier drone mapping services near you. </p>
          <Link
            href="/learn-more"
            className="group inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">Learn more</span>
            <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Feature boxes section - beneath blue section */}
      <div className="w-full px-[3vw] py-[4vw] max-sm:px-[0]">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex max-sm:items-center max-sm:p-[2vw] max-sm:flex-col max-sm:w-screen max-sm: flex-nowrap justify-between gap-[2vw]">
            <div className="max-sm:w-[90vw] w-[20rem] min-h-[14rem] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <Image src='https://equinoxsdrones.com/wp-content/uploads/2023/07/land-surveyed.svg' alt="drone" width={70} height={50} className="mb-3" />
              <h3 className="text-lg font-semibold text-black mb-2">1 Lakh+</h3>
              <p className="text-sm text-gray-600">ACRES LAND SURVEYED</p>
            </div>
            <div className="max-sm:w-[90vw] w-[20rem] min-h-[14rem] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <Image src='https://equinoxsdrones.com/wp-content/uploads/2023/07/projects-done.svg' alt="drone" width={70} height={50} className="mb-3" />
              <h3 className="text-lg font-semibold text-black mb-2">500+</h3>
              <p className="text-sm text-gray-600">PROJECTS DONE</p>
            </div>
            <div className="max-sm:w-[90vw] w-[20rem] min-h-[14rem] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <Image src='https://equinoxsdrones.com/wp-content/uploads/2023/07/image-processing.svg' alt="drone" width={70} height={50} className="mb-3" />
              <h3 className="text-lg font-semibold text-black mb-2">10 Lakhs+</h3>
              <p className="text-sm text-gray-600">IMAGE PROCESSED</p>
            </div>
            <div className="max-sm:w-[90vw] w-[20rem] min-h-[14rem] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <Image src='https://equinoxsdrones.com/wp-content/uploads/2023/07/flight-mission.svg' alt="drone" width={70} height={50} className="mb-3" />
              <h3 className="text-lg font-semibold text-black mb-2">10,000+</h3>
              <p className="text-sm text-gray-600">FLIGHTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services section */}
      <div className="w-full px-[3vw] py-[4vw]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[2vw] max-sm:text-[10vw] font-bold text-[#0179C0] mb-[2vw]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 transition-shadow duration-200 hover:shadow-xl">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2023/07/mapping.svg" alt="Service 1" width={600} height={350} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold text-black">Aerial Inspection & Analysis</h3>
              <p className="mt-2 text-gray-600 text-sm">Detailed inspections of assets and infrastructure using high-resolution imagery and analytics.</p>
              <Link href="#" className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 transition-shadow duration-200 hover:shadow-xl">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2023/07/inspection.svg" alt="Service 2" width={600} height={350} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold text-black">Surveying & Mapping</h3>
              <p className="mt-2 text-gray-600 text-sm">Accurate mapping and topographic data collection for planning and development.</p>
              <Link href="#" className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 transition-shadow duration-200 hover:shadow-xl">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2023/07/creative-aerial-content.svg" alt="Service 3" width={600} height={350} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold text-black">UAV Data Processing</h3>
              <p className="mt-2 text-gray-600 text-sm">Transform raw aerial data into actionable insights, models, and reports.</p>
              <Link href="#" className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg p-5 transition-shadow duration-200 hover:shadow-xl">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2023/07/mapping.svg" alt="Service 4" width={600} height={350} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold text-black">Creative Aerial Content</h3>
              <p className="mt-2 text-gray-600 text-sm">Capture stunning visuals and narratives from the sky for marketing and media.</p>
              <Link href="#" className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>

      
      {/* <div className="w-full px-[3vw] pb-[4vw]">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/GeItr7D8mXM?rel=0&modestbranding=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div> */}

      <div className=" max-sm:p-[3vw] bg-white py-16 flex flex-col items-center">
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

      {/* Industries served */}
      <div className="w-full px-[3vw] py-[4vw]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center max-sm:text-[8vw] text-[2vw] font-bold text-[#0179C0] mb-[2.5vw]">Industries served</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
            {[
              { title: "Transportation", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/transpor.jpg", desc: "Railway and highway projects are supported with GIS, topography surveys, aerial maps, and UAVs equipped with high-end advanced sensors for surveying, monitoring, and inspection, resulting in enhanced efficiency and management. Our services include drone road inspection and bridge inspection using drones, ensuring thorough assessments and accurate data collection. We specialize in UAV bridge inspection and bridge inspection by drone, utilizing cutting-edge technology to deliver reliable and detailed inspection reports." },
              { title: "Renewable Energy", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/rew.jpg", desc: "Promote reliable data acquisition and diminish risks associated with solar and wind turbine inspections by employing AI-powered surveys, thermal maps, and thermal inspections to preserve your assets in top-notch condition. Our services include innovative approaches such as solar panels on drones, solar-powered UAV solutions, and solar drones for efficient inspections. For wind turbine inspection, we offer wind turbine drone inspection services, including drone wind turbine blade inspection and turbine blade inspection, ensuring thorough and accurate assessments using advanced drone technology." },
              { title: "Mining", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/mining.jpg", desc: "Keep track of your critical assets with AI-powered volumetric measurement and analysis with 99% accuracy. We offer nearly 30x faster data collection for haul road optimization, mine exploration, and countless other UAV-powered services. Our mining drone solutions encompass mining surveys, mining inspections, and UAVs for mining operations, ensuring efficient and precise data acquisition tailored to your needs." },
              { title: "Utilities", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/utilities.jpg", desc: "We extend our services to detect, track, and analyze damage on utilities using cutting-edge drone UAV technology backed with guaranteed centimeter-level accuracy. Our expertise includes drone telecom inspections, telecom tower inspection, drones in telecommunications, and drone tower inspection software, ensuring thorough and precise assessments for utility infrastructure." },
              { title: "Infrastructure", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/infra.jpg", desc: "Our GIS experts are here to advance knowledge toward your projects with highly-equipped UAVs for 3D city models, pre-construction aerial surveys, drone videos with GEO-tagged information, drone inspection, city traffic analysis, and more. We provide comprehensive infrastructure inspection services, including drone infrastructure inspection and UAV infrastructure inspection, ensuring thorough assessments and detailed insights for your projects." },
              { title: "Agriculture", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/agir.jpg", desc: "Through our aerial survey, mapping, and high-end UAVs pioneering precision agriculture, crop health analysis, irrigation planning, crop damage assessment, soil analysis, and more, we cater successfully to the agricultural community with 98% accuracy. Our services include drones for agricultural use, agri drones, drones and farming solutions, agriculture drone capabilities, and UAV drone agriculture applications, ensuring optimal results and efficiency in agricultural operations." },
              { title: "Oil and Gas", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/oil-refinery.jpg", desc: "Oil and gas companies utilize drones or UAVs for pipeline inspections and other necessary functions to ensure safety, accuracy, and cost-effectiveness. Our services include specialized drone solutions tailored for the oil and gas industry, offering drone inspection for oil and gas facilities and comprehensive oil and gas drone services." },
              { title: "Real Estate", img: "https://equinoxsdrones.com/wp-content/uploads/2023/07/banner-3.jpg", desc: "Real estate drone photography can significantly enhance residential and commercial property features. Aerial photography with drones offers imaginative and attractive visuals that appeal to potential buyers and investors. Choosing the best drone for real estate ensures high-quality images and videos that showcase properties effectively. Realtors benefit from specialized drone photography for real estate, creating compelling visuals that highlight property details and locations." },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden min-h-[16rem] bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200" />
                <div className="relative z-10 p-6 flex flex-col h-full justify-end text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm opacity-95">{item.desc}</p>
                  <Link href="#" className="mt-3 inline-flex items-center text-white/90 hover:text-white">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* <div className="w-full px-[3vw] max-sm:px-[0vw] py-[4vw]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center max-sm:text-[8vw] text-[2vw] font-bold text-[#0179C0] mb-[2.5vw]">Recent Blogs</h2>
          <div className=" max-sm:p-[2vw] max-sm:w-screen max-sm:items-center  flex max-sm:flex-col flex-nowrap justify-between gap-[2vw]">
            
            <div className="max-sm:w-[90vw] w-[24rem] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2025/06/Eq-B2-Wind-Turbin-01-768x413.png" alt="Blog 1" width={600} height={350} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">How Drones Are Revolutionizing Wind Turbine Inspections</h3>
                <Link href="#" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">Read Full Blog <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </div>
            </div>
          
            <div className="max-sm:w-[90vw] w-[24rem] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2025/06/Picture1-768x413.png" alt="Blog 2" width={600} height={350} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">Power Line Inspection: Guide, Benefits & Tech by Equinox’s Drones</h3>
                <Link href="#" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">Read Full Blog <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </div>
            </div>
            
            <div className="max-sm:w-[90vw] w-[24rem] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image src="https://equinoxsdrones.com/wp-content/uploads/2025/04/thermal-imaging-drones-768x413.png" alt="Blog 3" width={600} height={350} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">Thermal Imaging Drones for Leak Detection in Oil and Gas Pipelines</h3>
                <Link href="#" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">Read Full Blog <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-[2.5vw] flex justify-center">
            <Link href="/blogs" className="text-[1rem] bg-[#048BD6] text-white rounded-full px-6 py-2 hover:bg-[#5f3fe0] transition-colors">visit blogs page</Link>
          </div>
        </div>
      </div> */}

      {/* Testimonials */}
      <div className="w-full px-[3vw] py-[4vw] bg-[#f7f7fb]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="max-sm:text-[9vw] text-center text-[2vw] font-bold text-[#0179C0] mb-[2.5vw]">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw]">
            {/* Testimonial 1 (pointer bottom) */}
            <div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <p className="text-[1rem] leading-relaxed text-center">
                  Equinox&apos;s drones have revolutionized our inspection processes, enhancing efficiency and safety across our operations. Their cutting-edge technology and reliability have significantly bolstered our asset management capabilities.
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#0b2a4a]" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2024/04/aditya-birla-group-logo.jpg" alt="Aditya Birla" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">Aditya Birla Group</div>
                  <div className="text-gray-500 text-sm">Priyamvada</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 (pointer top, logo above) */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2024/08/images-2.png" alt="Tata Motors" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">Indian Oil Corporation Limited (IOCL)</div>
                  <div className="text-gray-500 text-sm">Amber Dubey</div>
                </div>
              </div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#0b2a4a]" />
                <p className="text-[1rem] leading-relaxed text-center">
                  Equinox drones have proven indispensable in our efforts to maintain operational excellence and safety across our vast infrastructure. Their advanced capabilities and precise data analytics have empowered us to make informed decisions swiftly.
                </p>
              </div>
            </div>

            {/* Testimonial 3 (pointer bottom) */}
            <div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <p className="text-[1rem] leading-relaxed text-center">
                  Equinox&apos;s drones have set a new standard in industrial inspection for us. With their robust performance and comprehensive data insights, we&apos;ve optimized maintenance schedules and minimized downtime, thereby boosting productivity.
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#0b2a4a]" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2023/08/Steel_Authority_of_India_logo.svg.png" alt="SAIL" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">Steel Authority of India Limited (SAIL INDIA)</div>
                  <div className="text-gray-500 text-sm">Nandagopal</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 (pointer top, logo above) */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2024/08/Tata-motors-06.png" alt="Indian Oil" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">Tata Motors</div>
                  <div className="text-gray-500 text-sm">Mr Alok</div>
                </div>
              </div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#0b2a4a]" />
                <p className="text-[1rem] leading-relaxed text-center">
                  Equinox&apos;s drones have seamlessly integrated into our manufacturing processes, providing unparalleled visibility and efficiency gains. Their innovative solutions have been instrumental in improving our quality control and operational agility.
                </p>
              </div>
            </div>

            {/* Testimonial 5 (pointer bottom) */}
            <div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <p className="text-[1rem] leading-relaxed text-center">
                  Our collaboration with Equinox has elevated our site inspections and reporting speed. The clarity of their aerial deliverables has greatly accelerated stakeholder decision-making.
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#0b2a4a]" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2024/04/nlc-logo.jpg" alt="Larsen & Toubro" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">Neyveli Lignite Corporation (NLC)</div>
                  <div className="text-gray-500 text-sm">Mr Saravanan</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 (pointer top, logo above) */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="https://equinoxsdrones.com/wp-content/uploads/2024/08/jmsminingpvtltd_logo.jpeg" alt="ReNew Power" width={56} height={56} />
                <div>
                  <div className="text-black font-semibold">JMS Mining Pvt. Ltd</div>
                  <div className="text-gray-500 text-sm">Koushik Bose</div>
                </div>
              </div>
              <div className="relative bg-[#0b2a4a] text-white rounded-md p-6">
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#0b2a4a]" />
                <p className="text-[1rem] leading-relaxed text-center">
                  The Equinox team consistently delivers accurate maps and models on tight timelines. Their professionalism and attention to detail set a high bar for drone service providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-[3vw] py-[4vw]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="max-sm:text-[9vw] text-center text-[2vw] font-bold text-[#0179C0] mb-[2.5vw]">FAQ&apos;S</h2>

          {/* Item 1 (open by default) */}
          <details open className="faq-item mb-4 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              Why Drone Survey?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              Drone surveys enable accurate, reliable data collection from inaccessible places with high‑resolution imagery and 3D representations. They empower informed decision‑making across construction, infrastructure, and asset management while reducing safety risks and timelines.
            </div>
          </details>

          {/* Item 2 */}
          <details className="faq-item mb-4 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              How accurate Drone Survey results are?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              With proper GCPs/RTK and calibration, ground sampling distance can reach centimeter‑level accuracy suitable for engineering‑grade planning and measurement.
            </div>
          </details>

          {/* Item 3 */}
          <details className="faq-item mb-4 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              Which drone survey technology do we use?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              We deploy RTK/PPK‑enabled UAVs with photogrammetry and LiDAR workflows, depending on terrain, canopy, and project accuracy needs.
            </div>
          </details>

          {/* Item 4 */}
          <details className="faq-item mb-4 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              What is the process around each drone operation?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              Mission planning and permissions, on‑site safety briefing, flight execution, QA of captured data, processing (orthos/DTMs/3D models), and delivery with reports.
            </div>
          </details>

          {/* Item 5 */}
          <details className="faq-item mb-4 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              What are the current applications for Aerial Technology?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              Topographic mapping, construction monitoring, mining volumetrics, utilities inspection, agriculture analytics, disaster assessment, and creative aerial content.
            </div>
          </details>

          {/* Item 6 */}
          <details className="faq-item mb-6 rounded-md bg-white shadow-md">
            <summary className="list-none cursor-pointer select-none px-5 py-4 text-[1.1rem] font-semibold text-[#0079C0]">
              Why are drones superior to traditional surveying methods?
            </summary>
            <div className="faq-content px-5 pb-5 text-gray-700 leading-relaxed">
              Faster data capture with reduced field time, better coverage in hazardous areas, lower operational risk, and repeatable datasets for change detection.
            </div>
          </details>

          <div className="flex justify-center">
            <Link href="/faqs" className="text-[1rem] bg-[#048BD6] text-white rounded-full px-6 py-2 hover:bg-[#5f3fe0] transition-colors">Visit FAQs Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

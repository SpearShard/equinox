'use client'
import { useState } from "react";
import Image from "next/image";

export default function TransportationPage() {

  const [activeTab, setActiveTab] = useState<"railways" | "roadways">("railways");

  // Sample data for both industries
  const content = {
    railways: {
      title: "Solar Energy",
      image: "https://equinoxsdrones.com/wp-content/uploads/2023/07/solarenergy-renewable.svg",
      Intitle:
        "The Next Level of Solar Farm Inspections",
      Subtitle: "Maximize Energy Production and Reduce Downtime with our Drone Powered Solutions.",
      features: [
        { picture: "https://equinoxsdrones.com/wp-content/uploads/2023/07/solar1.jpg", desc: "With a passion for technology and a drive to assist various industries, our drone survey company in India is flourishing in the renewable energy sector with specialized drone surveys for solar power plants. We offer timely thermal imaging inspections using cutting-edge UAV technology to ensure the safety, effective deployment, and longevity of solar systems. Our thermal mapping detects faults or damage in solar panels, enabling owners to request warranty or replacement from manufacturers. Using premium drones with thermal sensors, our trained pilots conduct solar panel inspections using drones with utmost safety in solar farms.Our services include drone surveys, UAV inspections, and thermal mapping for superior solar panel analysis. We detect cell defects, failures, dirt on photovoltaic cells, interconnection issues, solar cell degradation, and declining efficiency. Through geotagged high-resolution drone images and orthomosaics, we deliver accurate data for quick decision-making. Having served over 100 solar farms, our solar drone inspections continuously enhance their return on investment with reliable, affordable, and accurate drone solutions. Our solar powered UAV technology ensures that our drone solar inspections are effective and efficient.Our drones with solar panels are equipped for the best drone solar panel inspections. We provide comprehensive solar panel on drone services that include detecting interconnection issues and solar cell degradation. Utilizing a solar powered drone for solar uav inspections allows for high efficiency and accuracy in identifying issues. The solar drone price is justified by the cost savings and efficiency improvements it brings to solar farms." },
        { picture: "https://equinoxsdrones.com/wp-content/uploads/2023/07/solar2.jpg", desc: "Through Drone Surveys and Thermal Mapping of solar power plants, we recover essential information. Accurate solar farm inspections go beyond human capabilities. Our cutting-edge technology can detect cell defects, failures, dirt on photovoltaic cells, interconnection issues, solar cell degradation, and declining operational efficiency. With thermal mapping and aerial infrared imaging, we deliver unparalleled precision that humans alone cannot achieve. The industry needs to depend on cutting-edge UAV technology for solar farm Inspection, Monitoring, and large-scale maintenance. Our deliverables include geotagged high-resolution drone images and orthomosaics for quick decision-making. We have offered solar farm inspection services to more than 100 solar farms, and have assisted them continuously in procuring a higher return on investment." },

      ],
    },
    roadways: {
      title: "Wind Energy",
      image: "https://equinoxsdrones.com/wp-content/uploads/2023/07/solarenergy-renewable.svg",
      Intitle:
        "Automate wind turbine inspection with our AI powered drone solutions.",
      Subtitle: "Increase efficiency, ensure safety, reduce operation cost and increase revenue",

      features: [
        { picture: "https://equinoxsdrones.com/wp-content/uploads/2023/07/wind1.jpg", desc: "Wind turbine and blade inspection can be challenging, especially when internal structural issues are involved, which might not be visible from the outside. Manual inspections alone may not easily identify these technical faults, but drone-powered solutions prove invaluable in addressing such challenges. Our wind turbine inspection services utilize drones equipped with highly advanced sensors like thermal and infrared sensors specially designed and calibrated for wind turbine and blade inspection. These wind turbine drone inspections gather information rapidly and can see up to 15cm deep into wind turbines. Our team uses machine learning and advanced processing software to identify any internal or external structural issues (issues as small as 5mm), helping wind farms maintain structural integrity, extend the lifespan of turbines, and take the right action at the right time Our pilots undergo rigorous training and strictly adhere to safety standards during aerial inspections of wind turbines and blades. We proudly maintain a flawless safety record with zero accidents throughout any wind turbine drone inspection mission. So far, we have already inspected 200+ turbines and helped wind farms maximize efficiency and reduce downtime through thorough wind turbine blade inspections. The cost-effectiveness of windmill drone inspections also contributes to reduced maintenance expenses and enhanced operational efficiency.Our services as one of the top wind turbine inspection companies ensure comprehensive blade inspection and windmill inspection drone capabilities. By using drone wind turbine blade inspection techniques, we can provide precise and timely assessments, ultimately supporting wind farms in achieving optimal performance and reliability." },
        { title: "Methods of Wind Turbine Blade Inspections", desc: "Wind turbine blade inspection methods encompass surface and sub-surface techniques. Surface inspections employ visual tools, including cameras and drones, to detect issues like cracks, erosion, and lightning or bird strikes. Early detection allows for efficient corrective maintenance. Sub-surface inspections utilize non-destructive methods such as thermal imaging, ultrasound, and electromagnetic waves to identify structural flaws within the blades’ internal structure, including damaged shear webs and bonding erosion. However, internal inspections involving technicians physically climbing into the blades are limited due to height, safety, and efficiency constraints, leaving a significant portion uninspected, particularly in offshore wind farms." },

      ],
    },
  };

  const current = content[activeTab];

  return (
    <>
      <div className="max-sm:overflow-x-hidden max-sm:relative min-h-screen bg-white">
        <div className="max-sm:flex max-sm:items-center  relative h-screen w-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://equinoxsdrones.com/wp-content/uploads/2023/07/renewable.jpg')",
            }}
          ></div>

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 max-sm:bg-black/60 bg-black/40"></div>

          {/* Content */}
          <div className=" max-sm:h-auto lg:justify-center max-sm:p-[5vw] relative h-full flex flex-col justify-start pl-[12vw]  text-white z-10">
            <h1 className="lg:text-[3vw]  max-sm:text-[10vw] max-sm:w-full text-6xl font-bold mb-2">Solar Energy</h1>
            <h2 className="max-sm:text-[5vw] text-2xl font-medium mb-4">Conquer the game of energy production and diminish any uncertainties with our Drone Powered Solutions.</h2>
          </div>
        </div>



        <div className=" max-sm:relative max-sm:p-[5vw] w-full bg-white py-12 ">
          {/* Top Tabs Section */}
          <div className="max-sm:w-full bg-[#EEEEEE]  px-[5vw] w-full max-sm:flex-col max-sm:gap-[3vw] flex justify-between items-center mb-12">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("railways")}
                className={`relative z-[0] px-6 py-2 h-[4vw] text-lg font-semibold  ${activeTab === "railways"
                  ? "max-sm:h-full border-purple-600 text-white bg-[#9810FA]"
                  : "border-transparent text-gray-600 hover:text-purple-500"
                  }`}
              >
                Solar Energy
              </button>
              <button
                onClick={() => setActiveTab("roadways")}
                className={`px-6 py-2 text-lg font-semibold border-b-4 ${activeTab === "roadways"
                  ? "border-purple-600 bg-[#9810FA] text-white"
                  : "border-transparent text-gray-600 hover:text-purple-500"
                  }`}
              >
                Wind Energy
              </button>
            </div>

            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Ask for Demo
            </button>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
            {/* Image Section with Full-Width Background */}
            <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
              {/* Background SVG — full width */}
              <div className="absolute inset-0 w-screen left-[45vw]  -translate-x-1/2">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/railway-banner.svg"
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Foreground Image */}
              <div className="relative z-10">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>


            {/* Right Text */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl relative font-bold text-gray-800">{current.title}</h2>
            </div>
          </div>

          <div className="bg-[#F9FAFB] p-[2vw] flex flex-col items-center text-center ">
            <div className="max-sm:text-[5vw] text-[3vw] font-bold text-[#3D2D72]">{current.Intitle}</div>
            <div className="max-sm:text-[4vw] text-[1.5vw] font-bold text-[#3D2D72]">{current.Subtitle}</div>
          </div>

          {/* Features Section */}
          <div className=" p-[2vw]  gap-6">
            {current.features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition"
              >
                {f.picture ? (
                  // 🖼️ Render image and description if picture exists
                  <>
                    <div className="flex justify-center relative z-10">
                      <Image
                        src={f.picture}
                        alt={current.title}
                        width={400}
                        height={400}
                        className="object-contain"
                      />
                    </div>
                    <p className=" text-gray-600 mt-2">{f.desc}</p>
                  </>
                ) : (
                  // 🧠 Otherwise render title or text
                  <div className="hello">
                    <h1 className=" text-2xl font-semibold text-[#3D2D72] text-center">
                      {f.title}
                    </h1>
                    <p className="text-gray-600 mb-4">
                      {f.desc && <p className="text-gray-600 mt-2">{f.desc}</p>}
                      Our superior quality equipment enables us to meticulously identify and address the following issues:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-left  w-fit">
                      <li>Leading edge erosion</li>
                      <li>Trailing edge splits</li>
                      <li>Suction side defects</li>
                      <li>Surface cracks</li>
                      <li>Bird strikes</li>
                      <li>Bonding erosion</li>
                      <li>Delamination</li>
                      <li>Internal structural defects</li>
                    </ul>
                  </div>

                )}
              </div>

            ))}


          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 p-8">
          {/* Left: YouTube video */}
          <div className=" flex-1">
            <video
              className="max-sm:w-[100%] w-[80%] max-w-4xl rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src="https://equinoxsdrones.com/wp-content/uploads/2023/07/solar-inspection-video.mp4" type="video/mp4" />
        
            </video>
          </div>

          {/* Right: Text content */}
          <div className=" flex-1 flex flex-col">
            {/* Title */}
            <h2 className=" max-sm:w-full max-sm:text-[6vw] text-3xl text-[#3D2D72] font-bold mb-2">Benefits of our Drone Powered solution for Roadways</h2>
            {/* Purple line */}
            <div className="w-[12vw] mx-auto h-1 bg-[#734EEC] mb-6"></div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-4">
              {[
                "Drones offer superior resolution for inspections than ground-based methods.",
                "Increase efficiency with high-resolution data in a very timely manner with thermal/4k capabilities",
                "Safely monitor and inspect the condition of Highways without endangering any personnel",
                "Save cost, time and resources with Drone Survey & Inspection compared to ground-based approach",
                "Keep track of all the construction materials with AI and Drones",
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Purple circle with white tick */}
                  <div className="w-6 h-6 flex-shrink-0 bg-[#734EEC] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* Text */}
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white py-16 px-6 flex flex-col items-center">
          {/* Section Title */}
          <h1 className="text-4xl font-bold text-[#3D2D72] mb-12">Our Features</h1>

          {/* Feature Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#7D5CE9] hover:shadow-xl">
              {/* SVG */}
              
              <div className=" max-sm:h-[20vw] max-sm:w-[20vw] relative w-[7vw] h-[7vw] ">
                <Image
                src="/turbine.svg"
                alt="Feature 1"
                fill
              />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                200+ Wind Turbines Inspection
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
                Already covered 200+ Wind turbine Inspection and helped them to ensure safety and structural integrity of wind turbines to reduce downtime.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#7D5CE9] hover:shadow-xl">
              <div className="max-sm:h-[20vw] max-sm:w-[20vw] relative w-[7vw] h-[7vw] ">
                <Image
                src="/turbine.svg"
                alt="Feature 1"
                fill
              />
              </div>

              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                In-depth detailed inspection
              </h2>
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
               With our high-end drones and highly experienced pilots we can inspect up to 15 cm deep into wind turbines and see issues as small as 5mm.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#7D5CE9] hover:shadow-xl">
              <div className="max-sm:h-[20vw] max-sm:w-[20vw] relative w-[7vw] h-[7vw] ">
                <Image
                src="/turbine.svg"
                alt="Feature 1"
                fill
              />
              </div>

              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                Team of Experts
              </h2>
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
                A highly innovative team and experienced drone pilots working around the clock to provide you with the best possible drone service.
              </p>
            </div>
          </div>
        </div>

        <div className=" max-sm:w-screen w-[76vw] mx-auto bg-white shadow-xl p-8 flex flex-col md:flex-row items-center md:items-center gap-6">
          {/* Left content */}
          <div className="flex-1">
            <span className="text-purple-600 font-semibold text-sm uppercase mb-2 inline-block">
              Get in Touch
            </span>
            <h2 className="max-sm:text-[5vw] text-2xl md:text-3xl font-bold text-gray-900">
              Maximize efficiency in your Highway Project and Ensure structural integrity of Highway infrastructure.
            </h2>
          </div>

          {/* Right content */}
          <div className="flex-shrink-0">
            <button className="max-sm:text-[4vw] bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
              Contact Us for a Demo
            </button>
          </div>
        </div>

        



      </div>
    </>
  );
}



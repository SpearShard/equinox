'use client'
import { useState } from "react";
import Image from "next/image";

export default function TransportationPage() {

  const [activeTab, setActiveTab] = useState<"railways" | "roadways">("railways");

  // Sample data for both industries
  const content = {
    railways: {
      title: "Railways",
      image: "https://equinoxsdrones.com/wp-content/uploads/2023/07/railway-vectro-svg.svg",
      description:
        "",
      features: [
        { small: "Planning", big: "Pre Construction Survey", desc: "Our premium quality drones can hover desired heights at nearly 20-50 mph. We have assisted railways with our aerial survey and aerial monitoring services, and empower them to effectively inspect potential land for new Railway tracks, station yards, railway stations, etc. The first step includes an extensive survey of the land to ensure it is viable for further construction. Our experienced drone pilots who solely employ high-end surveying drones can collect data in a fraction of the time at lower costs than conventional methods. After capturing comprehensive data, our team of GIS experts processes and generates a diverse range of topographical maps and 3D models that depict topography, utility Lines, Drainage Slopes, and existing risks to test the feasibility of the new project's feasibility." },
        { small: "Construction", big: "Project Progress Monitoring", desc: "This stage plays a significant role in controlling the budget of the project. Through our Aerial Construction Monitoring Solution, Railway project managers can reduce the overall construction time needed. Lesser the time invested, lesser the cost! However, to ensure that we do not compromise on quality and deliver up to par, our excellent and skilled drone pilots are always present. They compile aerial data encompassing all aspects of railway plans, while steadfastly upholding safety standards. Subsequently, our post-production team adeptly processes the aerial project video, focusing on key details like unfinished overbridge pillars, Half-done construction sites, etc. Track detection and standard measurement is also an essential aspect of railway inspections incorporated by us." },
        { small: "Asset management", big: "Volume Estimation", desc: "Maintaining a comprehensive record of assets and resources stands as a paramount element in any construction endeavor. We assist project managers in consistently monitoring and tracking onsite stock materials during Construction Monitoring and boost the efficiency of projects. Managing cutting-edge technology like Machine Learning, we triumphantly achieve 99% accuracy in stockpiles Volume Estimation. Our proficient drone pilots have promoted various companies and government agencies with asset control through their far-reaching data collection from numerous topographic data points for sound and reliable management." },
        { small: "Inspection", big: "Railway Buildings & Bridges", desc: "Allowing you to access places that are hard-to-reach or simply hazardous for humankind, aerial inspection is the optimal solution. Railway bridges, for example, is an infrastructure that needs comprehensive and accurate assessment. Drones enable the safe and cost-effective revelation and analysis of structural details without putting work personnel at risk. Our team of GIS specialists generates numerous 3D models and topographical maps to ensure the structural integrity of buildings and bridges." },
        { small: "Inspection", big: "Railway Track", desc: "Drone inspection stands as the preferred method for the scheduled inspection and maintenance of high traffic railway tracks. Our established drone pilots acquire Drone Data quickly while sustaining all railway safety standards. Our GIS team then reconstructs the high-resolution aerial images obtained into several topographical maps like 3D models, 3D Point Cloud, 3D textured mesh, etc. Images procured through track inspection, thermal inspection, structural inspection, etc. are perfected by the process of Orthoimagery. The data obtained is used to determine the length of the track, detect possible dangers, and support railways to bypass any catastrophic damage." },
        { small: "Inspection", big: "TSS & Level Crossing", desc: "We are proffering 10x faster Aerial Inspection as opposed to traditional methods for the crucial supporting infrastructures like Level crossing or Traction substation (TSS). Using exceptional RGB and thermal sensors, our pilots accumulate complete visual data that satisfy inspection requirements. This data also acknowledges and identifies potential concerns with substation conditions, vegetation growth, or security breaches. Level crossing, which is an intersection of a railway line and road/path, are areas that necessitate additional safety measures. Thus, we aid officials to guarantee the safety of level crossing through broad collections of geo-tagged visual images in a short period." },
      ],
    },
    roadways: {
      title: "Roadways",
      image: "https://equinoxsdrones.com/wp-content/uploads/2023/07/road1.svg",
      description:
        "",
      features: [
        { small: "PLANNING", big: "Pre Construction Survey", desc: "The initial phase of pre-construction surveys for the prospective land represents one of the pivotal stages in the planning and design process. Our skilled drone pilots, paired with high-quality drones, swiftly gather comprehensive aerial data, significantly outpacing traditional methods. Drone surveys enable our clients to verify the condition of nearby buildings and structures for their projects. This survey is conducted prior to any demolition, piling, foundation work, or site development activities. We strongly urge project managers to expedite their decision-making process by utilizing 2D models, 3D models, and a range of highly detailed topographical maps that depict utility lines, drainage slopes, land gradients, and more." },
        { small: "CONSTRUCTION", big: "Project Progress Monitoring", desc: "Construction Progress Monitoring guarantees that the intended construction is compatible with the budget put forth by the contractor. This stage also monitors and maintains records of all the work done to secure consistency with blueprints and specifications. Our Aerial Construction Monitoring solutions significantly reduce construction timelines, aiding project managers in minimizing overall time requirements. Our team analyzes aerial data to convey crucial information, including unfinished bridge pillars, incomplete road embankments, construction site progress, and road lane statuses." },
        { small: "ASSETS MANAGEMENT", big: "Volume Estimation", desc: "Utilizing machine learning for the assessment of on-site construction resources, we can attain data accuracy levels of up to 99%. Gathering information with our top-tier drones is exceptionally fast, dependable, and cost-efficient. Monitoring stockpiles enables project managers to manage budgets and enhance efficiency. Accurate and consistent volume estimation is known to enhance supply chain management by aligning with comprehensive forecasts and reducing the occurrence of expensive write-offs. Our exceptional drones capture a greater amount of topographic data and contour line elevations compared to conventional methods." },
        { small: "INSPECTION", big: "Roads & Highways", desc: "We provide Highway Aerial Inspection services using cutting-edge drones equipped with advanced RGB and Thermal Sensors, enabling the creation of topography, contour maps, and both 2D and 3D models as deliverables. We conduct a thorough examination of highway and roadway infrastructure, encompassing various aspects like potholes and cracks, power lines, crash barriers, boundaries, Divider alignment, Soil Embankment, etc. Our exceptional drones capture a greater amount of topographic data and contour line elevations compared to conventional methods." },
        { small: "INSPECTION", big: "Bridge", desc: "Utilizing drone technology for bridge inspections offers the most efficient means to swiftly investigate inaccessible and perilous sections of bridges. Our fleet of UAV inspection drones achieve high-resolution data that produce accurate GIS maps and 3d models for identifying concrete delamination and mapping riverbank conditions (upstream and downstream). The topographic mapping helps authorities to secure the foundation of the bridge." },
        { small: "INSPECTION", big: "Bridge", desc: "Drone Inspection of Bridges is the optimal way to investigate inaccessible and hazardous areas of bridges quickly. Our UAV inspection drones deliver high-resolution data, enabling the creation of precise GIS maps and 3D models for the detection of concrete delamination and mapping riverbank conditions (upstream and downstream). The topographic mapping helps authorities to secure the foundation of the bridge." },
      ],
    },
  };

  const current = content[activeTab];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="relative h-screen w-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://equinoxsdrones.com/wp-content/uploads/2023/07/banner-scaled.jpg')",
            }}
          ></div>

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-start pl-16 pt-40 text-white z-10">
            <h1 className="text-6xl font-bold mb-2">Railways</h1>
            <h2 className="text-2xl font-medium mb-4">Connecting Tracks with Aerial Precision</h2>
          </div>
        </div>

        <div className="bg-white px-12 py-16 max-w-[73vw] mx-auto">
          {/* Title */}
          <h1 className="text-[1.5vw] text-center font-bold text-[#3D2D72] mb-6">Drone survey, inspection and monitoring for the Transport industry</h1>

          {/* Paragraphs */}
          <div className="text-gray-700 text-lg space-y-4 mb-8">
            <p>
              Equinox’s Drones offer a cutting-edge drone solution for the railway and roadways industry. We have helped various railways and roadways agencies in project planning, project construction monitoring, and inspection of railway and roadways infrastructure. We conduct aerial surveys, inspections, and monitoring using high-end surveying drones equipped with high-resolution sensors for superior data quality with up to centimeter-level accuracy. Our dedicated team of seasoned drone pilots and GIS experts works tirelessly to consistently deliver optimal results, often ahead of schedule. We provide aerial survey data like orthophotos, elevation models, terrain models, 3D models, thermographic data, and more with very high accuracy, helping to maximize efficiency and ensure accountability in railways and highways projects.
            </p>
            <p>
              Our aerial inspection service for railways and highways infrastructure includes railway inspection, railway infrastructure inspection, drone railway inspection, road inspection, bridge inspection using drones, drone road inspection, bridge inspection with drones, drone bridge inspection, UAV bridge inspection, and more. In periodic aerial inspections, we help railways and roadways agencies keep track of their critical assets and avoid catastrophic damage. Our experienced pilots can collect aerial data in less time while ensuring the railways and highways safety standards even on very high traffic railway tracks and roads without interfering with traffic flow.
            </p>
            <p>
              Through these comprehensive services, including drones for highway inspection and UAV drone inspection, we ensure that the infrastructure is maintained at its best. The use of drones for inspection maximizes efficiency and minimizes risks, proving to be an invaluable asset for the railway and roadways industry.
            </p>
          </div>
        </div>

        <div className="w-full bg-white py-12 px-8">
          {/* Top Tabs Section */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("railways")}
                className={`px-6 py-2 text-lg font-semibold border-b-4 ${activeTab === "railways"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-600 hover:text-purple-500"
                  }`}
              >
                Railways
              </button>
              <button
                onClick={() => setActiveTab("roadways")}
                className={`px-6 py-2 text-lg font-semibold border-b-4 ${activeTab === "roadways"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-600 hover:text-purple-500"
                  }`}
              >
                Roadways
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
              <p className="text-gray-600 text-lg">{current.description}</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.features.map((f, i) => (
              <div
                key={i}
                className="p-6  bg-gray-50 rounded-md shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm font-medium text-purple-600">{f.small}</p>
                <h3 className="text-xl font-semibold text-gray-800">{f.big}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 468.293 468.293"
                className="w-20 h-20 mb-4"
              >
                <polygon fill="#64798A" points="468.293,409.26 0,409.26 152.289,59.039 316.066,59.039" />
                <g>
                  <polygon fill="#FCD462" points="436.699,409.26 423.149,409.26 270.861,59.039 284.472,59.039" />
                  <polygon fill="#FCD462" points="197.495,59.039 45.206,409.26 31.657,409.26 183.883,59.039" />
                </g>
                <g>
                  <polygon fill="#EBF0F3" points="245.499,79.056 222.854,79.056 223.942,59.033 244.411,59.033" />
                  <polygon fill="#EBF0F3" points="248.408,132.572 219.945,132.572 221.623,101.702 246.73,101.702" />
                  <polygon fill="#EBF0F3" points="253.327,223.086 215.026,223.086 217.945,169.374 250.408,169.374" />
                  <polygon fill="#EBF0F3" points="263.445,409.236 204.908,409.236 211.219,293.131 257.134,293.131" />
                </g>
              </svg>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                High Precision Mapping
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
                Our drones capture highly accurate data, ensuring every survey is reliable and precise.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#7D5CE9] hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-[#3D2D72] mb-4 transition-colors duration-300 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 6.253l6.472 3.739A1 1 0 0119 10.618v6.764a1 1 0 01-.528.88l-6.472 3.739a1 1 0 01-.944 0l-6.472-3.739A1 1 0 015 17.382v-6.764a1 1 0 01.528-.88L12 6.253z"
                />
              </svg>

              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                Real-Time Insights
              </h2>
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
                Get instant, actionable data insights with our advanced drone software analytics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#7D5CE9] hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-[#3D2D72] mb-4 transition-colors duration-300 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                />
              </svg>

              <h2 className="text-xl font-semibold text-[#3D2D72] mb-2 transition-colors duration-300 group-hover:text-white">
                Nationwide Coverage
              </h2>
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-white">
                Our drone services are available across India, ensuring on-time delivery and support.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[76vw] mx-auto bg-white shadow-xl p-8 flex flex-col md:flex-row items-center md:items-center gap-6">
          {/* Left content */}
          <div className="flex-1">
            <span className="text-purple-600 font-semibold text-sm uppercase mb-2 inline-block">
              Get in Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Maximize efficiency in your Highway Project and Ensure structural integrity of Highway infrastructure.
            </h2>
          </div>

          {/* Right content */}
          <div className="flex-shrink-0">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
              Contact Us for a Demo
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 p-8">
  {/* Left: YouTube video */}
  <div className="flex-1">
    <iframe
      className="w-full h-64 md:h-96 rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/AA8MdlRXYKw?si=lE5x-o_EnwyqcSvA"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* Right: Text content */}
  <div className="flex-1 flex flex-col">
    {/* Title */}
    <h2 className="text-3xl text-[#3D2D72] font-bold mb-2">Benefits of our Drone Powered solution for Roadways</h2>
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



      </div>
    </>
  );
}



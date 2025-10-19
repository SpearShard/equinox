import Image from "next/image";

export default function SurveyingMappingPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="first-page h-[100vh] relative  max-sm:px-[0] flex items-center justify-center px-12 bg-gray-100">
          {/* Background Image */}
          <Image
            src="https://equinoxsdrones.com/wp-content/uploads/2023/07/banner-background.svg"
            alt="Background"
            fill
            className="object-cover"
          />



          {/* Content */}
          <div className="relative z-10 max-sm:gap-[0]  flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-8">

            {/* Text Section */}
            <div className="md:w-1/2  w-full text-white space-y-6">
              <h1 className=" max-sm:p-[5vw] max-sm:text-[10vw]  max-sm:w-screen  text-5xl md:text-6xl font-bold text-[#3D2D72]">
                Aerial Drone Surveying and Mapping
              </h1>
              <p className="text-lg  max-sm:p-[5vw] md:text-xl text-black leading-relaxed">
                Our stellar Aerial Drone Surveying / Mapping techniques are here to promote your treasured business to the next level by preserving time and money.
              </p>
            </div>

            {/* Image Section */}
            <div className=" max-sm:py-[0] max-sm:h-[75vw] md:w-1/2 w-full h-[400px] md:h-[500px] relative">
              <Image
                src="https://equinoxsdrones.com/wp-content/uploads/2023/07/banner-vector.svg"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className=" bg-white max-sm:p-[0] max-sm:mx-[0] max-sm   px-12 py-16 max-w-[60vw] mx-auto">
          {/* Title */}
          <h1 className="text-[1.5vw] max-sm:w-screen max-sm:text-[8vw] max-sm:leading-[9vw] text-center font-bold text-[#3D2D72] mb-6">Drone Surveying / Mapping in India</h1>

          {/* Paragraphs */}
          <div className="text-gray-700  max-sm:w-screen max-sm:p-[3vw] text-lg space-y-4 mb-8">
            <p>
              Equinox’s Drones strives to provide clear-cut aerial drone surveying and mapping services across India. From serving the government and private sector in land surveying, aerial surveying for land management and development, land slope monitoring, stockpile volumetric measurements, designing smart cities, and mapping greenfield projects, our experience remains unsurpassed. Equinox’s Drones prioritizes quality and consistently achieves highly accurate topographic maps with centimeter-level accuracy. Equipped with state-of-the-art surveying drones and a team of expert licensed pilots, our clients can access deliverables with greater speed, facilitating more nimble decision-making processes.
            </p>
            <p>
              Our drone surveying and mapping expertise ensures precise and reliable results for diverse projects, utilizing UAV drone survey techniques and making us a top choice for drone surveying, drone surveying and mapping, drone mapping and surveying, UAV surveying and mapping, drone survey mapping, UAV drone survey, and UAV in surveying. As one of the leading drone survey companies in India, we excel in providing advanced drones and surveying services, ensuring unparalleled UAV for surveying and mapping solutions.
            </p>
          </div>

          {/* Deliverables Subtitle */}
          <h2 className="text-2xl max-sm:w-screen max-sm:px-[5vw] font-semibold text-[#3D2D72] mb-4">Deliverables we provide:</h2>

          {/* Bullet Points */}
          <ul className=" max-sm:w-screen max-sm:px-[3vw] list-disc list-inside text-gray-700 space-y-2">
            <li>Orthomosaic maps</li>
            <li>3D point cloud</li>
            <li>Digital surface models (DSM)</li>
            <li>Digital Elevation Model (DEM)</li>
            <li>Digital Terrain Model (DTM)</li>
            <li>CONTOUR MAPS</li>
            <li>3D Textured Maps</li>
          </ul>
        </div>

        <div className=" max-sm:p-[7vw] bg-white max-sm:px-[0] px-12 py-16 max-w-6xl mx-auto">
          <h1 className="text-4xl  max-sm:w-screen font-bold text-[#3D2D72] mb-10 text-center">We can help with</h1>

          <div className="flex flex-col gap-6">

            {/* Tab 1 */}
            <div className="max-sm:relative max-sm:flex-col group flex items-center gap-6 p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="max-sm:w-full max-sm:h-[50vw] relative  w-[20vw] h-[15vw] flex-shrink-0 transition-all duration-300 group-hover:w-[22vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/landsurveying.jpg"
                  alt="Drone Surveying"
                  fill
                  className="object-contain max-sm:bg-yellow-200 max-sm:object-fill   "
                />
              </div>
              <div className="flex-1   transition-all duration-300 group-hover:ml-[1vw]">
                <h3 className="text-xl font-semibold text-gray-800">Land Surveying</h3>
                <p className="text-gray-600 mt-2">
                  Our nationwide and tailored service of drone surveying enables us to procure precise topographic maps and 3D models of areas with unaccessible evidence. Extensive land surveys and topographical surveys permit the most definite representation of cadastral maps, immediately and in a hassle-free manner. Our GIS crew then post-processes the data with photogrammetry software to generate deliverables like a detailed Digital Elevation Model (DEM), Digital Terrain Model (DTM), contours, brake lines, ortho-mosaic/ortho-imagery, interactive 3D Mode, and 3D reconstructions of land sites or buildings.
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="max-sm:relative  max-sm:flex-col group flex items-center gap-6 p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="max-sm:w-full max-sm:h-[50vw] relative w-[20vw] h-[15vw] flex-shrink-0 transition-all duration-300 group-hover:w-[22vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/land-management-planning.jpg"
                  alt="GIS Analysis"
                  fill
                  className="object-contain max-sm:bg-yellow-200 max-sm:object-fill"
                />
              </div>
              <div className="flex-1 transition-all duration-300 group-hover:ml-[1vw]">
                <h3 className="text-xl font-semibold text-gray-800">Land Management & Development</h3>
                <p className="text-gray-600 mt-2">
                  We encourage organizations to adopt topographic surveys for a more thoughtful land planning and management process. Providing well-defined and more expeditious data, our background in land management and development has supported several private and government agencies for secure pre-construction planning. We steer our attention to site scouting, allotment, planning, design, and the concluding construction of roads, buildings, and utilities. Accurate aerial surveying/ mapping and topographical mapping at frequent intervals of time retain the course of construction and plans, at pocket-friendly costs.
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="max-sm:relative  max-sm:flex-col group flex items-center gap-6 p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="max-sm:w-full max-sm:h-[50vw] relative w-[20vw] h-[15vw] flex-shrink-0 transition-all duration-300 group-hover:w-[22vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/stockpile_volume.jpg"
                  alt="3D Modeling"
                  fill
                  className="object-contain  max-sm:object-fill"
                />
              </div>
              <div className="flex-1 transition-all duration-300 group-hover:ml-[1vw]">
                <h3 className="text-xl font-semibold text-gray-800">Stockpile Volumetric Measurements</h3>
                <p className="text-gray-600 mt-2">
                  Drones are a popular and conventional method of Stockpile measurements in the industry. Our pilots can conduct Stockpile analysis with our highly exquisite surveying drones and capture extensive topographic data points that traditional methods cannot detect due to their irregular shapes. Surveying can capture and depict all these variations as shape’s actual volume, and not just its estimate. We strategically and efficiently deliver photogrammetric information through Contouring, Digital Surface Models, stockpiles such as waste, mines, inventory, agriculture, etc., and volume measurements with a nearly 99% accuracy rate.
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="max-sm:relative  max-sm:flex-col group flex items-center gap-6 p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="max-sm:w-full max-sm:h-[50vw] relative w-[20vw] h-[15vw] flex-shrink-0 transition-all duration-300 group-hover:w-[22vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/slopemonitoring.jpg"
                  alt="Infrastructure Inspection"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <div className="flex-1 transition-all duration-300 group-hover:ml-[1vw]">
                <h3 className="text-xl font-semibold text-gray-800">Slope Monitoring</h3>
                <p className="text-gray-600 mt-2">
                  Slope failure represents a significant geological risk, and early detection is crucial to ensure safety. Our team of experts employs GIS mapping techniques to effectively identify ground surface steepness, utilizing the Digital Terrain Model (DTM) and Digital Surface Model (DSM) as part of the slope monitoring process. This information, along with the LIDAR survey data, is essential for slope monitoring, landslide mitigation, and prevention of slope failure. Aerial survey mapping is an added valuable tool used by specialists to track the Earth’s movement to help predict and prevent such destruction.
                </p>
              </div>
            </div>

            {/* Tab 5 */}
            <div className="max-sm:relative  max-sm:flex-col group flex items-center gap-6 p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="max-sm:w-full max-sm:h-[50vw] relative w-[20vw] h-[15vw] flex-shrink-0 transition-all duration-300 group-hover:w-[22vw]">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/urban-planning.jpg"
                  alt="Agriculture Solutions"
                  fill
                  className="object-contain max-sm:bg-yellow-200 max-sm:object-fill"
                />
              </div>
              <div className="flex-1 transition-all duration-300 group-hover:ml-[1vw]">
                <h3 className="text-xl font-semibold text-gray-800">Urban Planning</h3>
                <p className="text-gray-600 mt-2">
                  With astonishing advancements in drone technology, the use of drones in urban planning has become extensive. Through drone surveying, we can accumulate enormous amounts of data quickly and at lower prices due to AI processing and machine learning. We have passionately remitted our expertise to numerous private builders and government agencies to plan and examine the sites’ existing social and environmental conditions. A treasured part of our success stems from capturing high-resolution aerial data, LIDAR surveys, and other significant information using cutting edge drone technology.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className=" max-sm:p-[5vw] bg-white px-12 py-16 max-w-6xl mx-auto">
          <h1 className="max-sm:text-[10vw] text-4xl font-bold text-[#3D2D72] mb-10 text-center">Deliverables we provide</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Tab 1 */}
            <div className=" group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Orthomosaic Maps</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-[15vw] mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/ortho.jpg"
                  alt="Orthomosaic Maps"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">Drone images undergo correction for image distortion and are seamlessly merged during post-processing to generate a remarkably precise orthomosaic map. Every pixel within this map carries detailed 2D geographic data (X, Y), enabling precise measurements like horizontal distances and surface areas to be directly obtained.</p>
            </div>

            {/* Tab 2 */}
            <div className=" group group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3D Point Cloud</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/3dmap.jpg"
                  alt="3D Terrain Models"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">Drone images can be processed to produce a dense point cloud. Each point within this cloud encapsulates geospatial coordinates (X, Y, Z) and color details, furnishing a highly accurate model for measuring distances (both slant and horizontal), as well as determining areas and volumes.</p>
            </div>

            {/* Tab 3 */}
            <div className=" group group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Surface Models (DSM)</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/digital-surface-models-dsm.jpg"
                  alt="Topographic Surveys"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">Drone images can also be used to create DSM models of the area. Each pixel contains 2D information (X, Y) and the altitude (Z value) of the highest point for this position.</p>
            </div>

            {/* Tab 4 */}
            <div className=" group group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Terrain Model (DTM)</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/digital-train-moddel-dtm.jpg"
                  alt="Volume & Area Calculations"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">Following the removal of objects like buildings, the drone images can be utilized to construct Digital Terrain Models (DTMs). In these models, each pixel stores 2.5D information, including the X, Y, and Z values corresponding to the highest altitude.</p>
            </div>

            {/* Tab 5 */}
            <div className=" group group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contour Maps</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/digital-contour-map.jpg"
                  alt="Crop Health Analysis"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">Depending on the project requirements, either the DTM or DSM model, with custom contour intervals, can be used to create a contour lines map, giving you a better understanding of the surface of the area shot by the drone.</p>
            </div>

            {/* Tab 6 */}
            <div className=" group group flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3D Textured Mesh</h3>
              <div className="max-sm:bg-purple-300 max-sm:h-[50vw] max-sm:w-full relative w-[20vw] h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://equinoxsdrones.com/wp-content/uploads/2023/07/3d-mesh.jpg"
                  alt="Infrastructure Inspection"
                  fill
                  className="object-contain max-sm:object-fill"
                />
              </div>
              <p className="text-gray-600 max-sm:text-left">The 3D textured mesh serves as a replica of the region captured by the drone, encompassing its edges, faces, vertices, and texture. This model proves particularly valuable for visual inspections or when project collaboration involves external stakeholders or public engagement.</p>
            </div>

          </div>
        </div>

        <div className="max-sm:relative max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-[0]  bg-white px-12 py-16 max-w-6xl mx-auto">
          <h1 className="max-sm:text-[10vw] text-4xl font-bold text-[#3D2D72] mb-10 text-center">Our Features</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature Tab 1 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 1"
                    fill
                    className="object-contain "
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">10x Faster Data Acquisition</h3>
              </div>
              <p className="text-gray-600">Our team of skilled drone pilots, equipped with high-precision drones, allows us to acquire aerial data 10 times more rapidly than our industry counterparts.</p>
            </div>

            {/* Feature Tab 2 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">5x Faster Delivery</h3>
              </div>
              <p className="text-gray-600">We have team of GIS experts working around clock to process and analyse the Drone survey data to deliver on or before time.</p>
            </div>

            {/* Feature Tab 3 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">99% Accurate Measurement</h3>
              </div>
              <p className="text-gray-600">We deliver results with up to 99% of accuracy. We use Machine Learning to process data for better accuracy in yield estimation, volumetric measurements, etc</p>
            </div>

            {/* Feature Tab 4 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 4"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Advance Equipment</h3>
              </div>
              <p className="text-gray-600">Our surveying Drones are high-end and equipped with high resolution sensors for superior data quality. We use both DJI and Custom made drones for surveying.</p>
            </div>

            {/* Feature Tab 5 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 5"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Team of Experts</h3>
              </div>
              <p className="text-gray-600">Our team of highly experienced GIS Engineer, Drone Pilots and Software Engineers working around the clock to provide you with the best possible service experience.</p>
            </div>

            {/* Feature Tab 6 */}
            <div className=" max-sm:w-[90vw]  group flex flex-col border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <div className=" flex items-center gap-4 mb-2">
                <div className=" relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="https://equinoxsdrones.com/wp-content/uploads/2023/07/aboutus4.svg"
                    alt="Feature 6"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">One to One Support</h3>
              </div>
              <p className="text-gray-600">From start to finish of project, we provide all possible support to our clients and help them in better decision making with Survey data.</p>
            </div>

          </div>
        </div>

        <div className="max-sm:p-[5vw]  bg-white px-12 py-16 max-w-6xl mx-auto">
          <h1 className="max-sm:text-[10vw] max-sm:w-full  text-4xl font-bold text-[#3D2D72] mb-10 text-center">Industries We Serve</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Industry Tab 1 */}
            <a href="/industry/manufacturing" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Manufacturing</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Industry Tab 2 */}
            <a href="/industry/construction" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Construction</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Industry Tab 3 */}
            <a href="/industry/agriculture" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Agriculture</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Industry Tab 4 */}
            <a href="/industry/real-estate" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Real Estate</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Industry Tab 5 */}
            <a href="/industry/energy" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Energy</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Industry Tab 6 */}
            <a href="/industry/logistics" className="group flex items-center justify-between border rounded-lg p-6 relative hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-semibold text-gray-800">Logistics</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3D2D72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

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
            <h1 className="text-4xl md:text-5xl text-[#3D2D72] font-bold mb-4">Get in touch with us</h1>
            <p className="text-lg md:text-xl text-black mb-6">
              Get in touch with us for all your drone related services
            </p>
            <button className="bg-[#3D2D72] hover:bg-[#2b1f5a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Video section */}
      {/* <div className="w-full py-[4vw] px-[3vw] pb-[4vw]">
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

      </div>
    </>
  );
}



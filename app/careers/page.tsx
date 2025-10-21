export default function CareersPage() {
  return (
    <>
      <div className="bg-[#211F40] h-[30vh] text-white px-6 py-6 rounded-lg text-center ">
        <h3 className="text-sm mt-[2vw] font-medium uppercase">Job Openings</h3>
        <h1 className="text-[5vw] md:text-4xl  mt-[3vw]">Careers</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start bg-white px-12 py-12 gap-8">
        {/* Left Section: Vertical Line + Titles */}
        <div className="flex items-start gap-4 md:w-1/3">
          {/* Vertical Yellow Line */}
          <div className="w-1 self-stretch bg-[#D3B574] rounded-sm" />

          {/* Titles */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 uppercase">Join Us Today</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0179C0] mt-2">
              The Right Place For You
            </h1>
          </div>
        </div>

        {/* Right Section: Two paragraphs side by side */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:w-2/3">
          <p className="text-gray-600 text-base md:text-lg">
            At Equinox’s Drones, we believe that great work comes from people who are passionate about what they do. That’s why we’re dedicated to creating a workplace where you can thrive—whether you’re a creative innovator, a problem-solver, or someone with a drive to make an impact. Here, you’ll find more than just a job; you’ll find a place where your ideas matter, your contributions are valued, and your growth is supported every step of the way.

            Our team is built on collaboration, diversity, and a shared commitment to excellence. We
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            invest in our people by offering opportunities to learn, lead, and grow within a supportive and inclusive culture. If you’re ready to take the next step in your career and work with a team that empowers you to reach your full potential, then Equinox’s Drones is the right place for you.

            Ready to take your career to new heights? Share your resume with us at careers@equinoxsdrones.com and be a part of our journey.
          </p>
        </div>
      </div>

      <div className="bg-white px-12 py-16">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-[#0179C0] mb-8 text-center">Job Opportunities</h1>

        {/* Job Tabs Row */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Job Tab 1 */}
          <div className="group relative flex items-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 flex-1">
            {/* Vertical Yellow Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-yellow-400"></div>

            {/* Text Section */}
            <div className="flex flex-col flex-1 ml-4">
              <h3 className="text-xl font-semibold text-gray-800">GIS Engineer</h3>
              <p className="text-gray-600 mt-2">
                Provide technical assistance to projects as needed including support to aquisition  of field data, aerial surveys, and other imagery
              </p>
            </div>

            {/* View Job Button */}
            <div className="flex-1 flex justify-end">
              <button className="bg-[#048bd6] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Job
              </button>
            </div>
          </div>

          {/* Job Tab 2 */}
          <div className="group relative flex items-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 flex-1">
            {/* Vertical Yellow Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-yellow-400"></div>

            {/* Text Section */}
            <div className="flex flex-col flex-1 ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Business Development Manager</h3>
              <p className="text-gray-600 mt-2">
                The Business Development Manager must have experience in sales and marketing and be able to work independently and collaboratively with cross-functional teams.
              </p>
            </div>

            {/* View Job Button */}
            <div className="flex-1 flex justify-end">
              <button className="bg-[#048bd6] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Job
              </button>
            </div>
          </div>

        </div>
      </div>


      <div className="bg-gray-50 px-12 py-16">
  {/* Section Title */}
  <div className="text-center mb-10">
    <h3 className="text-xl text-gray-700 font-medium">What are you looking for?</h3>
    <h1 className="text-4xl font-bold text-[#0179C0] mt-2">Apply Now for Success</h1>
  </div>

  {/* Form */}
  <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col gap-6">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 placeholder-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 placeholder-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      
      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone"
        className="border border-gray-300 placeholder-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      
      {/* City */}
      <input
        type="text"
        placeholder="City"
        className="border border-gray-300 placeholder-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>

    {/* Position Dropdown */}
    <select className="border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#048bd6]">
      <option  value="">Select Position</option>
      <option value="bde">Business Development Engineer</option>
      <option value="gis">GIS Engineer</option>
    </select>

    {/* LinkedIn Profile URL */}
    <input
      type="url"
      placeholder="LinkedIn Profile URL"
      className="border border-gray-300 placeholder-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-[#048bd6] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#048bd6] transition-colors"
    >
      Submit
    </button>

  </form>
</div>





    </>
  );
}



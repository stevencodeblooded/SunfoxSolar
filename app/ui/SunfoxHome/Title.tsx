import { CiSettings } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";

const Title = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-center">This will be a good place for a <span className="text-red-500">big bold title.</span></h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl bg-red-500 text-white p-2 rounded">
              <CiSettings />
            </div>
            <h2 className="mb-3 text-lg font-semibold">Plan Your Project</h2>
          </div>
          <p className="text-center">Based on your location, and the details of your
            project, we generate a free estimated 20-year
            financial model. It shows ROI, annual savings
            adjusted for inflation, years to recoup your
            investment, and more. Adjust the inputs to run
            scenario analyses.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl bg-red-100 text-red-500 p-2 rounded">
              <FaChartBar />
            </div>
            <h2 className="mb-3 text-lg font-semibold">Custom Financial Models</h2>
          </div>
          <p className="text-center">Based on your location, and the details of your
            project, we generate a free estimated 20-year
            financial model. It shows ROI, annual savings
            adjusted for inflation, years to recoup your
            investment, and more. Adjust the inputs to run
            scenario analyses.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl bg-red-100 text-red-500 p-2 rounded">
              <FaPersonBreastfeeding />
            </div>
            <h2 className="mb-3 text-lg font-semibold">Connect with Local Installers</h2>
          </div>
          <p className="text-center">We partner with solar installers nationwide and can
            connect you with the right one when you are ready. 
            We get a referral fee if you end up working with our
            partners.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Title
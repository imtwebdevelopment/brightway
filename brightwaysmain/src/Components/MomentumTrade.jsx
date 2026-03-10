import React from 'react';

const MomentumTrade = () => {
  return (
    <div className='container mx-auto mt-5 p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Momentum Trade</h1>
      <p className='text-center text-gray-600 mb-6'>
        Subscribe to Momentum Trade for expert weekly trading insights and high-potential stock recommendations.
      </p>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div className='border rounded-lg p-6 shadow-md p-4 hover:shadow-lg transition duration-300 text-center'>
          <h4 className='text-xl font-semibold mb-2'>Monthly Plan</h4>
          <h5 className='text-2xl font-bold text-green-600 mb-2'>₹50,000 + GST (18%)</h5>
          <p className='text-gray-500 mb-4'>
            Receive 3-4 weekly momentum trading calls with expert analysis.
          </p>
          <a href="/contact">
            <button className="bg-blue-600 text-black px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </a>
        </div>
        <div className='border rounded-lg p-6 shadow-md mt-5 p-4 hover:shadow-lg transition duration-300 text-center'>
          <h4 className='text-xl font-semibold mb-2'>Quarterly Plan</h4>
          <h5 className='text-2xl font-bold text-green-600 mb-2'>₹80,000 + GST (18%)</h5>
          <p className='text-gray-500 mb-4'>
            Save more with a 3-month plan and receive consistent momentum trading recommendations.
          </p>
          <a href="/contact">
            <button className="bg-blue-600 text-black px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-primary text-white fw-bold rounded p-4 mt-5 text-center">
        <p className="fs-5 mb-1">
          For any query about the service and upgrade services, kindly contact us at:
        </p>
        <p className="fs-5 mt-2">
          <a href="mailto:brightwaysfinhelp@gmail.com" className="text-warning text-decoration-none">
            brightwaysfinhelp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default MomentumTrade;

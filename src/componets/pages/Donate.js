const Donate = () => {
    return (
      <div className="container mx-auto py-12 px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Donate to Build Africa</h1>
  
        <p className="text-lg text-center text-gray-700 mb-8">
          We appreciate your generosity! You can donate via bank transfer or mobile money using the details below.
        </p>
  
        {/* Bank Transfer Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center">Bank Transfer Details</h2>
          
          <div className="text-gray-800 text-lg">
            <p className="mb-2">
              <span className="font-semibold">Bank Name:</span> United Bank for Africa (UBA)
            </p>
            <p className="mb-2">
              <span className="font-semibold">Account Name:</span> Build Africa Foundation
            </p>
            <p className="mb-2">
              <span className="font-semibold">Account Number:</span> 1234567890
            </p>
            <p className="mb-2">
              <span className="font-semibold">Swift Code:</span> UBAAFRXXXX
            </p>
          </div>
          
          <p className="text-center text-gray-700 mt-6">
            After transferring, kindly email us the transaction details at <span className="text-red-500">donate@buildafrica.org</span> for confirmation. Thank you for your support!
          </p>
        </div>
  
        {/* Mobile Money Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto border border-yellow-500">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4 text-center">Mobile Money Transfer Details</h2>
          
          <div className="text-gray-800 text-lg">
            <p className="mb-2">
              <span className="font-semibold">Mobile Network:</span> MTN
            </p>
            <p className="mb-2">
              <span className="font-semibold">Mobile Money Number:</span> +231 77 123 4567
            </p>
            <p className="mb-2">
              <span className="font-semibold">Account Name:</span> Build Africa Foundation
            </p>
          </div>
          
          <p className="text-center text-gray-700 mt-6">
            After completing your mobile money transfer, kindly email the transaction details at <span className="text-red-500">donate@buildafrica.org</span> for confirmation. Your support is greatly appreciated!
          </p>
        </div>
  
        <div className="text-center mt-8">
          <button className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
            Email Us Your Donation Details
          </button>
        </div>
      </div>
    );
  };
  
  export default Donate;
  
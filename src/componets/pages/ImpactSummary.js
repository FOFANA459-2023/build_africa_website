const ImpactSummary = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>

        {/* Grid Layout for Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">4</h3>
            <p>Camps Hosted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">200+</h3>
            <p>Students Trained</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">3</h3>
            <p>Enterprises Created</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">90%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSummary;

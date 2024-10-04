const Header = () => {
  return (
    <div className="h-24">
      <div className="container h-full">
        <div className="h-full flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">TechVantage</h1>
          </div>
          <div className="flex gap-20 items-center ">
            <ul className="flex gap-10 font">
              <li>Product</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
            <div className="flex gap-5 items-center">
              <div>
                <h1 className="text-primary">Login</h1>
              </div>
              <div className="px-4 p-2 bg-primary text-white rounded">
                <h1 className="">Get started now</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

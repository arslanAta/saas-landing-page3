const Workflow = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="space-y-14">
          <div className="space-y-5 text-center mx-auto w-1/2">
            <h1 className="text-3xl font-bold">
              Streamline Your Workflow with TechVantage
            </h1>
            <p className="text-lg">
              TechVantage is a cutting-edge SaaS solution designed to
              revolutionize the way businesses operate. Our powerful platform
              empowers you to streamline your workflow, optimize collaboration,
              and drive productivity. Experience the future of work with
              TechVantage.
            </p>
          </div>
          <div className="space-y-14">
            <div className="w-full flex gap-8 justify-between">
              <div className="basis-1/2 flex flex-col justify-between space-y-6">
                <h1 className="text-2xl text-primary font-semibold">
                  1st functionality
                </h1>
                <h1 className="text-3xl font-bold">
                  Effortless Task Management
                </h1>
                <p className="text-lg">
                  Simplify project management with our intuitive task tracking
                  system. Assign tasks, set deadlines, and track progress
                  effortlessly.
                </p>
                <button className="w-fit px-4 p-2 bg-primary rounded-md text-white">
                  Streamline Tasks now
                </button>
              </div>
              <div className="basis-1/2 ">
                <img src="../img/functionality.png" alt="" />
              </div>
            </div>
            <div className="w-full flex flex-row-reverse gap-8 justify-between">
              <div className="basis-1/2 flex flex-col justify-between space-y-6">
                <h1 className="text-2xl text-primary font-semibold">
                  2st functionality
                </h1>
                <h1 className="text-3xl font-bold">Seamless Communication</h1>
                <p className="text-lg">
                  Facilitate seamless communication and collaboration with
                  integrated messaging and real-time updates. Stay connected and
                  never miss.
                </p>
                <button className="w-fit px-4 p-2 bg-primary rounded-md text-white">
                  Connect and Collaborate Today
                </button>
              </div>
              <div className="basis-1/2 flex">
                <img src="../img/functionality.png" alt="" />
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="basis-1/2 flex flex-col justify-between space-y-6">
                <h1 className="text-2xl text-primary font-semibold">
                  3st functionality
                </h1>
                <h1 className="text-3xl font-bold">Powerful Analytics</h1>
                <p className="text-lg">
                  Gain valuable insights into your business with our powerful
                  analytics tools. Track key metrics, visualize data, and make
                  informed decisions.
                </p>
                <button className="w-fit px-4 p-2 bg-primary rounded-md text-white">
                  Gain Insights Instantly
                </button>
              </div>
              <div className="basis-1/2 ">
                <img src="../img/functionality.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;

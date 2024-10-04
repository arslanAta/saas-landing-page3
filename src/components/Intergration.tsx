const Intergration = () => {
  return (
    <div className="py-8">
      <div className="bg-[#D9D9D9]/10 h-[350px] min-h-[350px]">
        <div className="container h-full">
          <div className="flex justify-between gap-10 items-center h-full">
            <div className="basis-1/2 space-y-8">
              <h1 className="text-3xl font-bold">
                Seamless Software Integrations
              </h1>
              <p className="text-lg">
                Connect, collaborate, and automate with TechVantage's extensive
                library of integrations. Our platform seamlessly integrates with
                popular software, empowering you to streamline workflows and
                maximize productivity.{' '}
              </p>
              <button className="px-4 p-2 rounded-md bg-primary text-white">
                Explore Our Integrations Today
              </button>
            </div>
            <div className="basis-1/2">
              <div className="grid grid-cols-4">
                <div className="col-span-1 space-y-6 mt-10">
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/zendesk.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/salesforce.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/vector.svg" alt="" />
                  </div>
                </div>
                <div className="col-span-1 space-y-6 mt-20">
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/team.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/vector.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/hubspot.svg" alt="" />
                  </div>
                </div>
                <div className="col-span-1 space-y-6 mt-10">
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/vector2.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/calendar.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/wordpress.svg" alt="" />
                  </div>
                </div>
                <div className="col-span-1 space-y-6 mt-[-5]">
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/vector3.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/shopify.svg" alt="" />
                  </div>
                  <div className="p-6 rounded-lg bg-white w-fit custom-shadow">
                    <img src="../icons/slack.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intergration;

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container ">
        <div className="space-y-10 w-full">
          <div className="w-full flex justify-between">
            <div className="basis-1/2 space-y-10">
              <h1 className="text-5xl font-bold">TechVantage Solutions</h1>
              <p className="text-lg text-text">
                Empowering Businesses with Innovative Solutions for Success and
                Growth. Streamline workflows, foster collaboration, and unlock
                your true potential with TechVantage. Experience the future of
                work today.
              </p>
              <div className="flex gap-4 text-sm">
                <button className="bg-primary rounded-md  px-4 p-2 text-white">
                  Start Your Free Trial Now
                </button>
                <button className="text-primary rounded-md border px-4 p-2">
                  Request a demo
                </button>
              </div>
            </div>
            <div className="basis-1/2 flex justify-end">
              <img src="../img/hero.png" alt="" />
            </div>
          </div>
          <div className="flex w-full gap-4 overflow-x-scroll py-5 px-4 hide-scroll">
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/time.svg" alt="" />
              </div>
            </div>
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/bag.svg" alt="" />
              </div>
            </div>
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/top.svg" alt="" />
              </div>
            </div>
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/secure.svg" alt="" />
              </div>
            </div>
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/loop.svg" alt="" />
              </div>
            </div>
            <div className="min-w-[250px] h-[150px] rounded-md custom-shadow p-5 space-y-1">
              <h1 className="text-lg font-semibold">Increased</h1>
              <p className="text-[#535558]">
                Streamline your workflow and save time
              </p>
              <div className="bg-[#ECB22D]/10 rounded-full p-1 w-fit">
                <img src="../icons/time.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Footer = () => {
    return (
        <div className='bg-[#D9D9D9]/10 min-h-[400px] h-[400px]'>
            <div className="container h-full">
                <div className="h-full flex items-center w-full">
                    <div className="flex justify-between gap-6 w-full">
                        <div className="basis-1/3 space-y-6">
                            <h1 className="text-2xl font-bold">
                                TechVantage
                            </h1>
                            <p className="text-[#535558]">Transforming Industries through Innovative Technology</p>
                            <div className="flex gap-4">
                                <img src="../icons/twitter.svg" alt="twitter" />
                                <img src="../icons/facebook-square.svg" alt="facebook" />
                                <img src="../icons/google-plus.svg" alt="google-plus" />
                            </div>
                        </div>
                        <div className="basis-2/3 flex justify-end gap-20 text-[#535558]">
                            <div className="space-y-6">
                                <h1 className="font-semibold text-lg">About</h1>
                                <ul className="space-y-2">
                                    <li>About us</li>
                                    <li>Blog</li>
                                    <li>Team</li>
                                    <li>Career</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h1 className="font-semibold text-lg">Company</h1>
                                <ul className="space-y-2">
                                    <li>Privacy</li>
                                    <li>Support</li>
                                    <li>Help Desk</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h1 className="font-semibold text-lg">Blog</h1>
                                <div className="space-y-4">
                                    <div className="flex rounded-lg overflow-hidden">
                                        <div className="">
                                            <img src="../img/emp3.png" alt="" className="w-28 h-20" />
                                        </div>
                                        <div className="bg-white p-3 text-sm space-y-4">
                                            <h1>Lorem ipsum dolor sit amet.</h1>
                                            <p className="text-primary">Read More</p>
                                        </div>
                                    </div>
                                    <div className="flex rounded-lg overflow-hidden">
                                        <div className="">
                                            <img src="../img/emp3.png" alt="" className="w-28 h-20" />
                                        </div>
                                        <div className="bg-white p-3 text-sm space-y-4">
                                            <h1>Lorem ipsum dolor sit amet.</h1>
                                            <p className="text-primary">Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
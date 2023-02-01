import RadiusButton from "../components/materials/radius-button";
import ArrowButton from "../components/materials/arrow-button";
import MainTitle from "../components/materials/main-title";

const Landing = () => (
    <>
    <div className="flex flex-col bg-[#DFC3FA] md:flex-row-reverse md:justify-between">
        <div className="flex flex-col text-left py-10 px-10">
            <MainTitle text={"And create it your way"}></MainTitle>
            <ul className=" list-disc">
                <li className="mb-2">
                    <span className="text-[18px] text-gray-500">Smart drag and drop editor</span>
                </li>
                <li className="mb-2">
                    <span className="text-[18px] text-gray-500">1000’s of advanced design capabilities</span>
                </li>
                <li className="mb-2">
                    <span className="text-[18px] text-gray-500">Custom domain, logo and more brand tools</span>
                </li>
                <li className="mb-2">
                    <span className="text-[18px] text-gray-500">Full-stack web dev tools for custom functionality</span>
                </li>
                <li className="mb-2">
                    <span className="text-[18px] text-gray-500">AI technology that creates a site for you</span>
                </li>
            </ul>
            <div className="w-[170px] mt-8">
                <RadiusButton link={'#'} style={'text-white bg-black hover:bg-gray-500'} text={'Get Started'}></RadiusButton>
            </div>
        </div>
        <div><img src="./image/bg-2.jpg"></img></div>
    </div>
    <div className="flex flex-col bg-[#F4EFE5] items-center py-5 px-10 text-left md:items-start md:p-[100px]">
        <div className="full md:w-[70%]"><MainTitle text={"A website foundation engineered for growth"}></MainTitle></div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start">
            <div className="flex flex-col text-left py-6 border-b-[1px] border-solid border-gray-500 md:border-0 md:w-[29%] md:m-[2%]">
                <div className="pb-5"><span className=" text-[26px] font-bold">Faster loading</span></div>
                <div><span className="text-[20px]">Wix is designed for performance so your site loads faster.</span></div>
            </div>
            <div className="flex flex-col text-left py-6 border-b-[1px] border-solid border-gray-500 md:border-0 md:w-[29%] md:m-[2%]">
                <div className="pb-5"><span className=" text-[26px] font-bold">Built with SEO in mind</span></div>
                <div><span className="text-[20px]">Get the SEO capabilities you need to optimize your site for search visibility.</span></div>
            </div>
            <div className="flex flex-col text-left py-6 border-b-[1px] border-solid border-gray-500 md:border-0 md:w-[29%] md:m-[2%]">
                <div className="pb-5"><span className=" text-[26px] font-bold">Enterprise-grade security</span></div>
                <div><span className="text-[20px]">We keep your site and visitors’ data protected, 24/7.</span></div>
            </div>
            <div className="flex flex-col text-left py-6 border-b-[1px] border-solid border-gray-500 md:border-0 md:w-[29%] md:m-[2%]">
                <div className="pb-5"><span className=" text-[26px] font-bold">Resilient infrastructure</span></div>
                <div><span className="text-[20px]">Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.</span></div>
            </div>
            <div className="flex flex-col text-left py-6 md:w-[29%] md:m-[2%]">
                <div className="pb-5"><span className=" text-[26px] font-bold">Accessible for everyone</span></div>
                <div><span className="text-[20px]">Make your own website inclusive with built-in <a href="#" className="underline cursor-pointer    ">accessibility tools</a>.</span></div>
            </div>
        </div>
        <div className="my-10 md:flex md:w-full">
            <RadiusButton link={'#'} style={'text-white bg-black hover:bg-blue-900'} text={'Get Started'}></RadiusButton>
        </div>
    </div>
    <div className="flex flex-col items-center py-5 px-10">
        <div className="pb-10">
            <span className="text-[32px] font-bold md:text-[36px] lg:text-[40px] xl:text-[44px]">Take your business where it needs to go</span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image1.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">eCommerce</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3"><a href="#" className="underline">Sell online</a> and manage your business with powerful eCommerce solutions.</span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Create Your eCommerce Site"}></ArrowButton>
                </div>
                <div>
                    <ArrowButton link={"#"} text={"Learn How"}></ArrowButton>
                </div>
            </div>
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image2.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">Blog</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3">Create a free blog, grow a loyal audience and monetize your content.</span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Create Your Own Blog"}></ArrowButton>
                </div>
                <div>
                    <ArrowButton link={"#"} text={"Learn How"}></ArrowButton>
                </div>
            </div>
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image3.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">Scheduling software</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3">Offer your services and deliver a seamless booking experience for your clients.</span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Add Your Service"}></ArrowButton>
                </div>
            </div>
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image4.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">Portfolio</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3">Increase your visibility and attract new clients with your work.</span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Create Your Portfolio"}></ArrowButton>
                </div>
            </div>
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image5.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">Domain and hosting</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3">Get scalable, <a href="#" className="underline">free web hosting</a> when you create your own website, and connect a <a href="#" className="underline">professional domain name.</a></span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Create a Site"}></ArrowButton>
                </div>
            </div>
            <div className="flex flex-col text-left pb-6 md:w-[40%] md:m-[3%]">
                <div className="pb-10">
                    <img src="./image/Online-shop-image6.jpg"></img>
                </div>
                <div className="pb-5">
                    <span className="text-[20px] font-bold">Branding tools</span>
                </div>
                <div className="pb-5">
                    <span className="pb-3">Establish a strong brand identity with a <a href="#" className="underline">customizable logo,</a> color and text themes, and more.</span>
                </div>
                <div className="pb-3">
                    <ArrowButton link={"#"} text={"Learn More"}></ArrowButton>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center md:flex-row md:bg-black">
        <div className="flex flex-col text-left py-8 px-5  border-b-[1px] border-solid border-gray-400 md:pl-[30]">
            <div className="pb-8">
                <span className="text-[32px] font-bold lg:text-[48px] md:text-white">Drive traffic that converts</span>
            </div>
            <div className="pb-8">
                <span className="text-[22px] md:text-white">Promote your business and reach the right audience:</span>
            </div>
            <div className="flex flex-col pb-10 md:text-white">
                <span className="text-[22px]">-  Complete SEO solution</span>
                <span className="text-[22px]">-  AI-driven FB & IG Ads</span>
                <span className="text-[22px]">-  Email campaigns</span>
                <span className="text-[22px]">-  Social posts and more</span>
            </div>
            <div className="w-[170px] pb-8">
                <RadiusButton link={'#'} style={'text-white bg-black hover:bg-blue-900 md:text-gray-500 md:bg-white md:hover:bg-gray-200'} text={'Get Started'}></RadiusButton>
            </div>
        </div>
        <div>
            <img src="./image/bg-1.jpg"></img>
        </div>
    </div>
    <div className="flex flex-col md:p-[150px] lg:flex-row-reverse items-center">
        <div className="flex flex-col text-left py-8 px-5">
            <div className="pb-8">
                <span className="text-[32px] font-bold lg:text-[48px]">Manage your business like a pro</span>
            </div>
            <div className="pb-8"><span className="text-[22px]">Capture leads, get reports and insights, automate your business, and more from desktop or on the go from your phone with the</span><span className="text-[22px]"><a>Wix Owner app.</a></span></div>
            <div className="pb-8"><span className="text-[22px]">Everything is synced for seamless management experience.</span></div>
            <div className="w-[170px] pb-8">
                <RadiusButton link={''} style={'text-white bg-black hover:bg-blue-900'} text={'Get Started'}></RadiusButton>
            </div>
        </div>
        <div className="relative lg:pr-[40px]"> 
            <div>
                <img src="./image/slide-bg.jpg"></img>
            </div>
        </div>
    </div>
    <div className="flex flex-col md:flex-row py-8 px-5 bg-gray-300">
        <div className="flex flex-col text-left">
            <span className="text-[32px] font-bold pb-10 md:text-[48px]">How to create a free website</span>
            <span className="text-[16px] md:text-[24px]">Follow these 6 simple steps to create a website today</span>
            
            <div className="hidden md:flex flex-row items-center sm:hidden mt-5">
                <div className="w-[170px] mr-4">
                    <RadiusButton link={''} style={'text-white bg-black hover:bg-blue-900'} text={'Get Started'}></RadiusButton>
                </div>
                <div className="flex items-center">
                    <ArrowButton link="#" text="Learn More"></ArrowButton>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">1.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Sign up for a free website builder.</span></div>
                    <div className="text-[16px] pb-4"><span>Choose what kind of website you want to create.</span></div>
                </div>
            </div>
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">2.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Customize a template or get a website made for you.</span></div>
                    <div className="text-[16px] pb-4"><span>Choose your starting point.</span></div>
                </div>
            </div>
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">3.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Drag and drop 1000s of design features.</span></div>
                    <div className="text-[16px] pb-4"><span>Choose your starting point.</span></div>
                </div>
            </div>
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">4.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Get ready for business.</span></div>
                    <div className="text-[16px] pb-4"><span>Add an online store, booking system, members area and blog.</span></div>
                </div>
            </div>
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">5.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Publish your website and go live.</span></div>
                    <div className="text-[16px] pb-4"><span>Start building your professional online presence.</span></div>
                </div>
            </div>
            <div className="flex flex-row pt-5">
                <div><span className="text-[20px]">6.</span></div>
                <div className="flex flex-col text-left pl-1">
                    <div className="text-[20px] font-bold pb-2"><span>Drive traffic to your site.</span></div>
                    <div className="text-[16px] pb-4"><span>Use advanced SEO tools and integrated marketing solutions.</span></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center sm:hidden">
            <div className="w-[170px] pb-4">
                <RadiusButton link={''} style={'text-white bg-black hover:bg-blue-900'} text={'Get Started'}></RadiusButton>
            </div>
            <div className="flex items-center pb-4">
                <ArrowButton href={"#"} text={"Learn More"}></ArrowButton>
            </div>
        </div>
    </div>
    <div className="flex flex-col bg-black md:flex-container md:flex-row">
        <div className="flex flex-col pt-10 px-7 pb-5 md:flex-grow:1">
            <span className="font-bold text-[40px] text-white pb-7 md:text-[48px]">
                Get inspired, gain new skills and see what’s trending
            </span>
            <a className="flex justify-center md:block underline pr-2 w-full text-white md:no-underline md:pl-18" href="#">
                <div className="flex space-x-1 md:hidden">
                    <span>Explore the Blog</span>
                    <span className="block w-[16px] h-[16px] mt-2 fill-white ">
                        <svg data-bbox="0.4 0.3 17.5 11.7" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                            <g><path d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"></path></g>
                        </svg>
                    </span>
                </div>
                <div className="hidden md:block w-[220px] pt-10">
                    <RadiusButton link={''} style={'text-gray-500 bg-white hover:bg-gray-200'} text={'Explore the Blog'}></RadiusButton>
                </div>
            </a>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            <div className="flex flex-col mt-7 mx-5 md:m-[4%] flex-wrap md:w-[40%]">
                <div className="bg-white flex flex-col px-4 pt-4 rounded-md md:cursor-pointer md:transition-all md:hover:mt-[-10px]">
                    <a className="block">
                        <span>
                            <img src="./image/f11-img1.jpg" className="rounded-md"></img>
                        </span>
                    </a>
                    <span className="text-[18px] font-bold py-3 text-gray-800">How to design a website in 2023</span>
                </div>
            </div>
            <div className="flex flex-col mt-7 mx-5 md:m-[4%] flex-wrap md:w-[40%]">
                <div className="bg-white flex flex-col px-4 pt-4 rounded-md md:cursor-pointer md:transition-all md:hover:mt-[-10px]">
                    <a className="block">
                        <span>
                            <img src="./image/f11-img2.jpg" className="rounded-md"></img>
                        </span>
                    </a>
                    <span className="text-[18px] font-bold py-3 text-gray-800">Online course to get you started</span>
                </div>
            </div>
            <div className="flex flex-col mt-5 mx-5 md:m-[4%] flex-wrap md:w-[40%]">
                <div className="bg-white flex flex-col px-4 pt-4 rounded-md md:cursor-pointer md:transition-all md:hover:mt-[-10px]">
                    <a className="block">
                        <span>
                            <img src="./image/f11-img3.jpg" className="rounded-md"></img>
                        </span>
                    </a>
                    <span className="text-[18px] font-bold py-3 text-gray-800">13 ways to monetize your website</span>
                </div>
            </div>
            <div className="flex flex-col m-5 md:m-[4%] flex-wrap md:w-[40%]">
                <div className="bg-white flex flex-col px-4 pt-4 rounded-md md:cursor-pointer md:transition-all md:hover:mt-[-10px]">
                    <a className="block">
                        <span>
                            <img src="./image/f11-img4.jpg" className="rounded-md"></img>
                        </span>
                    </a>
                    <span className="text-[18px] font-bold py-3 text-gray-800">15 Wix websites to inspire you</span>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col md:flex-row bg-pink-100 bg-opacity-40 px-10 py-16 text-left">
        <div className="pb-9 md:w-[50%] md:pr-10">
            <span className="font-bold text-[48px]">Why the Wix website builder is the best choice for you</span>
        </div>
        <div className="flex flex-col md:w-[50%]">
            <span className="text-[5.3vw] md:text-[18px] pb-7">
                When you create a website using our website builder, everything is there to build your business the way you want. Run it with total peace of mind knowing that there’s enterprise-grade infrastructure built into every site with free reliable web hosting, around-the-clock maintenance and fully managed security.
            </span>
            <span className="text-[5.3vw] md:text-[18px] pb-7">
                Use our tailor-made, customizable templates and 1000s of design features to help bring your vision to life. You can also add your own code for total design control.
            </span>
            <span className="text-[5.3vw] md:text-[18px] pb-7">
                Bring more people to your site and convert visitors with a wide range of built-in eCommerce and business solutions like SEO and marketing tools. Plus, you’ll always have the support you need with 24/7 customer care.
            </span>
            <span className="text-[5.3vw] md:text-[18px] pb-7">
                You can start by creating a free website with Wix. Over 220 million people worldwide have chosen us to grow online. You can, too.
            </span>
            <div className="w-[170px]">
                <RadiusButton link={''} style={'text-white bg-black hover:bg-blue-900'} text={'Get Started'}></RadiusButton>
            </div>
        </div>
    </div>
    <div className="p-5 md:px-20 py-20 bg-gray-300">
        <div className="text-left pb-5 font-bold border-b-[1px] border-solid border-gray-500"><h1 className=" text-[30px]">We're here for you</h1></div>
        <ul className="flex flex-col md:flex-row">
            <li>
                <div className="flex flex-col text-left pb-8 border-b-[1px] border-solid border-gray-500 md:border-b-0 md:pr-5">
                    <span className=" py-6 font-bold text-[20px]">Get Answer</span>
                    <span className="pb-3">Watch tutorials and read detailed articles in the Wix Help Center.</span>
                    <div className="flex items-center">
                        <ArrowButton link={"#"} text="Go to Help Center"></ArrowButton>
                    </div>
                </div>
            </li>
            <li>
                <div className="flex flex-col text-left pb-8 border-b-[1px] border-solid border-gray-500 md:border-b-0 md:pr-5">
                    <span className=" py-6 font-bold text-[20px]">Contact us</span>
                    <span className="pb-3">Get support by chat or schedule a call with a Customer Care Expert</span>
                    <div className="flex items-center">
                        <ArrowButton link={"#"} text="Chat with Us"></ArrowButton>
                    </div>
                </div>
            </li>
            <li>
                <div className="flex flex-col text-left pb-8">
                    <span className=" py-6 font-bold text-[20px]">Hire a pro</span>
                    <span className="pb-3">Get help at any stage—from site creation to online growth.</span>
                    <div className="flex items-center">
                        <ArrowButton link={"#"} text={"Browser All Service"}></ArrowButton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </>
)

export default Landing;
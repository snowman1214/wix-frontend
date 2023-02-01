import FAQComponent from "./faq-component";
import SubLinkComponent from "./sublink-component";

const FAQList = [
    {
        title: "Is it easy to build a website?",
        contentList: [{
                type: "text",
                text: "Yes. Wix offers a few different ways to create your own free website, so you can choose the creation process that works best for you. Need to get online fast? Answer a few simple questions and Wix ADI (Artificial Design Intelligence) will build a website for you. If you want more design freedom, choose from hundreds of templates or even start from scratch and drag and drop the "
            },{
                type: "link",
                link: "#",
                text: "website design"
            },{
                type: "text",
                text: " features you need in the Wix Editor."
            }
        ]
    },{
        title: "Can I create a website without knowing how to code?",
        contentList : [
            {
                type: "text",
                text: "Absolutely. Wix is for everyone and makes it possible to create a high-quality website without knowing how to code. In the Wix Editor, you can drag and drop any feature you want and customize it to match the look and feel of your site. Of course, if you do know how to code, you can add advanced functionality to your site with Velo."
            }
        ]
    },{
        title: "Should I use a website builder or hire a web developer?",
        contentList: [
            {
                type: "text",
                text: "The free Wix website builder is intuitive to use. Looking for a specific web service? Explore the"
            }, {
                type: "link",
                link: "#",
                text: "Wix Marketplace"
            },{
                type: "text",
                text: " to find a certified freelancer or agency at a price that fits your budget."
            }
        ]
    },{
        title: "How do I build and host my site for free?",
        contentList: [
            {
                type: "text",
                text: "When you create a free website with Wix, you get reliable, scalable and free web hosting. All your web content will be stored on"
            }, {
                type: "link",
                link: "#",
                text: "secure servers"
            }, {
                type: "text",
                text: " located around the world. So no matter where your visitors come from, your site will load fast."
            }
        ]
    },{
        title: "How can I make sure my data and my visitors’ data is secure?",
        contentList: [
            {
                type: "text",
                text: "At Wix, we take care of security for you. With every site you get"
            }, {
                type: "link",
                link: "#",
                text: "enterprise-grade security."
            }, {
                type: "text",
                text: " From threat prevention to real-time detection and rapid response, security is fully managed by our dedicated team of experts—24/7. This includes data encryption in transit using HTTPS, TLS 1.2+ and an automatic SSL certificate."
            }
        ]   
    },{
        title: "How do I create a free website with a custom domain?",
        contentList: [
            {
                type: "text",
                text: "You can create a free website with Wix that comes with a Wix domain. To instantly look more professional online, get a "
            }, {
                type: "link",
                link: "#",
                text: "custom domain name."
            }, {
                type: "text",
                text: "It adds credibility to your brand and helps visitors find you online. You can start building your brand by using your domain in a "
            }, {
                type: "link",
                link: "#",
                text: "custom email address"
            }, {
                type: "text",
                text: " (info@mystunningwebsite.com), your social channels, "
            }, {
                type: "link",
                link: "#",
                text: "email marketing campaigns"
            }, {
                type: "text",
                text: " and more. For inspiration use our "
            }, {
                type: "link",
                link: "#",
                text: "Business Name Generator."
            }
        ]   
    },{
        title: "How can I optimize my site for SEO on Wix?",
        contentList: [
            {
                type: "text",
                text: "All Wix sites come with best-practice SEO defaults, including utilizing server-side rendering, customizable meta tags for all site pages, structured data markup, dynamic XML sitemaps, and more. Plus, you get a suite of built-in SEO tools to help you compete in organic search. "
            }, {
                type: "link",
                link: "#",
                text: "Learn more."
            }
        ]   
    },{
        title: "Is my site optimized for Core Web Vitals (CWV)?",
        contentList: [
            {
                type: "text",
                text: "Every new feature, component and element that we create is built with performance in mind, so no matter what type of business you have, you can create a high-performance website. Over the past year, we’ve managed to achieve dramatic improvements for CWV and increased the ratio of Wix sites in the "
            }, {
                type: "link",
                link: "#",
                text: "Google CrUX report"
            }, {
                type: "text",
                text: " with good scores for all three CWV by over 10x. To learn more about how Wix prepared for CWV, check out this "
            }, {
                type: "link",
                link: "#",
                text: "webinar we hosted with Google."
            }
        ]   
    },{
        title: "Can I use a website builder to create a landing page?",
        contentList: [
            {
                type: "text",
                text: "Yes. You can create any kind of website with Wix. Explore beautiful HTML landing page templates in the "
            }, {
                type: "link",
                link: "#",
                text: "landing page builder"
            }, {
                type: "text",
                text: " to get started."
            }
        ]   
    },{
        title: "How can I design a logo for my website for free?",
        contentList: [
            {
                type: "text",
                text: "You can design your own logo for free with the intuitive"
            }, {
                type: "link",
                link: "#",
                text: "Wix Logo Maker"
            }, {
                type: "text",
                text: ". Any logo you create is ready to go in high resolution for digital or print so your brand stays consistent."
            }
        ]   
    }
]

const subLinkList = [
    {
        groupName: "Product",
        linkList: [
            {
                name: "Website Templates",
                link: "#" 
            },{
                name: "Website Builder",
                link: "#" 
            },{
                name: "Website Design",
                link: "#" 
            },{
                name: "Wix Features",
                link: "#" 
            },{
                name: "App Market",
                link: "#" 
            },{
                name: "Web Hosting",
                link: "#" 
            },{
                name: "Domain Names",
                link: "#" 
            },{
                name: "Website Accessibility",
                link: "#" 
            },{
                name: "Mobile App Builder",
                link: "#" 
            }
        ]
    }, {
        groupName: "Solutions",
        linkList: [
            {
                name: "Online Store",
                link: "#" 
            },{
                name: "Online Booking",
                link: "#" 
            },{
                name: "Restaurant Website",
                link: "#" 
            },{
                name: "Blog Website",
                link: "#" 
            },{
                name: "Portfolio Website",
                link: "#" 
            },{
                name: "Enterprise Solutions",
                link: "#" 
            },{
                name: "Student Website",
                link: "#" 
            },{
                name: "Professional Tools",
                link: "#" 
            },{
                name: "Business Email",
                link: "" 
            },{
                name: "Logo Maker",
                link: "" 
            }
        ]
    }, {
        groupName: "Learn",
        linkList: [
            {
                name: "Wix Blog",
                link: "#" 
            },{
                name: "Privacy and Security Hub",
                link: "#" 
            },{
                name: "SEO Learning Hub",
                link: "#" 
            }
            ,{
                name: "Wix Encyclopedia",
                link: "#" 
            }
        ]
    }, {
        groupName: "Support",
        linkList: [
            {
                name: "Help Center",
                link: "#" 
            },{
                name: "Hire a Professional",
                link: "#" 
            },{
                name: "Report Abuse",
                link: "#" 
            },{
                name: "System Status",
                link: "#" 
            }
        ]
    }, {
        groupName: "Company",
        linkList: [
            {
                name: "Press & Media",
                link: "#" 
            },{
                name: "Investor Relations",
                link: "#" 
            },{
                name: "Wix Capital",
                link: "#" 
            },{
                name: "Accessibility Statement",
                link: "#" 
            },{
                name: "Patent Notice",
                link: "#" 
            },{
                name: "Sitemap",
                link: "#" 
            },{
                name: "Careers",
                link: "#" 
            }
        ]
    }
]
const Footer = () => (
    <div>
        <div className="flex flex-col px-5 py-5 last:border-b-0">
            <div className="text-left pb-5"><h1 className=" text-[30px]">FAQs</h1></div>
            <ul className="last: border-b-0">
                {
                    FAQList.map((element, index) => {
                        return <FAQComponent no={index + 1} title={element.title} contentList={element.contentList} key={index}></FAQComponent>
                    })
                }
            </ul>
        </div>
        <div className="text-center py-11 px-5 text-[5.3vw] md:text-[16px] border-y-[1px] border-gray-400 border-solid "><span>This website was designed with </span><span className="font-bold">Wix.</span></div>
        <div className="flex flex-col px-5 py-5 lg:flex-row-reverse">
            <div className="flex flex-col text-left lg:w-[16%]">
                <div className="py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="28" viewBox="0 0 71 28"><path fillRule="evenodd" d="M0 .032s2.796-.356 4.66 1.31C5.81 2.37 6.145 4.008 6.145 4.008L9.952 18.96l3.165-12.239c.309-1.301.864-2.909 1.743-3.997 1.121-1.385 3.398-1.472 3.641-1.472.242 0 2.519.087 3.639 1.472.88 1.088 1.435 2.696 1.744 3.997l3.165 12.239 3.806-14.953s.336-1.638 1.486-2.666C34.205-.324 37 .032 37 .032l-7.289 27.945s-2.404.176-3.607-.446c-1.58-.816-2.332-1.447-3.289-5.249l-.099-.395c-.349-1.399-.883-3.59-1.424-5.813l-.162-.667-.162-.664c-.779-3.198-1.497-6.143-1.612-6.517-.108-.351-.236-1.187-.855-1.187-.607 0-.746.837-.857 1.187-.13.412-.99 3.955-1.856 7.514l-.162.667c-.512 2.107-1.01 4.151-1.341 5.48l-.1.395c-.956 3.802-1.708 4.433-3.288 5.249-1.204.622-3.608.446-3.608.446zM43.998 5v.995L44 5.994v16.628c-.014 3.413-.373 4.17-1.933 4.956-1.213.61-3.067.379-3.067.379V9.332c0-.935.315-1.548 1.477-2.098.693-.329 1.34-.58 2.012-.953C43.54 5.703 43.998 5 43.998 5zM46 .125s3.877-.673 5.797 1.107c1.228 1.14 2.602 3.19 2.602 3.19l3.38 4.965c.164.258.378.54.72.54.343 0 .558-.282.722-.54l3.38-4.965s1.374-2.05 2.602-3.19C67.123-.548 71 .125 71 .125l-9.186 13.923 9.161 13.881-.032.004c-.38.045-4.036.423-5.855-1.266-1.229-1.138-2.487-2.992-2.487-2.992l-3.38-4.964c-.164-.26-.379-.54-.721-.54-.343 0-.557.28-.721.54l-3.38 4.964s-1.19 1.854-2.418 2.992c-1.92 1.783-5.957 1.262-5.957 1.262l9.161-13.88zM43.96 0H44c0 1.91-.186 3.042-1.387 3.923-.384.28-1.048.71-1.826.992C39.719 5.304 39 6 39 6c0-3.476.53-4.734 1.95-5.48.865-.452 2.272-.514 2.82-.52z"></path></svg>
                </div>
                <div className="text-left">
                    <span className="text-sm">The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</span>
                </div>
                <div className="hidden lg:block lg:flex lg:flex-col pt-7 font-bold text-[16px]">
                    <a className="pb-2" href="#">About</a>
                    <a className="pb-2" href="#">Contact Us</a>
                </div>
            </div>
            {subLinkList.map((element, index) => {
                return <SubLinkComponent groupName={element.groupName} linkList={element.linkList} key={index}></SubLinkComponent>
            })}
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-11 px-5 border-y-[1px] border-gray-400 border-solid">
            <div className="flex items-center justify-center">
                <ul className="flex ">
                    <li className="pr-2"><a href="https://www.facebook.com/wix">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,3 C16.9705664,3 21,7.02943359 21,12 C21,16.4921602 17.7088301,20.2154883 13.40625,20.8906641 L13.40625,14.6015625 L15.5033203,14.6015625 L15.9023438,12 L13.40625,12 L13.40625,10.3117441 C13.40625,9.60000586 13.7549121,8.90625 14.8729336,8.90625 L16.0078125,8.90625 L16.0078125,6.69140625 C16.0078125,6.69140625 14.9778574,6.515625 13.9931836,6.515625 C11.9373867,6.515625 10.59375,7.7615625 10.59375,10.0171875 L10.59375,12 L8.30859375,12 L8.30859375,14.6015625 L10.59375,14.6015625 L10.59375,20.8906641 C6.29116992,20.2154883 3,16.4921602 3,12 C3,7.02943359 7.02943359,3 12,3 Z"></path></svg>
                    </a></li>
                    <li  className="pr-2"><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.7300937,6.00081612 L12.8372766,6.00496071 C14.4596655,6.0206583 17.9658552,6.08602907 19.0324773,6.35825806 C19.8069886,6.5553871 20.4168409,7.13622581 20.6238409,7.87383871 C20.9193945,8.92421198 20.9827274,10.8712717 20.9962987,11.6574945 L20.9962987,12.342496 C20.9827274,13.1287001 20.9193945,15.0757327 20.6238409,16.1262581 C20.4168409,16.8637742 19.8069886,17.4446129 19.0324773,17.6418387 C18.2198128,17.8491952 15.9909821,17.9365033 14.2581456,17.9732645 L11.7300937,17.9991841 C10.5918901,17.9937991 6.18651944,17.9528735 4.96752273,17.6418387 C4.19311364,17.4446129 3.58315909,16.8637742 3.37615909,16.1262581 C3.04030276,14.9324793 3.00431815,12.5810207 3.00046266,12.0908408 L3.00486269,11.5939169 C3.0207193,10.7707307 3.08828224,8.89692956 3.37615909,7.87383871 C3.58315909,7.13622581 4.19311364,6.5553871 4.96752273,6.35825806 C6.18651944,6.04713922 10.5918901,6.00620253 11.7300937,6.00081612 Z M12.2699063,7.00080492 L11.734826,7.00080492 L10.4430043,7.01377563 C9.99781796,7.02062736 9.5424079,7.03016005 9.08984046,7.04283204 L8.12291513,7.07525844 L7.56996525,7.09973564 C6.41829124,7.15623227 5.57677047,7.23481875 5.2142099,7.32735323 C4.78182503,7.43741858 4.44806402,7.75527497 4.33877752,8.14469986 C4.21347341,8.59002042 4.11937376,9.32546287 4.06173961,10.2196011 C4.02864669,10.733006 4.01077228,11.234029 4.00355249,11.6617832 L4.00043173,12.0829755 C4.00423125,12.5660393 4.02202809,13.1642856 4.06173964,13.780376 C4.11937465,14.6745335 4.2134754,15.4100189 4.33895498,15.8560284 C4.44805309,16.2447319 4.78186157,16.5626335 5.21475792,16.6728832 C5.59988228,16.7711502 6.52947791,16.8539692 7.7987985,16.9110465 L8.96898361,16.9536669 C9.37909236,16.9656011 9.80021797,16.9750925 10.2250606,16.9823921 L11.4313594,16.9973234 L12.5686406,16.9973234 L13.7749394,16.9823921 C14.199782,16.9750925 14.6209076,16.9656011 15.0310164,16.9536669 L16.2012024,16.9110463 C17.4705294,16.8539674 18.4001758,16.7711353 18.785707,16.6727647 C19.2181934,16.562634 19.5519323,16.2447839 19.6612123,15.8554332 C19.7586322,15.5091607 19.8390048,14.9772861 19.896933,14.3241112 C19.9268444,13.9868424 19.9497421,13.6314821 19.9664773,13.2698992 L19.9870646,12.7243416 L20,12 L19.9870668,11.2757148 C19.9708913,10.7285002 19.9418099,10.1819338 19.8969505,9.67607006 C19.8390222,9.02283462 19.7586453,8.49093266 19.6610358,8.14403553 C19.5519214,7.7552229 19.21823,7.43741805 18.7858207,7.32736102 L18.6931936,7.30612215 C18.2249348,7.20895215 17.2158168,7.12857314 15.8770847,7.0752584 L14.9101974,7.04283213 C14.4577057,7.03016031 14.0025228,7.02062817 13.5580179,7.01377805 L12.2699063,7.00080492 Z M10,9 L16,12 L10,15 L10,9 Z"></path></svg>
                    </a></li>
                    <li className="pr-2"><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.9974921,4.00504762 C14.1694603,4.00504762 14.4418095,4.01425397 15.2948254,4.0531746 C16.1460635,4.092 16.7274286,4.22720635 17.236127,4.42492063 C17.7620317,4.62926984 18.2080317,4.90273016 18.6526667,5.34733333 C19.0972698,5.79196825 19.3707302,6.23796825 19.5751111,6.76387302 C19.7727937,7.27257143 19.908,7.85393651 19.9468254,8.7051746 C19.985746,9.55819048 19.9949524,9.83053968 19.9949524,12.0025397 C19.9949524,14.1745079 19.985746,14.4468571 19.9468254,15.299873 C19.908,16.1511111 19.7727937,16.7324762 19.5751111,17.2411746 C19.3707302,17.7670794 19.0972698,18.2130794 18.6526667,18.6577143 C18.2080317,19.1023175 17.7620317,19.3757778 17.236127,19.5801587 C16.7274286,19.7778413 16.1460635,19.9130476 15.2948254,19.951873 C14.4418095,19.9907937 14.1694603,20 11.9974921,20 C9.82549206,20 9.55314286,19.9907937 8.70012698,19.951873 C7.84888889,19.9130476 7.26752381,19.7778413 6.7588254,19.5801587 C6.23292063,19.3757778 5.78692063,19.1023175 5.34228571,18.6577143 C4.89768254,18.2130794 4.62422222,17.7670794 4.41987302,17.2411746 C4.22215873,16.7324762 4.08695238,16.1511111 4.04812698,15.299873 C4.00920635,14.4468571 4,14.1745079 4,12.0025397 C4,9.83053968 4.00920635,9.55819048 4.04812698,8.7051746 C4.08695238,7.85393651 4.22215873,7.27257143 4.41987302,6.76387302 C4.62422222,6.23796825 4.89768254,5.79196825 5.34228571,5.34733333 C5.78692063,4.90273016 6.23292063,4.62926984 6.7588254,4.42492063 C7.26752381,4.22720635 7.84888889,4.092 8.70012698,4.0531746 C9.55314286,4.01425397 9.82549206,4.00504762 11.9974921,4.00504762 Z M11.9974921,5.44603175 C9.86206349,5.44603175 9.60911111,5.45419048 8.76580952,5.49266667 C7.98606349,5.52822222 7.56260317,5.65850794 7.28079365,5.76803175 C6.90749206,5.91311111 6.64107937,6.0864127 6.3612381,6.36628571 C6.08136508,6.64612698 5.90806349,6.91253968 5.76298413,7.28584127 C5.65346032,7.56765079 5.5231746,7.99111111 5.48761905,8.77085714 C5.44914286,9.61415873 5.44098413,9.86711111 5.44098413,12.0025397 C5.44098413,14.1379365 5.44914286,14.3908889 5.48761905,15.2341905 C5.5231746,16.0139365 5.65346032,16.4373968 5.76298413,16.7192063 C5.90806349,17.0925079 6.08139683,17.3589206 6.3612381,17.6387619 C6.64107937,17.9186349 6.90749206,18.0919365 7.28079365,18.2370159 C7.56260317,18.3465397 7.98606349,18.4768254 8.76580952,18.512381 C9.60901587,18.5508571 9.86190476,18.5590159 11.9974921,18.5590159 C14.1330476,18.5590159 14.3859683,18.5508571 15.2291429,18.512381 C16.0088889,18.4768254 16.4323492,18.3465397 16.7141587,18.2370159 C17.0874603,18.0919365 17.353873,17.9186349 17.6337143,17.6387619 C17.9135873,17.3589206 18.0868889,17.0925079 18.2319683,16.7192063 C18.3414921,16.4373968 18.4717778,16.0139365 18.5073333,15.2341905 C18.5458095,14.3908889 18.5539683,14.1379365 18.5539683,12.0025397 C18.5539683,9.86711111 18.5458095,9.61415873 18.5073333,8.77085714 C18.4717778,7.99111111 18.3414921,7.56765079 18.2319683,7.28584127 C18.0868889,6.91253968 17.9135873,6.64612698 17.6337143,6.36628571 C17.353873,6.0864127 17.0874603,5.91311111 16.7141587,5.76803175 C16.4323492,5.65850794 16.0088889,5.52822222 15.2291429,5.49266667 C14.3858413,5.45419048 14.1328889,5.44603175 11.9974921,5.44603175 Z M11.9974921,14.6683492 C13.4697778,14.6683492 14.6633016,13.4748254 14.6633016,12.0025397 C14.6633016,10.5302222 13.4697778,9.33669841 11.9974921,9.33669841 C10.5251746,9.33669841 9.33165079,10.5302222 9.33165079,12.0025397 C9.33165079,13.4748254 10.5251746,14.6683492 11.9974921,14.6683492 Z M11.9974921,7.89571429 C14.265619,7.89571429 16.1042857,9.73438095 16.1042857,12.0025397 C16.1042857,14.2706667 14.265619,16.1093333 11.9974921,16.1093333 C9.72933333,16.1093333 7.89066667,14.2706667 7.89066667,12.0025397 C7.89066667,9.73438095 9.72933333,7.89571429 11.9974921,7.89571429 Z M16,9 C15.4477153,9 15,8.55228475 15,8 C15,7.44771525 15.4477153,7 16,7 C16.5522847,7 17,7.44771525 17,8 C17,8.55228475 16.5522847,9 16,9 Z"></path></svg>
                    </a></li>
                    <li className="pr-2"><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.9974921,4.00504762 C14.1694603,4.00504762 14.4418095,4.01425397 15.2948254,4.0531746 C16.1460635,4.092 16.7274286,4.22720635 17.236127,4.42492063 C17.7620317,4.62926984 18.2080317,4.90273016 18.6526667,5.34733333 C19.0972698,5.79196825 19.3707302,6.23796825 19.5751111,6.76387302 C19.7727937,7.27257143 19.908,7.85393651 19.9468254,8.7051746 C19.985746,9.55819048 19.9949524,9.83053968 19.9949524,12.0025397 C19.9949524,14.1745079 19.985746,14.4468571 19.9468254,15.299873 C19.908,16.1511111 19.7727937,16.7324762 19.5751111,17.2411746 C19.3707302,17.7670794 19.0972698,18.2130794 18.6526667,18.6577143 C18.2080317,19.1023175 17.7620317,19.3757778 17.236127,19.5801587 C16.7274286,19.7778413 16.1460635,19.9130476 15.2948254,19.951873 C14.4418095,19.9907937 14.1694603,20 11.9974921,20 C9.82549206,20 9.55314286,19.9907937 8.70012698,19.951873 C7.84888889,19.9130476 7.26752381,19.7778413 6.7588254,19.5801587 C6.23292063,19.3757778 5.78692063,19.1023175 5.34228571,18.6577143 C4.89768254,18.2130794 4.62422222,17.7670794 4.41987302,17.2411746 C4.22215873,16.7324762 4.08695238,16.1511111 4.04812698,15.299873 C4.00920635,14.4468571 4,14.1745079 4,12.0025397 C4,9.83053968 4.00920635,9.55819048 4.04812698,8.7051746 C4.08695238,7.85393651 4.22215873,7.27257143 4.41987302,6.76387302 C4.62422222,6.23796825 4.89768254,5.79196825 5.34228571,5.34733333 C5.78692063,4.90273016 6.23292063,4.62926984 6.7588254,4.42492063 C7.26752381,4.22720635 7.84888889,4.092 8.70012698,4.0531746 C9.55314286,4.01425397 9.82549206,4.00504762 11.9974921,4.00504762 Z M11.9974921,5.44603175 C9.86206349,5.44603175 9.60911111,5.45419048 8.76580952,5.49266667 C7.98606349,5.52822222 7.56260317,5.65850794 7.28079365,5.76803175 C6.90749206,5.91311111 6.64107937,6.0864127 6.3612381,6.36628571 C6.08136508,6.64612698 5.90806349,6.91253968 5.76298413,7.28584127 C5.65346032,7.56765079 5.5231746,7.99111111 5.48761905,8.77085714 C5.44914286,9.61415873 5.44098413,9.86711111 5.44098413,12.0025397 C5.44098413,14.1379365 5.44914286,14.3908889 5.48761905,15.2341905 C5.5231746,16.0139365 5.65346032,16.4373968 5.76298413,16.7192063 C5.90806349,17.0925079 6.08139683,17.3589206 6.3612381,17.6387619 C6.64107937,17.9186349 6.90749206,18.0919365 7.28079365,18.2370159 C7.56260317,18.3465397 7.98606349,18.4768254 8.76580952,18.512381 C9.60901587,18.5508571 9.86190476,18.5590159 11.9974921,18.5590159 C14.1330476,18.5590159 14.3859683,18.5508571 15.2291429,18.512381 C16.0088889,18.4768254 16.4323492,18.3465397 16.7141587,18.2370159 C17.0874603,18.0919365 17.353873,17.9186349 17.6337143,17.6387619 C17.9135873,17.3589206 18.0868889,17.0925079 18.2319683,16.7192063 C18.3414921,16.4373968 18.4717778,16.0139365 18.5073333,15.2341905 C18.5458095,14.3908889 18.5539683,14.1379365 18.5539683,12.0025397 C18.5539683,9.86711111 18.5458095,9.61415873 18.5073333,8.77085714 C18.4717778,7.99111111 18.3414921,7.56765079 18.2319683,7.28584127 C18.0868889,6.91253968 17.9135873,6.64612698 17.6337143,6.36628571 C17.353873,6.0864127 17.0874603,5.91311111 16.7141587,5.76803175 C16.4323492,5.65850794 16.0088889,5.52822222 15.2291429,5.49266667 C14.3858413,5.45419048 14.1328889,5.44603175 11.9974921,5.44603175 Z M11.9974921,14.6683492 C13.4697778,14.6683492 14.6633016,13.4748254 14.6633016,12.0025397 C14.6633016,10.5302222 13.4697778,9.33669841 11.9974921,9.33669841 C10.5251746,9.33669841 9.33165079,10.5302222 9.33165079,12.0025397 C9.33165079,13.4748254 10.5251746,14.6683492 11.9974921,14.6683492 Z M11.9974921,7.89571429 C14.265619,7.89571429 16.1042857,9.73438095 16.1042857,12.0025397 C16.1042857,14.2706667 14.265619,16.1093333 11.9974921,16.1093333 C9.72933333,16.1093333 7.89066667,14.2706667 7.89066667,12.0025397 C7.89066667,9.73438095 9.72933333,7.89571429 11.9974921,7.89571429 Z M16,9 C15.4477153,9 15,8.55228475 15,8 C15,7.44771525 15.4477153,7 16,7 C16.5522847,7 17,7.44771525 17,8 C17,8.55228475 16.5522847,9 16,9 Z"></path></svg>
                    </a></li>
                    <li className="pr-2"><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.0073931,3 C7.0329398,3 3,7.02631579 3,11.9925987 C3,15.8042763 5.37231753,19.0608553 8.72321604,20.3708882 C8.64166762,19.6603618 8.57494619,18.5649671 8.75287001,17.7878289 C8.91596684,17.0847039 9.80558591,13.3174342 9.80558591,13.3174342 C9.80558591,13.3174342 9.53870019,12.7771382 9.53870019,11.9851974 C9.53870019,10.734375 10.2652224,9.80180921 11.1696685,9.80180921 C11.9406717,9.80180921 12.3113463,10.3791118 12.3113463,11.0674342 C12.3113463,11.8371711 11.8220558,12.9917763 11.5625836,14.0649671 C11.3475923,14.9605263 12.0148066,15.6932566 12.8970122,15.6932566 C14.4983265,15.6932566 15.7289662,14.0057566 15.7289662,11.578125 C15.7289662,9.42434211 14.1795464,7.921875 11.9629122,7.921875 C9.39784383,7.921875 7.8929049,9.83881579 7.8929049,11.8223684 C7.8929049,12.5921053 8.18944459,13.4210526 8.56011921,13.8725329 C8.63425413,13.9613487 8.64166762,14.0427632 8.61942715,14.1315789 C8.55270572,14.4128289 8.39702238,15.0271382 8.36736841,15.1529605 C8.33030095,15.3157895 8.23392555,15.3527961 8.06341522,15.2713816 C6.9365644,14.7458882 6.23228263,13.1101974 6.23228263,11.7853618 C6.23228263,8.95065789 8.29323349,6.34539474 12.1853169,6.34539474 C15.3063972,6.34539474 17.7380226,8.56578947 17.7380226,11.5411184 C17.7380226,14.6422697 15.7808607,17.1365132 13.0675225,17.1365132 C12.155663,17.1365132 11.2956979,16.6628289 11.0065717,16.1003289 C11.0065717,16.1003289 10.5543486,17.8174342 10.4431462,18.2393092 C10.242982,19.0238487 9.69438353,20.0008224 9.32370891,20.6003289 C10.168847,20.859375 11.0584661,21 11.9925661,21 C16.9670194,21 21,16.9736842 21,12.0074013 C21.0147862,7.02631579 16.9818464,3 12.0073931,3 Z"></path></svg>
                    </a></li>
                    <li className="pr-2"><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.0073931,3 C7.0329398,3 3,7.02631579 3,11.9925987 C3,15.8042763 5.37231753,19.0608553 8.72321604,20.3708882 C8.64166762,19.6603618 8.57494619,18.5649671 8.75287001,17.7878289 C8.91596684,17.0847039 9.80558591,13.3174342 9.80558591,13.3174342 C9.80558591,13.3174342 9.53870019,12.7771382 9.53870019,11.9851974 C9.53870019,10.734375 10.2652224,9.80180921 11.1696685,9.80180921 C11.9406717,9.80180921 12.3113463,10.3791118 12.3113463,11.0674342 C12.3113463,11.8371711 11.8220558,12.9917763 11.5625836,14.0649671 C11.3475923,14.9605263 12.0148066,15.6932566 12.8970122,15.6932566 C14.4983265,15.6932566 15.7289662,14.0057566 15.7289662,11.578125 C15.7289662,9.42434211 14.1795464,7.921875 11.9629122,7.921875 C9.39784383,7.921875 7.8929049,9.83881579 7.8929049,11.8223684 C7.8929049,12.5921053 8.18944459,13.4210526 8.56011921,13.8725329 C8.63425413,13.9613487 8.64166762,14.0427632 8.61942715,14.1315789 C8.55270572,14.4128289 8.39702238,15.0271382 8.36736841,15.1529605 C8.33030095,15.3157895 8.23392555,15.3527961 8.06341522,15.2713816 C6.9365644,14.7458882 6.23228263,13.1101974 6.23228263,11.7853618 C6.23228263,8.95065789 8.29323349,6.34539474 12.1853169,6.34539474 C15.3063972,6.34539474 17.7380226,8.56578947 17.7380226,11.5411184 C17.7380226,14.6422697 15.7808607,17.1365132 13.0675225,17.1365132 C12.155663,17.1365132 11.2956979,16.6628289 11.0065717,16.1003289 C11.0065717,16.1003289 10.5543486,17.8174342 10.4431462,18.2393092 C10.242982,19.0238487 9.69438353,20.0008224 9.32370891,20.6003289 C10.168847,20.859375 11.0584661,21 11.9925661,21 C16.9670194,21 21,16.9736842 21,12.0074013 C21.0147862,7.02631579 16.9818464,3 12.0073931,3 Z"></path></svg>
                    </a></li>
                    <li className="pr-2"><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18,4 C19.1045695,4 20,4.8954305 20,6 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,6 C4,4.8954305 4.8954305,4 6,4 L18,4 Z M8,10 L6,10 L6,17 L8,17 L8,10 Z M12,10 L10,10 L10,17 L12,17 L12,13.5 L12.0068666,13.35554 C12.0795513,12.5948881 12.7203039,12 13.5,12 C14.2796961,12 14.9204487,12.5948881 14.9931334,13.35554 L15,13.5 L15,17 L17,17 L17,13 L16.9949073,12.8237272 C16.9036609,11.24892 15.5976809,10 14,10 C13.3085237,10 12.6716876,10.2339425 12.1643223,10.6269969 L12.0000983,10.7638055 L12,10 Z M7,7 C6.44771525,7 6,7.44771525 6,8 C6,8.55228475 6.44771525,9 7,9 C7.55228475,9 8,8.55228475 8,8 C8,7.44771525 7.55228475,7 7,7 Z"></path></svg>
                    </a></li>
                </ul>
            </div>
            <div className="flex flex-col sm:flex-row">
                <span className="py-2 pr-3">Terms of Use</span>
                <span className="py-2 pr-3">Privacy Policy</span>
                <span className="py-2 pr-3">© 2006-2023 Wix.com, Inc</span>
            </div>
        </div>
    </div>
)

export default Footer;
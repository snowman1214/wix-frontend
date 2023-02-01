import NavItem from './NavItem';
import { useState } from 'react';
import Helmet from 'react-helmet';
import './style.css'

export const submenu1 = [
    "Website Design",
    "Website Templates",
    "Advanced Web Development",
    "Editor X",
    "Mobile App",
    "Hire a Professional"
]


export default function Header(){
    const [menuselected, Setmenuselected] = useState(false);
    const [submenuselected, Setsubmenuselected] = useState(false);
    return(
        <div className="w-screen relative h-[54px]">
            <Helmet>
                <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> 
            </Helmet>
            <div className="px-4 w-full bg-white lg:h-[72px] flex justify-between items-center border-b-2 border-gray-200 h-[54px] fixed left-0 right-0 top-0">
                <div className="w-[65px] h-[24px]">
                        <img src={"./image/logo.svg"} className="w-full h-full flex"/>
                </div>
                <button className='w-[24px] h-[24px] block lg:hidden' onClick={() => Setmenuselected(!menuselected)}>
                    {!menuselected ? <i class="fas fa-bars"></i> : <i class="fa fa-close"></i>}
                </button>
                <div className={`${menuselected ? 'w-[100%] fixed right-0 top-[54px] h-full flex flex-col p-0 m-0 bottom-0 overflow-hidden' : 'w-[90%] h-full items-center flex-row max-lg:hidden lg:flex'}`}>
                    <div className='max-lg:pt-[12px] lg:items-center w-full h-[100%] overflow-auto max-lg:mb-[186px] flex max-lg:flex-col lg:flex-row relative'>
                        
                        <div className='relative'>
                            <div className='px-[24px] h-[44px] flex items-center' onClick={()=>{Setsubmenuselected(!submenuselected)}}>
                                <div className='text-[16px] flex justify-between w-full leading-[24px] text-left'>
                                        Creation
                                    <div className='flex pt-[3px] lg:ml-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="6 6 12 12">
                                            <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col p-0'>
                                <div className=' overflow-hidden max-h-[1000px]'>
                                {submenuselected ? submenu1.map(m => {
                                    return <div>
                                        <a className=' leading-[44px] px-[24px] text-[16px] text-left'>
                                            <span className='font-bold'>{m}</span>
                                        </a>
                                    </div>
                                }) : ''}
                                </div>
                            </div>
                        </div>

                        <NavItem itemTitle={"Business"}/>
                        <NavItem itemTitle="Growth"/>
                        <NavItem itemTitle="Resources"/>
                        <div className='mx-[18px] h-[18px] border-r border-solid border-[#b9b9bd] max-lg:hidden'>
                        </div>
                        <NavItem itemTitle="More"/>
                        <div className='ml-auto max-lg:hidden'>
                            <svg class="hkDbFG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M4.42676427,15 L7.19778729,15 C7.069206,14.209578 7,13.3700549 7,12.5 C7,11.6299451 7.069206,10.790422 7.19778729,10 L4.42676427,10 C4.15038555,10.7819473 4,11.6234114 4,12.5 C4,13.3765886 4.15038555,14.2180527 4.42676427,15 Z M4.86504659,16 C5.7403587,17.6558985 7.21741102,18.9446239 9.0050441,19.5750165 C8.30729857,18.6953657 7.74701714,17.4572396 7.39797964,16 L4.86504659,16 Z M18.5732357,15 C18.8496144,14.2180527 19,13.3765886 19,12.5 C19,11.6234114 18.8496144,10.7819473 18.5732357,10 L15.8022127,10 C15.930794,10.790422 16,11.6299451 16,12.5 C16,13.3700549 15.930794,14.209578 15.8022127,15 L18.5732357,15 Z M18.1349534,16 L15.6020204,16 C15.2529829,17.4572396 14.6927014,18.6953657 13.9949559,19.5750165 C15.782589,18.9446239 17.2596413,17.6558985 18.1349534,16 Z M8.21230689,15 L14.7876931,15 C14.9240019,14.2216581 15,13.3811544 15,12.5 C15,11.6188456 14.9240019,10.7783419 14.7876931,10 L8.21230689,10 C8.07599807,10.7783419 8,11.6188456 8,12.5 C8,13.3811544 8.07599807,14.2216581 8.21230689,15 Z M8.42865778,16 C9.05255412,18.3998027 10.270949,20 11.5,20 C12.729051,20 13.9474459,18.3998027 14.5713422,16 L8.42865778,16 Z M4.86504659,9 L7.39797964,9 C7.74701714,7.54276045 8.30729857,6.30463431 9.0050441,5.42498347 C7.21741102,6.05537614 5.7403587,7.34410146 4.86504659,9 Z M18.1349534,9 C17.2596413,7.34410146 15.782589,6.05537614 13.9949559,5.42498347 C14.6927014,6.30463431 15.2529829,7.54276045 15.6020204,9 L18.1349534,9 Z M8.42865778,9 L14.5713422,9 C13.9474459,6.60019727 12.729051,5 11.5,5 C10.270949,5 9.05255412,6.60019727 8.42865778,9 Z M11.5,21 C6.80557963,21 3,17.1944204 3,12.5 C3,7.80557963 6.80557963,4 11.5,4 C16.1944204,4 20,7.80557963 20,12.5 C20,17.1944204 16.1944204,21 11.5,21 Z"></path>
                            </svg>
                        </div>
                        <div className='mx-[18px] h-[18px] border-r border-solid border-[#b9b9bd] max-lg:hidden'>
                        </div>
                        <div className='lg:w-[150px] flex max-lg:justify-between lg:justify-end lg:items-start max-lg:flex-col lg:flex-row max-lg:h-[130px] max-lg:py-[12px] max-lg:px-[24px] right-0 text-center w-full  
                                 max-lg:fixed bottom-0 z-10 max-lg:border-t-2 max-lg:border-gray-300 bg-white'>
                            <a className='lg:underline lg:mr-3 inline-block text-[16px] max-lg:leading-[42px] max-lg:text-[#166aea] max-lg:border-2
                                 max-lg:border-[#166aea] max-lg:min-w-[137px] max-lg:rounded-[130px] text-center max-lg:w-full outline-none'>
                                    Log In
                            </a>
                            <a className='lg: text-[16px] max-lg:leading-[42px] max-lg:min-w-[137px] max-lg:w-full max-lg:rounded-[100px]
                                text-center max-lg:bg-[#166aea] max-lg:text-[#fff] decoration'>
                                    Get Started
                                </a>
                        </div>                            
                    </div>
               </div>                
            </div>
        </div>
    )
}
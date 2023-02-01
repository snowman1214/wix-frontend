export default function NavItem(props){
    return(
        <>
                        <div className='relative'>
                            <div className='px-[24px] h-[44px] flex items-center'>
                                <div className='text-[16px] flex justify-between w-full leading-[24px] text-left'>
                                    {props.itemTitle}
                                    <div className='flex pt-[3px] lg:ml-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="6 6 12 12">
                                            <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>    
        </>
    )
}
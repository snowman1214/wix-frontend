import { useState } from "react"

export default function SubLinkComponent({groupName, linkList}) {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="flex flex-col py-3 border-b-[1px] border-solid border-grey-400 last:border-b-[0] lg:pr-3 lg:w-[18%] lg:border-b-[0]">
            <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-bold">{groupName}</span>
                <span className={` transition-all lg:hidden ${isOpen ? " translate-x-0 translate-y-0 rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path></svg>
                </span>
            </div>
            <ul className={`${isOpen ? "" : "hidden lg:block"}`}>
                {linkList.map((element, index) => {
                    return <li className="text-left py-1 text-gray-500 lg:text-black lg:text-[14px]" key={index}><a href={element.link}>{element.name}</a></li>
                })}
            </ul>
        </div>
    )
}
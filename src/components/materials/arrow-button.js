export default function ArrowButton({link, text}){
    return (
        <>
            <a className="block underline pr-2 font-bold" href={link} >
                <div className="flex space-x-1">
                <span>{text}</span>
                <span className="block w-[16px] h-[16px] mt-2">
                    <svg data-bbox="0.4 0.3 17.5 11.7" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"></path></g></svg>
                </span>
                </div>
            </a>
        </>
    )
}
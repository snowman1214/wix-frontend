
export default function FAQComponent ({no, title, contentList}) {
    const contentText = (t, key) => <span className="text-lg" key={key}>{t}</span>
    const contentLink = (link, t, key) => <span className="text-lg" key={key}><a href={link} className="underline">{t}</a></span>
    return(
        <li className="flex flex-col border-b-[1px] border-gray-400 border-solid pb-10 last:border-b-[0]}">
            <div className="text-left py-2"><h1 className="text-[20px] font-bold">{no}.</h1></div>
            <div className="flex flex-col lg:flex-row">
                <div className="text-left py-1"><p className="text-[20px] lg:pr-[100px] lg:w-[400px]">{title}</p></div>
                <div className="text-left">
                    {contentList.map((element, index) => {
                        if(element.type == 'link')
                            return contentLink(element.link, element.text, index);
                        else
                            return contentText(element.text, index);
                    })}
                </div>
            </div>
        </li>
    )
}
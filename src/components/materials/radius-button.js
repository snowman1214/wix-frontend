export default function RadiusButton({link, style, text}) {
    return (<a className={`block px-5 py-2 text-[24px] rounded-[35px] cursor-pointer transition-all ${style}`} href={link}>{text}</a>)
}
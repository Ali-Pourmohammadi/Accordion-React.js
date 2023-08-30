 import Accordion from "./Accordion";
 function AccordionItem({ elementObj, number, curOpen, setCurOpen, children }) {
    function handleToggle() {
        setCurOpen(number);
    }
    const isOpen = curOpen === number;
    return (<div onClick={handleToggle}>
        <div className={`item ${isOpen ? "open" : ""}`}>
            <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
            <p className="title">{elementObj.title}</p>
            <p className="icon"> {isOpen ? "-" : "+"} </p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>

    </div>);
}
export default AccordionItem;
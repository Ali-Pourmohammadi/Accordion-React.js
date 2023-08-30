import { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "../data"
export default function Accordion(){
    const [currOpen , setCurOpen] = useState(null);
    return(<div>
        {
        data.map((element , i )=> <AccordionItem elementObj = {element} curOpen = {currOpen} setCurOpen = {setCurOpen}  key={element.id} number = {i}>
            {element.text}
        </AccordionItem>)
        }
    </div>)
}

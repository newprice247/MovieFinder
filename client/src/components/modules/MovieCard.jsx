
  import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon(props) {
  

 
  return (
    <>
      <Accordion 
      className="w-full mx-auto dark:bg-gray-800 rounded-lg shadow-md text-black bg-myColor-2"
      open={props.open}
      icon={<Icon id={props.key} open={props.openUseState} />}
      >
        <AccordionHeader 
        className="flex items-center justify-between cursor-pointer py-4 px-6 dark:text-myColor-3 dark:hover:text-myColor-4 border-0 text-md lg:text-xl text-gray-900 hover:text-myColor-4 transition-colors duration-150"
        onClick={props.onClick}
        >
          <img src={props.image_url} alt={props.name} className="lg:h-40 h-24 rounded-lg" />
          <p className="text-center font-medium">{props.name}</p>
        </AccordionHeader>
        <AccordionBody
        className="dark:text-myColor-3 text-lg leading-relaxed px-6 pb-6 flex flex-row justify-between dark:bg-myColor-1 dark:hover:text-myColor-1 transition-colors duration-150 bg-gray-300 "
        >
          <img src={props.image_url} alt={props.name} className="lg:w-1/8 md:w-1/6 sm:w-1/3 rounded-lg" />
          <div
            className="dark:text-myColor-3 text-lg leading-relaxed px-6 pb-6 flex flex-col items-center justify-center text-black"
          >
            <p className="text-md lg:text-lg font-medium">Description:</p>
          Release Date: {props.year}<br />
          </div>
          
        </AccordionBody>
      </Accordion>
    </>
  );
}
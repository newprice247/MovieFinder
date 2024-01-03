import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function SimplePagination(props) {

    return (
        <div className="flex items-center gap-8 ">
            <IconButton
                size="sm"
                variant="outlined"
                color="white"
                onClick={props.prev}
                disabled={props.active === 1}
                className="text-gray-100 hover:bg-gray-700 hover:text-white"
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 " />
            </IconButton>
            <Typography color="gray" className="font-normal text-gray-100 hover:bg-gray-700 hover:text-white">
                Page {" "}
                <strong className="text-gray-100 ">
                    {props.active}{" "}
                </strong>
                of{" "}
                <strong className="text-white">
                    {props.totalPages}{" "}
                </strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={props.next}
                disabled={props.active === props.totalPages}
                color="white"
                className="text-gray-100 hover:bg-gray-700 hover:text-white"
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}
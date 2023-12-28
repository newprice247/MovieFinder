import { Typography } from "@material-tailwind/react";

  export default function Movie(props) {
    return (
      <div className="flex flex-col items-center justify-center w-64 h-96">
        <img
          className="w-full h-3/4 rounded-lg"
          src={props.image}
          alt={props.title}
        />
        <div className="flex flex-col items-center justify-center w-full h-1/4 bg-gray-800 rounded-b-lg">
          <Typography variant="h6" color="white">
            {props.title}
          </Typography>
          <Typography variant="body2" color="white">
            {props.year}
          </Typography>
        </div>
      </div>
    );
  }
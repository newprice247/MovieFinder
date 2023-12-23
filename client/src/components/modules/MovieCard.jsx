// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//   } from "@material-tailwind/react";
   
//   export default function MovieCard(props) {
//     return (
//       <Card
//         shadow={false}
//         className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
//       >
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-no-repeat z-[-1] bg-[url(${props.image})]`}
//         >
//           <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//         </CardHeader>
//         <CardBody className="relative py-14 px-6 md:px-12">
//           <Typography
//             variant="h2"
//             color="black"
//             className="mb-6 font-medium leading-[1.5] text-black"
//           >
//             {props.title}
//           </Typography>
//           <Typography variant="h5" className="mb-4 text-black">
//             {props.releaseDate}
//           </Typography>
//         </CardBody>
//       </Card>
//     );
//   }

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function CardDefault(props) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={props.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>
          {props.releaseDate}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
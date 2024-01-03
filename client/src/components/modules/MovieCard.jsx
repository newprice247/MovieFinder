import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function SimpleCard(props) {
  return (
    <Card className="mt-6 w-48 items-center justify-between flex flex-col">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 sm:text-lg lg:text-sm font-semibold">
          {props.name}
        </Typography>
        <img 
        src={props.image_url} 
        alt={props.name} 
        className="w-full rounded-lg"
         />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
        onClick={props.onClick}
        >Read More</Button>
      </CardFooter>
    </Card>
  );
}
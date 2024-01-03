import { Checkbox } from "@material-tailwind/react";
 
export default function CheckboxRippleEffect(props) {
  return (
    <>
      <Checkbox id="ripple-on" label="Ripple Effect On" ripple={props.movieFilter} />
      <Checkbox id="ripple-off" label="Ripple Effect Off" ripple={props.tvFilter} />
    </>
  );
}
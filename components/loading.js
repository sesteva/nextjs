/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import SomeImage from "../public/bars.svg";

export default function loading() {
  return (
    <div className="flex flex-wrap">
      <img className=" w-40 h-40 mx-auto" src={SomeImage} alt="loader indicator" />
    </div>
  );
}

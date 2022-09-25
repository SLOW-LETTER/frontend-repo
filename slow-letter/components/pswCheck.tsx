import Image from "next/image";
import { icons } from "react-icons/lib";

interface Props {
  color: String;
  icon: string;
  visibility: string;
}

export default function PwCheck({ color, icon, visibility }: Props) {
  return (
    <>
      <div className="pswValid w-72 p-4 flex flex-col text-align justify-evenly gap-y-2 bg-white div-3 text-black rounded-lg drop-shadow-2xl border-2 border-neutral-400">
        <div>Requirements!</div>
        <div className="list flex flex-row rounded-md shadow">
          <Image src={icon} width="30px" height="30px"></Image>
          <div className="pwUpperC   text-center w-72 text-white">
            Contains an uppercase letter
          </div>
        </div>

        <div className="list flex flex-row  rounded-md shadow">
          <Image src={icon} width="30px" height="30px"></Image>
          <div className="pwLength text-center w-72 text-white">
            Minimum of 6 characters
          </div>
        </div>
        <div className="list flex flex-row rounded-md shadow">
          <Image src={icon} width="30px" height="30px"></Image>
          <div className="pwNumber text-center w-72 text-white">
            Contains a number
          </div>
        </div>

        <div className="list flex flex-row  rounded-md shadow">
          <Image id="icon" src={icon} width="30px" height="30px"></Image>
          <div className="pwSpecialC text-center w-72 text-white ">
            Contains a special character
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pswValid {
            visibility: ${visibility};
            position: absolute;
            top: 170px;
            right: -250px;
          }
          .list {
            background-color: ${color};
          }
          .icon {
          }
        `}
      </style>
    </>
  );
}
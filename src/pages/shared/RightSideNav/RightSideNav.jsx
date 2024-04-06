import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-2">Login with</h2>
      <button className="btn btn-outline w-full  my-2">
        <FaGoogle /> Login with Google
      </button>
      <button className="btn btn-outline w-full">
        <FaGithub /> Login with Google
      </button>
      <div className="p-4 ">
        <h2 className="text-3xl  my-2">Find Us On</h2>
        <a className="p-4 w-full flex items-center text-lg no-underline border-2 border-solid border-gray-300 rounded-t-lg" href="">
          <FaFacebook className="text-2xl mr-4"></FaFacebook>
          <p>Facebook</p>
        </a>
        <a className="p-4 w-full flex items-center text-lg no-underline border-2 border-solid border-gray-300 border-y-0" href="">
          <FaTwitter  className="text-2xl mr-4"></FaTwitter>
          <p>Twitter </p>
        </a>
        <a className="p-4 w-full flex items-center text-lg no-underline border-2 border-solid border-gray-300 rounded-b-lg" href="">
          <FaInstagram  className="text-2xl mr-4"></FaInstagram>
          <p>Instagram </p>
        </a>
      </div>
      {/* Q-zone */}
      <div className="p-4 ">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qZone1} />
        <img src={qZone2} />
        <img src={qZone3} />
        </div>
    </div>
  );
};

export default RightSideNav;

import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/images/social-media/facebook.png";
import instagram from "../../../public/images/social-media/instagram.png";
import linkedIn from "../../../public/images/social-media/linkedin.png";
import twitter from "../../../public/images/social-media/twitter.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-5 text-sm">
      <div>
        <span>@ 2023 </span>
        <Link href="https://www.mindfiredigitalllp.com/" target="_blank">
          <span className="text-mf-red hover:underline">
            Mindfire Digital LLP
          </span>
        </Link>
        <span>. All Right Reserved</span>
      </div>
      <div className="flex items-center gap-10">
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Terms of Use</span>
      </div>
      <div className="flex gap-3">
        <Image src={facebook} height={24} width={24} alt="facebook_img" />
        <Image src={instagram} height={24} width={24} alt="instagram_img" />
        <Image src={twitter} height={24} width={24} alt="twitter_img" />
        <Image src={linkedIn} height={24} width={24} alt="linkedIn_img" />
      </div>
    </div>
  );
};

export default Footer;

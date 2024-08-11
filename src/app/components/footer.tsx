import  Link from "next/link";
export default function Footer() {
    return (
        <div className="d-footer-main">
            <div>
                <img src="member.svg" alt="group" />
            </div>
            <div className="md:text-center">
                Copyright © 2024 Ducati Motor Holding S.p.A. 
                - A Sole Shareholder Company 
                - A Company subject to the Management and Coordination of AUDI AG. 
                All right reserved.
            </div>
            <div className="flex justify-center items-stretch content-center gap-10">
                <Link href="https://www.instagram.com/ducati/?utm_source=website&utm_medium=footermain&utm_campaign=social_banner">
                <img src="instagram-icon.svg" alt="ig-icon" width={30} height={30} />
                </Link>

                <Link href="https://www.youtube.com/user/DucatiMotorHolding">
                <img src="yt-icon.svg" alt="yt" width={30} height={30} />
                </Link>

                <Link href="https://www.tiktok.com/@ducati?utm_source=website&utm_medium=footermain&utm_campaign=social_banner">
                <img src="tiktok-icon.svg" alt="tt-icon" width={30} height={30} />
                </Link>
                
           
                <Link href="https://x.com/ducatimotor?utm_source=website&utm_medium=footermain&utm_campaign=social_banner">
                <img src="twitter-icon.svg" alt="twt-icon" width={30} height={30} />
                </Link>
            
                <Link href="https://www.linkedin.com/company/ducati-motor-holding/?utm_source=website&utm_medium=footermain&utm_campaign=social_banner">
                <img src="linkedin-icon.svg" alt="li-icon" width={30} height={30} />
                </Link>
            <div>

            </div>

            </div>
        </div>
    )
}
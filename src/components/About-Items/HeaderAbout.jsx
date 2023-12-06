import aboutInfo from "../../data/aboutInfo";
import { AboutComponent } from "./AboutComponent";

function Header() {
    return (
        <>
            <div>
                {aboutInfo.map((item, index) => (
                    <AboutComponent key={index} {...item} />
                ))}
            </div>
        </>
    )
}

export default Header;

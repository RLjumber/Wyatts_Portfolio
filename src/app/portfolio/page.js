import BladeRunner from "../bladerunner/page";
import Draw1 from "../cyberstreetcorner/page";
import Poster from "../poster/page";
import Gundam from "../gundam/page";
import SwordLord from "../swordlord/page";
import DualAngel from "../dualangel/page";
import CyberNoir from "../cybernoir/page";
import CyberCity from "../cybercity/page";
import PortfolioLanding from "./PortfolioLanding";
import styles from "./main.module.css";


export default function Portfolio() {
    return (
        <div className={styles.background}>
            <PortfolioLanding />
            <BladeRunner />
            <Draw1 />
            <Poster />
            <Gundam />
            <SwordLord />
            <DualAngel />
            <CyberNoir />
            <CyberCity />
        </div>
    )
}
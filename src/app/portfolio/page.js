import styles from "./portfolio.module.css";
import BladeRunner from "../BladeRunner";
import Draw1 from "../Draw1";
import Poster from "../Poster";


export default function Portfolio() {
    return (
        <div className={styles.main_div}>
            <h1>Portfolio</h1>
            <BladeRunner />
            <Draw1 />
            <Poster />
        </div>
    )
}
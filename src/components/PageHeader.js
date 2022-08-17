// custom styles
import styles from "../style/header.module.css";
// images & icons
import logo from "../assets/icons/books.png";
// ant design
import { Layout } from "antd"
import "antd/dist/antd.min.css"

const { Header } = Layout

const PageHeader = () => {
    return (
        <Header className={styles.container}>
            <img className={styles.icon} src={logo} />
            <p className={styles.title}>MyReads</p>
        </Header>
    )
}

export default PageHeader
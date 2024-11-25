import ProductsForm from "./ProductsForm";
import BasketForm from "./BasketForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../CSS/dashboard.module.css";

function Dashboard() {
  return (
    <main id={styles.dashboard}>
      <ToastContainer position="top-center" autoClose={3000} />
      <h1>Dashboard</h1>
      <div className={styles.dashFlex}>
        <ProductsForm />
        <BasketForm />
      </div>
    </main>
  );
}

export default Dashboard;

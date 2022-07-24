import styles from '../styles/Home.module.css'
import {useState, useEffect} from "react"

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:3000/unicorn"
      );
      const data = await response.json();
      setData(data.unicorns);
      console.log(data);
    })();
  }, []);


  return (
    <div className={styles.container}>
      <h1>Unicorn App</h1>
    </div>
  )
}

import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";


import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Daniel Campos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum deserunt dolor numquam iusto eum vero optio tempora perspiciatis impedit minima, esse cupiditate dicta! Ipsum nesciunt asperiores accusamus repudiandae sapiente."
          />
          <Post author="Diego" content="Teste" />
        </main>

      </div>
    </div>
  );
}

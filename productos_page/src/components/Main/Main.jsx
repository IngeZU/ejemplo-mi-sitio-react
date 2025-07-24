import styles from './Main.module.css';
import ProductCard from '../ProductCard/ProductCard';

const Main = () => (
    <main className={styles.main}>
        <ProductCard
            image="https://imgs.search.brave.com/FKGpU5n1jlmY20B07v64GAPPBPHPrr5ZpDCsPldqWZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90dWJl/bGl0ZWd0LnR1YmVs/aXRlY2VudHJvYW1l/cmljYS5jb20vY2Ru/L3Nob3AvcHJvZHVj/dHMvNzY2NTRmMmU5/YWMxMzIyY2Y1MDA4/YTk3NjRjMTFhY2Zf/MGQ5MzE5ODktMjg4/MC00YzgxLWJhMzMt/NmZkODRiMWRiNmI0/XzEwMjR4MTAyNF9j/cm9wX2NlbnRlci5q/cGc_dj0xNjgzMjEz/OTA4"
            title="Producto 1"
            price="19.99"
        />
        <ProductCard
            image="https://imgs.search.brave.com/SYeujCcIQ9pbqxm4z3yW9YhevJ7jYmrhhyzd60eeF18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFJSk82QVIzRkwu/anBn"
            title="Producto 2"
            price="24.99"
        />
        <ProductCard
            image="https://imgs.search.brave.com/Yi2WoFUiTFkHdRgC3XXwm6VW8DohkgSkzSeXwtND8RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYwMTYxOS1NTE03/NTkzMzI0MjEzM18w/NDIwMjQtRS1wbGF5/ZXJhLW1hbmdhLWNv/cnRhLTEwMC1hbGdv/ZG9uLTMwLWNvbG9y/ZXMteWF6YmVrLndl/YnA"
            title="Producto 3"
            price="15.00"
        />
    </main>
);

export default Main;
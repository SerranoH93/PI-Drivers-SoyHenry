import styles from './NotFound.module.css';

const error404 = "https://www.telegraph.co.uk/content/dam/spark/Images/robot-error.jpg";

export default function NotFound(props) {

    return (
        <div>
            <img src={error404} alt="Not Found" />
        </div>
    );
} 
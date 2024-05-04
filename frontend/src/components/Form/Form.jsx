import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

import styles from '../../styles/components/Form.module.scss';

const Form = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // loading screen is not used. Maybe to implement later
    
    const navigate = useNavigate();

    const name = method === "login" ? "Log in" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            };
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formName}>
                <h1 className={styles.h1Name}>{name}</h1>
            </div>
            <input
                className={styles.formInput}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Login"
            />
            <input
                className={styles.formInput}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {method === "login" &&
            <div className={styles.additionalLoginOptions}>
                <p className={styles.forgotPassword}>I forgot my password</p>
                <p className={styles.noAccount}>I don't have an account</p>
            </div>
            }
            <button className={styles.formButton} type="submit">
                {name}
            </button>
        </form>
    );
};

export default Form;
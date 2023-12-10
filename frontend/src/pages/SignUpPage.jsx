import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const SignUpPage = () => {
    let { loginUser } = useContext(AuthContext);

    return (
        <div>
            <h1 style={styles.title}>Sign Up</h1>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <form onSubmit={signUpUser} style={styles.form}>
						<input 
                            type="first_name" 
                            name="first_name" 
                            placeholder="First Name" 
                            style={styles.input} 
                        />
						<input 
                            type="last_name" 
                            name="last_name" 
                            placeholder="Last Name" 
                            style={styles.input} 
                        />
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter Username" 
                            style={styles.input} 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            style={styles.input} 
                        />
                        <input 
                            type="submit" 
                            value="Sign Up" 
                            style={styles.submitButton} 
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: '#F0F2F5',
    },
    formContainer: {
        maxWidth: '500px',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    input: {
        padding: '15px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px', // Larger font size for better readability
        backgroundColor: '#fff', // Ensuring the background is white
        color: 'black',
    },
    submitButton: {
        padding: '15px',
        borderRadius: '5px',
        backgroundColor: '#1877F2',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px', // Matching the font size with inputs
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'black'
    }
};

export default SignUpPage;

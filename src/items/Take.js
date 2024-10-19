import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// Definisikan CSS menggunakan const
const styles = {
    body: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh', 
        backgroundColor: '#f7f7f7'
    },
    
    title: {
        fontSize: '66px',
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '35px'
    },
    
    container: {
        width: '380px',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    },
    radioLabel: {
        marginRight: '20px'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#0CC5E5',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Laki-laki");
    const [telp, setTelp] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/user', {
                name,
                email,
                gender,
                telp
            });
            navigate("/Borrow");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={styles.body}>
            <div style={{textAlign:'center'}}>
            <h1 style={styles.title}>Registration</h1>
            <p style={styles.description}>Registration for taking a book!</p>
                <div style={styles.container}>
                <form onSubmit={saveUser}>
                    <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'  }}>
                    <p>Nama</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan Nama..."
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'  }}>
                    <p>Email</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukkan Email..."
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px', textAlign: 'left', color: 'black' }}>
                        <p>Jenis Kelamin</p>
                        <label style={styles.radioLabel}>
                            <input
                                type="radio"
                                value="Laki-laki"
                                checked={gender === 'Laki-laki'}
                                onChange={(e) => setGender(e.target.value)}
                            /> Laki-laki
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Perempuan"
                                checked={gender === 'Perempuan'}
                                onChange={(e) => setGender(e.target.value)}
                            /> Perempuan
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'  }}>
                    <p>No. Handphone</p>
                        <input
                            type="text"
                            value={telp}
                            onChange={(e) => setTelp(e.target.value)}
                            placeholder="Masukkan No. Handphone..."
                            style={styles.input}
                            required
                        />
                    </div>
                    <Link to="/Borrow" >Sudah pernah pinjam sebelumnya.</Link>
                    <div style={{ marginTop: '20px' }}>
                        <button type="submit" style={styles.button}><b>Save</b></button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddUser;

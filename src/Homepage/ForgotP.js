import styles from './ForgotP.module.css'
import { Button } from '@mui/material'

export default function Login() {
    
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.head}>
                    <p>Welcome to <span>FoodDX</span></p>
                </div>
                <p>Enter username or email  address</p>
                <input style={{ height: '45px' }} type="text" placeholder='Enter username or email address' />
                <p>Enter Six Digit verification Code</p>
                <input style={{ height: '45px' }} type="text" />
                <Button variant="contained" disableElevation>
                    Verify
                </Button>
            </div>
        </div>
    )
}
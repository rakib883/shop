
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PaymentSuccess = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        // Show the alert and then navigate after the alert is closed
        Swal.fire("Order and pament succesfully").then(() => {
            navigate("/");
        });
    }, [navigate]); // Add navigate to dependency array

    return (
        <div>
            <div className="container bg-green-600 text-white max-w-md mx-auto my-8">
                <p className="text-center py-4 font-sans">Your order is complete</p>
            </div>
        </div>
    );
}

export default PaymentSuccess;

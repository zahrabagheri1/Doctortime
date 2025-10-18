import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentComplete = ({ backendURL }) => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState(null);
  const sessionId = params.get("session_id");

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await axios.get(
        `${backendURL}/api/user/payment-session-status?session_id=${sessionId}`
      );
      setStatus(data);
    };
    if (sessionId) fetchStatus();
  }, [sessionId]);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Payment Result</h2>
      {status ? (
        <div>
          <p>Status: {status.status}</p>
          <p>Payment Status: {status.payment_status}</p>
          <p>Intent ID: {status.payment_intent_id}</p>
          <p>Intent Status: {status.payment_intent_status}</p>
        </div>
      ) : (
        <p>Loading payment info...</p>
      )}
    </div>
  );
};

export default PaymentComplete;

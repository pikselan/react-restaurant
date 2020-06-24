import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(err) {
  if (err) {
    let message;
    if (err.response) {
      if (err.response.status === 500) message = "Something went wrong";
      else message = err.response.message;

      console.log(message);
      toast(message);
      return Promise.reject(err);
    }
  }
}

export default errorResponseHandler;

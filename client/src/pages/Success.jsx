import {useLocation, useParams} from "react-router";

const Success = () => {
    const location = useLocation();
    console.log(location);
    const {data} = useParams();
    console.log(data);
  return (
    <div>Success</div>
  )
}

export default Success
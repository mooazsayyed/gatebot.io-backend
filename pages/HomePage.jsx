import { useEffect, useState } from "react";
import axios from "axios";
import Services from "../components/Service.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [services, setServices] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const getServices = async () => {
        try {
            setIsLoading(true);
            const response  = await axios.get("http://localhost:8000/api/gatebot/services");
            console.log(response.data);
            setServices(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false); 
        };
    };
    useEffect(() => {
        getServices();
    }, [])

    return (
        <div>
            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    Create a Service
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? (
                    "Loading..."
                ) : (
                    <>
                        {services && services.length > 0 ? (
                            services.map((service, index) => (
                                <Services key={index} service={service} />
                            ))
                        ) : (
                            <div>
                                There is no product
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
export default HomePage;
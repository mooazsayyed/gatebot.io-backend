import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState({
        serviceName: "",
        serviceImage: "",
        serviceDetails: "",
        serviceCharges: "",
    });

    const getServices = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/gatebot/services/${id}`);
            setServices(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getServices();
    }, [id]);

    const updateService = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.put(`http://localhost:3000/api/gatebot/services/${id}`, services);
            toast.success("Update a Service successfully");
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            // toast.error(error.message);
        }
    };

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Update a Service
            </h2>
            {isLoading ? "Loading..." : (
                <form onSubmit={updateService}>
                    <div className="space-y-2">
                        <div>
                            <label>Service Name</label>
                            <input type="text" value={services.serviceName} onChange={(e) => setServices({ ...services, serviceName: e.target.value })} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" onChange={(e) => setServices({ ...services, serviceImage: e.target.files[0] })} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" />
                        </div>
                        <div>
                            <label>Details</label>
                            <input type="text" value={services.serviceDetails} onChange={(e) => setServices({ ...services, serviceDetails: e.target.value })} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Details" />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" value={services.serviceCharges} onChange={(e) => setServices({ ...services, serviceCharges: e.target.value })} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                        </div>
                        <div>
                            {!isLoading && <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Update</button>}
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default EditPage;

import { Link } from "react-router-dom";

const Services = ({ service }) => { 
    const deleteService = (id) => {
        // Add your delete service logic here
    }

    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={`data:image/jpeg;base64,${service.serviceImage}`} className="w-full h-28 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{service.serviceName}</h2>
                <div className="text-sm">Details: {service.serviceDetails}</div>
                <div className="text-sm">Charges: ${service.serviceCharges}</div>

                <div className="mt-2 flex gap-4">
                    <Link to={`/edit/${service._id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                    <button onClick={() => deleteService(service._id)}  className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
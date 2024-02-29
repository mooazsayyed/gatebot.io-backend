import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const [serviceName, setName] = useState("");
    const [serviceImage, setImage] = useState(null);
    const [serviceDetails, setDetails] = useState("");
    const [serviceCharges, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        if (serviceName === "" || !serviceImage || serviceDetails === "" || serviceCharges === "") {
            alert('Please fill out all input completely');
            return;
        }

        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append("serviceName", serviceName);
            formData.append("serviceImage", serviceImage);
            formData.append("serviceDetails", serviceDetails);
            formData.append("serviceCharges", serviceCharges);

            const response = await axios.post(`http://localhost:3000/api/gatebot/services`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setIsLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="macro">
                <h1>Create Page</h1>
            </div>
            <form onSubmit={saveProduct}>
                <div className="space -y-2">
                    <label>Service Name</label>
                    <input type="text" value={serviceName} onChange={(e) => setName(e.target.value)} className="" />
                </div>
                <div className="space -y-2">
                    <label>Service Image</label>
                    <input type="file" onChange={handleImageChange} accept="serviceImage/*" />
                </div>
                <div className="space -y-2">
                    <label>Service Details</label>
                    <input type="text" value={serviceDetails} onChange={(e) => setDetails(e.target.value)} className="" />
                </div>
                <div className="space -y-2">
                    <label>Service Price</label>
                    <input type="text" value={serviceCharges} onChange={(e) => setPrice(e.target.value)} className="" />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePage;

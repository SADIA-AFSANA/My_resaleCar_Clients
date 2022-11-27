import { useQuery } from '@tanstack/react-query';
import React from 'react';


const ManageProducts = () => {
    const { data: products, } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    return (
        <div>
            <h2 className='text-3xl'>Manage product :{products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Email</th>
                            <th>Specialty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td></td>
                                <td>{product.name}</td>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.Specialty}</td>

                            </tr>)


                        }
                        {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
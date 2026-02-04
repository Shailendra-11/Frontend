import React, { useContext } from "react";
import ContextApi from "./Propsdilling";

export const Card = () => {
  const { data, loading, error } = useContext(ContextApi);

   console.log(data);
   

  if (loading) return <p className="text-center text-blue-500 text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
     {data?.products?.map((product) => (
       <div
         key={product.id}
         className="bg-white shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
       >
         {/* Product Image */}
         <img
           src={product.images[0]} // Use product.images[0] if it's an array
           alt={product.title}
           className="w-full h-48 object-cover rounded-t-xl"
         />
         
         {/* Product Details */}
         <div className="p-4">
           <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
           <p className="text-sm text-gray-600 mt-2">{product.description}</p>
         </div>
       </div>
     ))}
   </div>
   
  );
};

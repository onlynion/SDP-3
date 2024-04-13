import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'

const CartPage = () => {
  const [cart, refetch] = useCart();

  // handleDeleteBtn
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:6001/carts/${item._id}`,{
        method: "DELETE"
       }).then(res => res.json()).then(data => {
        if(data.deletedCount > 0){
          refetch()
          Swal.fire({
            title: "Removed!",
            text: "Item removed",
            icon: "success"
          });
        }
       })
      }
    });
  }

  return (
    // banner
    <div className="section-container">
      <div className="section-container ">
        <div className="py-36 flex flex-col  justify-center items-center gap-8">
          {/* Text */}
          <div className="  space-y-7 px-4">
            <h1 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added To The <span className="text-green">Cart</span>
            </h1>
          </div>
        </div>
      </div>

      {/* table for the cart */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="t"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">
                    {item.name}
                  </td>
                  <td>{item.quantiy}</td>
                  <td>৳{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs text-red" onClick={() => handleDelete(item)}> <FaTrash/> </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

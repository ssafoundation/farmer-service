import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageItem = ({ _id, name, price, setAlertShow, setAlertErrShow }) => {
   const [id, setId] = useState('');

   useEffect(() => {
      id &&
         axios
            .delete(`https://mighty-tor-42350.herokuapp.com/services/delete/${id}`)
            .then(() => {
               setAlertShow(true);
               setAlertErrShow(false);
            })
            .catch(() => {
               setAlertErrShow(true);
               setAlertShow(false);
            });
   }, [id, setAlertShow, setAlertErrShow]);

   return (
      <tr>
         <td>{name}</td>
         <td>${price}</td>
         <td>
            <button
               className="delete-btn text-danger"
               onClick={() => setId(_id)}
            >
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </td>
      </tr>
   );
};

export default ManageItem;

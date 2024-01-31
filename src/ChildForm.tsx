// ChildForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function ChildForm({ register, index }) {
  return (
    <div>
      {/* Form fields and validation */}
      <input
        className=" border-black border w-20 rounded-full text-black text-center p-2"
        {...register(`childForms.${index}.field1`)}
      />
      {/* Add more fields as needed */}
    </div>
  );
}

export default ChildForm;

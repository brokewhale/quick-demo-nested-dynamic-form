// ParentComponent.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ChildForm from './ChildForm';
import DynamicInputs from './Testin';

function ParentComponent() {
  const allDataFomat = [
    {
      name: 'bayo',
      data: [],
    },
  ];

  const [allData, setAllData] = useState([]);
  const handleSetAllData = (name, data) => {
    // setAllData([...allData, data]);
    // console.log('sss', data);

    updateData(name, data);
  };

  const updateData = (name, data) => {
    // Check if allData is empty
    if (allData.length === 0) {
      // If empty, add a new object to the array
      setAllData([
        {
          name: name,
          data: data,
        },
      ]);
    } else {
      // If not empty, check if there is an object with the provided name
      const existingIndex = allData.findIndex((item) => item?.name === name);

      if (existingIndex !== -1) {
        // If an object with the name exists, update its data
        setAllData((prevData) => {
          const newData = [...prevData];
          newData[existingIndex] = {
            name: name,
            data: data,
          };
          return newData;
        });
      } else {
        // If no object with the name exists, add a new object to the array
        setAllData((prevData) => [
          ...prevData,
          {
            name: name,
            data: data,
          },
        ]);
      }
    }
  };

  // Example usage:
  const customerDetails = [
    {
      name: 'John',
      points: 500,
    },
    {
      name: 'Jane',
      points: 600,
    },
  ];
  return (
    <div>
      {customerDetails.map((detail, index) => (
        // <ChildForm key={index} register={register} index={index} />
        <DynamicInputs handleSetAllData={handleSetAllData} detail={detail} />
      ))}
      <button
        onClick={() => {
          console.log(allData);
        }}
      >
        jsdhsdjhdbdb
      </button>
    </div>
  );
}

export default ParentComponent;

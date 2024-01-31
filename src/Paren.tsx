import React from 'react';
import DynamicInputs from './Testin'; // Assuming DynamicInputs is in a separate file

function ParentComponent() {
  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    // Add your logic for handling the submitted data
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        {/* Render multiple instances of DynamicInputs */}
        <DynamicInputs />
        <DynamicInputs />
        {/* You can add more DynamicInputs components as needed */}
      </div>

      <button type="submit">Submit All</button>
    </form>
  );
}

export default ParentComponent;

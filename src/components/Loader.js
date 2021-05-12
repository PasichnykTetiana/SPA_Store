import React, { useState, useEffect } from 'react';

export const Loader = ({ type = 'text-primary' }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={`spinner-border ${type}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

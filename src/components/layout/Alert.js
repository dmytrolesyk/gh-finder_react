import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert && 
    <div className={`alert alert-${alertContext.alert.type}`}>
      <span className="fas fa-info-circle"></span> {alertContext.alert.msg}
    </div>
  );
}

export default Alert;

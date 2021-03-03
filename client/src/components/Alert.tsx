import React from "react";

export interface IAlert {
  style: string;
  message: string;
 
}

export const Alert: React.FC<IAlert> = (props: IAlert) => {
  return (
    <div>
      <div key={props.message} className={`alert alert-${props.style}`}>
        {props.message}
      </div>
      
    </div>
  );
};

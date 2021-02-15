import React, { Component } from "react";

import { Dropdown} from "react-bootstrap";


function FixedPlugin() {
  return (
    <div className="fixed-plugin">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-fixed-plugin"
          variant=""
          className="text-white border-0 opacity-100"
        >
          <i className="fas fa-cogs fa-2x mt-1"></i>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;

import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const FilterDropDown = () => {
  const { allInvoices, setFilterAllInvoices } = useContext(INVOICE_CONTEXT);

  const [checkedItems, setCheckedItems] = useState([]);

  const filterValues = ["draft", "pending", "paid"];

  const handleCheckbox = (e) => {
    setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    //cloning the data array
    const allInvoiceCopy = [...allInvoices];
    const data = allInvoiceCopy.filter((data) => checkedItems[data.status]);
    setFilterAllInvoices(data);
  }, [allInvoices, setFilterAllInvoices, checkedItems]);

  return (
    <Dropdown className="filter-button">
      <Dropdown.Toggle
        className="filter-button"
        style={{ width: "157px" }}
        variant="transparent"
      >
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu variant="secondary" className="px-3 ">
        {filterValues.map((value, i) => {
          return (
            <Form.Check
              key={i}
              className="text-capitalize mt-2"
              name={value.toLowerCase()}
              value={value}
              onChange={handleCheckbox}
              checked={checkedItems[i]}
              type="checkbox"
              label={value}
            />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropDown;

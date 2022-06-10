import { createContext, useState } from "react";
import { useForm, useFieldArray, useController } from "react-hook-form";

export const INVOICE_CONTEXT = createContext();

const INVOICECONTEXTPROVIDER = ({ children }) => {
  const [allInvoices, setAllInvoices] = useState([]);
  const [singleInvoice, setSingleInvoice] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [filterAllInvoices, setFilterAllInvoices] = useState([]);
  const customerInfo = {
    senderAddress: {
      street: "19 Union Terrace",
      city: "Toronto",
      postCode: "M3C 1S9",
      country: "Canada"
    },
    clientAddress: {
      city: "",
      street: "",
      postCode: "",
      country: ""
    },
    invoiceNumber: "",
    clientEmail: "",
    clientName: "",
    status: "",
    createdAt: "",
    paymentTerms: "",
    paymentDue: "",
    description: "",
    items: [{ name: "", quantity: "", price: "", total: "" }],
    total: ""
  };
  const {
    control,
    getValues,
    setValue,
    handleSubmit,
    register,
    useWatch,
    formState: { errors }
  } = useForm({
    defaultValues: customerInfo
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "items"
  });

  //const {} = useController();
  const [inputDataValues, setInputDataValues] = useState(customerInfo);

  return (
    <INVOICE_CONTEXT.Provider
      value={{
        name: "Invoices",
        allInvoices,
        setAllInvoices,
        filterAllInvoices,
        setFilterAllInvoices,
        singleInvoice,
        setSingleInvoice,
        showDeleteModal,
        setShowDeleteModal,
        showOffCanvas,
        setShowOffCanvas,
        isEditing,
        setIsEditing,
        customerInfo,
        control,
        handleSubmit,
        register,
        errors,
        fields,
        update,
        remove,
        useWatch,
        getValues,
        setValue,
        inputDataValues,
        setInputDataValues,
        append
      }}
    >
      {children}
    </INVOICE_CONTEXT.Provider>
  );
};

export default INVOICECONTEXTPROVIDER;

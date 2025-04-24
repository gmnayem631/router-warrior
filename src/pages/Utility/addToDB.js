import { toast } from "react-toastify";

const getStoredDoc = () => {
  const storeDocStr = localStorage.getItem("appointmentList");
  if (storeDocStr) {
    const sotredDocData = JSON.parse(storeDocStr);
    return sotredDocData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedDocData = getStoredDoc();
  if (storedDocData.includes(id)) {
    toast.error("Appointment Exists");
  } else {
    storedDocData.push(id);
    const data = JSON.stringify(storedDocData);
    localStorage.setItem("appointmentList", data);
  }
};

export { addToStoredDB };

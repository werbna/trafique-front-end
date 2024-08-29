const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/trips`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const show = async (tripId) => {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (tripFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createLogEntry = async (tripId, logEntryFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}/logs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntryFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, show, create, createLogEntry };

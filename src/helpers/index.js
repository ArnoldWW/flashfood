export function generateId(length = 16) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export function generateIDWithOnlyNumbers(length = 16) {
  const characters = "123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      // Skip the first iteration to avoid starting with zero
      continue;
    }
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export function timestampToDate(timestamp) {
  // Create a new Date object from the Timestamp
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // Format the date using the toLocaleDateString() method, including the hour
  const formattedDate = date.toLocaleDateString("es-CO", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  return formattedDate;
}

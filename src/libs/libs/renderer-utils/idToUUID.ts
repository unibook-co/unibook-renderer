export const idToUuid = (id = "") =>
  `${id.substring(0, 8)}-${id.substring(8, 12)}-${id.substring(
    12,
    16
  )}-${id.substring(16, 20)}-${id.substring(20)}`;

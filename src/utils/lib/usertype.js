export const USER_TYPES = {
  BUSINESS: "business",
  FREELANCER: "freelancer",
};

export function getUserType(userType) {
  return Object.values(USER_TYPES).includes(userType)
    ? userType
    : null;
}

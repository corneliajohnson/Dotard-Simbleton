export const singleBussiness = (businessObj) => {
  return `
    <h3>${businessObj.companyName}</h3>
    <p>${businessObj.addressFullStreet}</p>
    <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
    <hr>
  `
}
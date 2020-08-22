export const singleBussiness = (businessObj) => {
  return `
  <h2>
  ${businessObj.companyName}
  </h2>
  <section>
  ${businessObj.addressFullStreet}

  </section>
  <section>
  ${businessObj.addressCity},
  ${businessObj.addressStateCode}
  ${businessObj.addressZipCode}
  </section>
  `
}
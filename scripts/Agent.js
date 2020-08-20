export const singleAgent = (agentObj) => {
  return `
  <article class="agents">
    <h3>${agentObj.fullName}</h3>
    <p>${agentObj.company}</p>
    <p>${agentObj.phoneNumber}</p>
    <hr>
  </article>
  `
}

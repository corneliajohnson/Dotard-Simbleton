import { useBusinesses } from './BusinessProvider.js';
import { singleBussiness } from './Business.js'

const businesses = useBusinesses()
let activeBussinessUI = document.querySelector(".active-businesses")



export const businessList = () => {
  activeBussinessUI.innerHTML = '<h1>Active Businesses</h1>';
  businesses.forEach(business => {
    activeBussinessUI.innerHTML += singleBussiness(business)
  });

  return activeBussinessUI
}
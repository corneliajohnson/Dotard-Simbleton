import { useBusinesses } from './BusinessProvider.js';
import { singleBussiness } from './Business.js'

const businesses = useBusinesses()
const companySearchResultArticle = document.querySelector(".foundCompanies")

export const businessList = () => {
  //show all bussinesses
  firstBussinessList()

  document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
      if (keyPressEvent.charCode === 13) {
        companySearchResultArticle.innerHTML = '<h1> Active Bussinees</h1>'

        for (const bussiness of businesses) {
          //check for seach mataches
          let bussinessinSearch = bussiness.companyName.includes(keyPressEvent.target.value);

          // there is a match add to dom
          if (bussinessinSearch) {
            companySearchResultArticle.innerHTML += `${singleBussiness(bussiness)}`
          }
        }
      }
    });
}


//initial HTML on back -show all active bussinesses
const firstBussinessList = () => {
  companySearchResultArticle.innerHTML = '<h2> Active Bussinees</h2>';
  businesses.forEach(business => {
    companySearchResultArticle.innerHTML += singleBussiness(business)
  });
  return companySearchResultArticle
}
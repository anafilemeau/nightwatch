module.exports = {
  'TestSearch': function (browser) {
   var centris = browser.page.centris();
   
   centris
    .navigate()

    .waitForElementVisible('@searchForm',time=5000, poll=1, abortOnAssertionFailure=false)

    .waitForElementVisible('@searchInput',time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@searchInput','Québec')
    
    .waitForElementVisible('@comboRegion',time=5000, poll=1, abortOnAssertionFailure=false)
    
    .waitForElementVisible('@optionComboAllRegion',time=5000, poll=1, abortOnAssertionFailure=false)
    .click('@optionComboAllRegion')
  
    .waitForElementVisible('@buttonResidential', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@buttonResidential', 'active')
    .click('@buttonResidential')
    .click('@buttonResidential')
    
    .waitForElementVisible('@buttonRent', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@buttonResidential', 'active')
    .click('@buttonRent')
    .click('@buttonRent')

    .waitForElementVisible('@optionAdvancedCriterias', time=5000, poll=1, abortOnAssertionFailure=false)
    .click('@optionAdvancedCriterias')
    
    .waitForElementVisible('@buttonPropertyType', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@buttonPropertyType', 'active')
    .click('@buttonPropertyType')
    .click('@buttonPropertyType')

    .waitForElementVisible('@dropNumberRooms', time=5000, poll=1, abortOnAssertionFailure=false)
    .waitForElementPresent('@optionDropRooms', time=5000, poll=1, abortOnAssertionFailure=false)
    .click('@dropNumberRooms')
    .click('@optionDropRooms')

    .waitForElementVisible('@optionNew', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@optionNew', 'active')
    .click('@optionNew')
    .click('@optionNew')
    
    .waitForElementVisible('@optionYearsLess', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@optionYearsLess', 'active')
    .click('@optionYearsLess')
    .click('@optionYearsLess')

    .waitForElementVisible('@rangePriceMin', time=5000, poll=1, abortOnAssertionFailure=false)
    .click('@rangePriceMin')
    .setValue('@rangePriceMin','[10, 80]') 
    
    .waitForElementVisible('@rangePriceMax', time=5000, poll=1, abortOnAssertionFailure=false)
    .click('@rangePriceMax')
    .setValue('@rangePriceMax','[10, 80]')

    .waitForElementVisible('@buttonSearch', time=5000, poll=1, abortOnAssertionFailure=false)
    .setValue('@buttonSearch', 'active')
    .click('@buttonSearch')
    .click('@buttonSearch')

    browser.page.results().navigate()
    .assertVisible('@resultForm')

    .end() 
  },
};

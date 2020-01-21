module.exports = {
  url: 'https://www.centris.ca/',
  elements:{
    searchForm:{
      selector: '/html[1]/body[1]/div[1]/header[1]/div[1]/div[2]/div[2]/div[1]/div[1]',
      locateStrategy: 'xpath'
    },
    searchInput:{
      selector: '#search'
    },
    comboRegion: {
      selector: '#ui-id-1',
    },
    optionComboAllRegion: {
      selector: '/html[1]/body[1]/ul[1]/li[6]',
      locateStrategy: 'xpath'
    },
    rangePriceMin:{
      selector: '//fieldset[@id="container-basic-criterias"]//a[1]',
      locateStrategy: 'xpath'
    },
    rangePriceMax:{
      selector: '//fieldset[@id="container-basic-criterias"]//a[2]',
      locateStrategy: 'xpath'
    },
    buttonResidential:{
      selector: '//div[@id="Category"]/button[1]',
      locateStrategy: 'xpath'
    },
    buttonRent:{
      selector: '//div[@id="SellingType"]/button[2]',
      locateStrategy: 'xpath'
    },
    optionAdvancedCriterias:{
      selector: '#btn-advanced-criterias'
    },  
    buttonPropertyType:{
      selector: '//button[@id="RentCondo"]',
      locateStrategy: 'xpath'
    },
    dropNumberRooms:{
      selector: '//div[@id="Rooms-dropdown"]',
      locateStrategy: 'xpath'
    },
    optionDropRooms:{
      selector: '//li[contains(text(),"2 chambres et +")]',
      locateStrategy: 'xpath'
    },
    optionNew:
    {
      selector: '//button[@id="New"]',
      locateStrategy: 'xpath'
    },
    optionYearsLess:
    {
      selector: '//button[@id="10YearOrLess"]',
      locateStrategy: 'xpath'
    },
    buttonSearch:{
      selector: '//div[@class="btn-container"]//button[@class="btn btn-search"][contains(text(),"Rechercher")]',
      locateStrategy: 'xpath'
    }
  }
};
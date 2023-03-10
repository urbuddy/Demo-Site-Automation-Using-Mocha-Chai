module.exports = {
    emailinput :"form[autocomplete='on'] > div > input[autocomplete='off']",
    submitButton: "//button[text()='Request OTP']",
    emailerror: "//span[text()='Please enter valid Email ID/Mobile number']",
    xbtn: "//button[contains(text(), '✕')]",
    linkbtn: "//div[starts-with(text(), 'SAMSUNG Watch 4')]",
    searchinput: "input[name='q']",
    searchbtn: "form[action='/search'] > div > button[type='submit']",
    productlistclass: "//span[contains(text(), 'Sort By')]",
    productlist: "._4rR01T",
    productnamexpath: "//h1/span",
    productname: "h1 > span",
    pricexpath: "//div[starts-with(text(), '₹')]",
    addtocartbtn: "//button[text()='Add to cart']",
    pricedetails: "//span[text()='Price details']",
    storagexpath: "//div[text()='Highlights']//following-sibling::div/ul/li",
    screensizexpath: "//div[text()='Highlights']//following-sibling::div/ul/li[2]",
    cameraxpath: "//div[text()='Highlights']//following-sibling::div/ul/li[3]",
    batteryxpath: "//div[text()='Highlights']//following-sibling::div/ul/li[4]",
    processorxpath: "//div[text()='Highlights']//following-sibling::div/ul/li[5]",
    actualPricexpath: "//div[text()='Price (1 item)']//parent::div//following-sibling::span",
    disscountxpath: "//div[text()='Discount']//parent::div//following-sibling::div",
    deliveryChargesxpath: "//div[text()='Delivery Charges']//parent::div//following-sibling::span",
    packagingFeexpath: "//div[text()='Secured Packaging Fee']//parent::div//following-sibling::span",
    totalCostxpath: "//div[text()='Total Amount']//parent::div//following-sibling::span",
};
// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
wTaxAndFees = [];
function getPriceWithTaxAndFees() {
  //var list = document.getElementsByClassName("MnBECc");
  var list  = $("span.MnBECc");
  for (let item of list) {
    console.log(item);
    if (item.textContent.includes("$")) {
      x = item.textContent.split(" ");
      //x[0] will be the price
      x = parseInt(x[0].substring(1));
      wTaxAndFees.push(x);
      //item.replaceWith("");
    }
  }
}
basePrice = [];
counter = 0;
function getPriceWithoutTaxAndFees() {
  var list = document.getElementsByClassName("wqcQP");
  for(let item of list) {
    if(item.textContent.includes("$")) {
      x = item.textContent.split(" ");
      if(x.length == 1) {
        //x[0] will be the price 
        x = parseInt(x[0].substring(1));
        basePrice.push(x);
        item.replaceWith("$"+wTaxAndFees[counter]);
        counter++;
      } else {
        //x[2].slice(0,-1) will be the price
          x = parseInt(x[2].substring(1));
          basePrice.push(x);
          $(".iKUFxe").replaceWith("Book for $" + wTaxAndFees[counter]);
          counter++;
      }
    }
  }
}
function setLowest() {
  realLowestPrice = Math.min(...wTaxAndFees);
  $("div.PQl5I>div>c-wiz>div>div")[0].innerHTML = "$"+realLowestPrice;
//  console.log(realLowestPrice);
//  console.log( $("div.PQl5I>div>c-wiz>div>div"));
}
getPriceWithTaxAndFees();
getPriceWithoutTaxAndFees();
setLowest();
console.log(wTaxAndFees);
console.log(basePrice);
//$("div.PQl5I>div>c-wiz>div>div").childNodes[0].replaceWith(realLowestPrice);


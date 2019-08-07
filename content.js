wTaxAndFees = [];
basePrice = [];

function setLowest() {
	realLowestPrice = Math.min(...wTaxAndFees);
	$("div.PQl5I>div>c-wiz>div>div")[0].innerHTML = "$" + realLowestPrice;
	$("div.TKHEpb>section>div:nth-child(2)>c-wiz>div:nth-child(4)>div>button").textContent = "View more prices from $";
	$("div.ct-active>div").textContent = "View more prices from $";
	$("span.ct-active").textContnent = "View more prices from $";
	$("button.ct-active").textContent = "View more prices from $";
	$("div.TKHEpb>section>div:nth-child(2)>c-wiz>div:nth-child(4)>div>button").innerText = "View more prices from $";
	$("div.ct-active>div").innerText = "View more prices from $";
	$("span.ct-active").innerText = "View more prices from $";
	$("button.ct-active").innerText = "View more prices from $";
	$("div.TKHEpb>section>div:nth-child(2)>c-wiz>div:nth-child(4)>div>button").outerText = "View more prices from $";
	$("div.ct-active>div").outerText = "View more prices from $";
	$("span.ct-active").outerText = "View more prices from $";
	$("button.ct-active").outerText = "View more prices from $";
	try {
		
	} catch {
			console.log("problem with expand");
		}
}

function getPriceAndSet() {
	var websitePrice = $("div.Tubrbd");
	for (let item of websitePrice) {
		var realPrice = 0;
		//var taxSubtext = $("item>span>span.MnBECc");
		var taxSubtext = $("span.MnBECc", item);
		var taxSubtextAlt = $("");
		var wrongPrices = document.getElementsByClassName("wqcQP");
		//var wrongPricesAlt = $("item>div>span>span.wqcQP");
		var wrongPricesAlt = $("span.wqcQP", item)[0];
		for (let ital of taxSubtext) {
			if (ital.textContent.includes("$")) {
				x = ital.textContent.split(" ");
				//x[0] will be the price
				x = x[0].replace(/,/g, "");
				realPrice = parseInt(x.substring(1));
				wTaxAndFees.push(realPrice);
				//item.replaceWith("");
			}
		}
		try{
		if (wrongPricesAlt.textContent.includes("$")) {
			x = wrongPricesAlt.textContent.split(" ");
			if (x.length == 1) {
				//x[0] will be the price 
				x = x[0].replace(/,/g, "");
				x = x.substring(1);
				x = parseInt(x);
				basePrice.push(x);
				wrongPricesAlt.replaceWith("$" + realPrice);
			} else {
				//x[2].slice(0,-1) will be the price
				x = x[2].replace(/,/g, "");
				x = parseInt(x.substring(1));
				basePrice.push(x);
				$(".iKUFxe").replaceWith("Book for $" + realPrice);
			}
		}
		}
		catch {
			console.log("No price for one item");
			}
	}
}

setTimeout(function () {
	getPriceAndSet()
	setLowest()
}, 9000)

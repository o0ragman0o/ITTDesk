import "./sales.html"

Template.sales.helpers ({
	"sales": function () {
		return Sales.find({}, {sort: {blockNumber: -1}});
	},
})
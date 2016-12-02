import "./trader.html";

Template.traderAccount.onCreated (function (){
	this.autorun(setButtons);
})

Template.traderAccount.helpers({
	name: function () {
		return ittDict["account"].get().name;
	},
	account: function () {
		return ittDict["account"].get().address;
	},
	balance: function () {
		return EthTools.formatNumber(ittDict["accountBalance"].get(), "0,0.00[0000]");
	},
})

Template.traderAccount.events({
	'click button.modal': function(){
		// show modal
		EthElements.Modal.show('accountList');
	},
})


Template.accountList.helpers({
	accounts: function () {
		return EthAccounts.find().fetch();
	}
})

Template.accountList.events({
	'click button.accButton': function(){
		EthElements.Modal.hide();
		ittAPI.setTradeAccount(this);
		ittAPI.updateDesk();
		console.log(this);
	},
})
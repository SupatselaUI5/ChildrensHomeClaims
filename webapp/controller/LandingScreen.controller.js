sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("dsdg.ChildrensHomeClaims.controller.LandingScreen", {
		onInit: function () {
			this._mViewSettingsDialogs = {};

		},

		createFormDialog: function (sDialogFragmentName) {

			// https://stackoverflow.com/questions/55667673/how-to-remove-duplicates-and-display-only-unique-values-in-viewsettingsitem
			var oDialog = this._mViewSettingsDialogs[sDialogFragmentName];
			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(sDialogFragmentName, this);
				this._mViewSettingsDialogs[sDialogFragmentName] = oDialog;

				if (Device.system.desktop) {
					oDialog.addStyleClass("sapUiSizeCompact");
				}
			}
			return oDialog;
		},

		handleCommittedButtonPressed: function () {
			this.createFormDialog("dsdg.ChildrensHomeClaims.Fragments.CommittedChildren").open();
		},
		

		handlePlaceofSafetyButtonPressed: function () {
			this.createFormDialog("dsdg.ChildrensHomeClaims.Fragments.SafeCareFacility").open();
		},

	handleStaffButtonPressed: function () {
			this.createFormDialog("dsdg.ChildrensHomeClaims.Fragments.StaffManagement").open();
		},
		onCancel: function () {
			//Cater for the age group selected 
			var oDialogKey,
				oDialogValue;

			for (oDialogKey in this._mViewSettingsDialogs) {
				oDialogValue = this._mViewSettingsDialogs[oDialogKey];

				if (oDialogValue) {
					oDialogValue.close();
					// oDialogValue = null;
				}
			}
		},

		onAddChildrenItem: function (oEvent) {
			var oTable = this.byId("tblChildren");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("ccSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ccDoB").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ccDoA").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		},
		
		onAddPlaceofSafetyItem: function (oEvent) {
			var oTable = this.byId("tblPlaceofSafety");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("posSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("posDoB").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("posDoA").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		},
		
			onAddResourceItem: function (oEvent) {
			var oTable = this.byId("tblResource");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("sfSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("sfID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("sfGender").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		}
		

	});
});

		
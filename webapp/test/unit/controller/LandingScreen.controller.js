/*global QUnit*/

sap.ui.define([
	"dsdg/ChildrensHomeClaims/controller/LandingScreen.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LandingScreen Controller");

	QUnit.test("I should test the LandingScreen controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
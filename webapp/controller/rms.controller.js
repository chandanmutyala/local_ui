

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("localisation.controller.rms", {
            onInit: function () {
                var url = "./odata/ScopeItems";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    contentType: "application/json",
 
                    success: function (data) {
                        console.log(data);
 
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
 
                });

            },
            onNewPress: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteCRMS");
            },

            // onSavePress: function(oEvent) {
            //     var oModel = this.getView().getModel(); // Assuming you have the OData model
            //     var oView = this.getView();
                
            //     // Get form data
            //     var autoId = oView.byId("customerName").getBindingContext().getProperty("autoId");
            //     var brandGuardianStatus = oView.byId("brand").getSelectedKey();
            //     var globalServicesStatus = oView.byId("global").getSelectedKey();// Assuming multiple countries selected
                
            //     if (autoId) {
            //         var oData = {
            //             "brandGuardianStatus": brandGuardianStatus,
            //             "globalServicesStatus": globalServicesStatus
            //         };
            
            //         // Make PATCH request
            //         oModel.update("/MissingScopeItems(" + autoId + ")", oData, {
            //             method: "PATCH",
            //             success: function(data) {
            //                 sap.m.MessageToast.show("Update successful!");
            //             },
            //             error: function(error) {
            //                 sap.m.MessageToast.show("Update failed!");
            //             }
            //         });
            //     } else {
            //         sap.m.MessageToast.show("AutoId not found!");
            //     }
            // },
            
            // onSavePress: async function () {
            //     // Get the view
            //     var oView = this.getView();
            
            //     // Get the table control and its items
            //     var oTable = oView.byId("idProductsTable");
            //     var aItems = oTable.getItems(); // Array of table rows
            //     var oModel = this.getView().getModel();
            
            //     // Loop through each row and collect the updated data
            //     for (var i = 0; i < aItems.length; i++) {
            //         var oItem = aItems[i];
            
            //         // Extract the binding context for each item (row)
            //         var oContext = oItem.getBindingContext();
            
            //         // Get the values of brand and global ComboBox
            //         var sBrandGuardianStatus = oItem.getCells()[3].getSelectedKey(); // ComboBox for brand
            //         var sGlobalServicesStatus = oItem.getCells()[4].getSelectedKey(); // ComboBox for global
            
            //         // Get the autoId (primary key) of the row
            //         var sAutoId = oContext.getProperty("autoId");
            
            //         // Construct the payload for the update
            //         var oPayload = {
            //             autoId: sAutoId,
            //             brandGuardianStatus: sBrandGuardianStatus,
            //             globalServicesStatus: sGlobalServicesStatus
            //         };
            
            //        //Create a filter based on autoId to identify the correct record
            //         let oBindList = oModel.bindList("/MissingScopeItems");
            //         let aFilter = new sap.ui.model.Filter("autoId", sap.ui.model.FilterOperator.EQ, sAutoId);
           
            //         // Apply the filter and request the context for the filtered item
            //         oBindList.filter([aFilter]).requestContexts().then(function (aContexts) {
            //             if (aContexts && aContexts.length > 0) {
            //                 // Update the properties on the matched context
            //                 aContexts[0].setProperty("brandGuardianStatus", sBrandGuardianStatus);
            //                 aContexts[0].setProperty("globalServicesStatus", sGlobalServicesStatus);
           
            //                 // Submit the changes to the backend
            //                 oModel.submitBatch("updateGroup").then(function () {
            //                     sap.m.MessageToast.show("Record updated successfully!");
            //                 }).catch(function (oError) {
            //                     sap.m.MessageToast.show("Failed to update record: " + oError.message);
            //                 });
 
 
                           
            //             }
            //         }).catch(function (oError) {
            //             sap.m.MessageToast.show("Failed to retrieve context: " + oError.message);
            //         });
            //     }
            // },
            // onSavePress: function () {
            //     // Get the view and model
            //     var oView = this.getView();
            //     var oModel = this.getView().getModel(); // OData V4 Model
           
            //     // Get the table control and its items
            //     var oTable = oView.byId("idProductsTable");
            //     var aItems = oTable.getItems(); // Array of table rows
           
            //     // Loop through each row and update data based on ComboBox selections
            //     for (var i = 0; i < aItems.length; i++) {
            //         var oItem = aItems[i];
           
            //         // Get autoId (primary key) of the row
            //         var sAutoId = oItem.getBindingContext().getProperty("autoId");
           
            //         // Get selected values of the ComboBoxes
            //         var sBrandGuardianStatus = oItem.getCells()[3].getSelectedKey(); // ComboBox for brand
            //         var sGlobalServicesStatus = oItem.getCells()[4].getSelectedKey(); // ComboBox for global
           
            //         // Create a filter based on autoId to identify the correct record
            //         let oBindList = oModel.bindList("/MissingScopeItems");
            //         let aFilter = new sap.ui.model.Filter("autoId", sap.ui.model.FilterOperator.EQ, sAutoId);
           
            //         // Apply the filter and request the context for the filtered item
            //         oBindList.filter([aFilter]).requestContexts().then(function (aContexts) {
            //             if (aContexts && aContexts.length > 0) {
            //                 // Update the properties on the matched context
            //                 aContexts[0].setProperty("brandGuardianStatus", sBrandGuardianStatus);
            //                 aContexts[0].setProperty("globalServicesStatus", sGlobalServicesStatus);
           
            //                 // Submit the changes to the backend
            //                 oModel.submitBatch("updateGroup").then(function () {
            //                     sap.m.MessageToast.show("Record updated successfully!");
            //                 }).catch(function (oError) {
            //                     sap.m.MessageToast.show("Failed to update record: " + oError.message);
            //                 });
 
 
                           
            //             }
            //         }).catch(function (oError) {
            //             sap.m.MessageToast.show("Failed to retrieve context: " + oError.message);
            //         });
            //     }
            // }
          
            
            onSavePress: function (oEvent) {
                // Get the view and model
                var oView = this.getView();
                var oModel = oView.getModel(); // OData V4 Model
            
                // Get the table control
                var oTable = oView.byId("idProductsTable");
                
                
                // Get the selected item (single selection)
                var oSelectedItem = oTable.getSelectedItem(); // Only works if SingleSelect mode is used
            
                if (oSelectedItem) {
                    // Get autoId (primary key) of the selected row
                    var sAutoId = oSelectedItem.getBindingContext().getProperty("autoId");
            
                    // Get selected values of the ComboBoxes
                    var sBrandGuardianStatus = oSelectedItem.getCells()[3].getSelectedKey(); // ComboBox for brand
                    var sGlobalServicesStatus = oSelectedItem.getCells()[4].getSelectedKey(); // ComboBox for global
            
                    // Create a filter based on autoId to identify the correct record
                    let oBindList = oModel.bindList("/MissingScopeItems");
                    let aFilter = new sap.ui.model.Filter("autoId", sap.ui.model.FilterOperator.EQ, sAutoId);
            
                    // Apply the filter and request the context for the filtered item
                    oBindList.filter([aFilter]).requestContexts().then(function (aContexts) {
                        if (aContexts && aContexts.length > 0) {
                            // Update the properties on the matched context
                            aContexts[0].setProperty("brandGuardianStatus", sBrandGuardianStatus);
                            aContexts[0].setProperty("globalServicesStatus", sGlobalServicesStatus);
            
                            // Submit the changes to the backend
                            oModel.submitBatch("updateGroup").then(function () {
                                sap.m.MessageToast.show("Record updated successfully!");
                            }).catch(function (oError) {
                                sap.m.MessageToast.show("Failed to update record: " + oError.message);
                            });
                        }
                    }).catch(function (oError) {
                        sap.m.MessageToast.show("Failed to retrieve context: " + oError.message);
                    });
                } else {
                    sap.m.MessageToast.show("No item selected.");
                }
            }
            
           
            ,
            
            // onSavePress: function () {
            //     // Get the view and model
            //     var oView = this.getView();
            //     var oModel = this.getView().getModel(); // OData V4 Model
           
            //     // Get the table control and its items
            //     var oTable = oView.byId("idProductsTable");
            //     var aItems = oTable.getItems(); // Array of table rows
           
            //     // Loop through each row and update data based on ComboBox selections
            //     for (var i = 0; i < aItems.length; i++) {
            //         var oItem = aItems[i];
           
            //         // Get autoId (primary key) of the row
            //         var sAutoId = oItem.getBindingContext().getProperty("autoId");
           
            //         // Get selected values of the ComboBoxes
            //         var sBrandGuardianStatus = oItem.getCells()[3].getSelectedKey(); // ComboBox for brand
            //         var sGlobalServicesStatus = oItem.getCells()[4].getSelectedKey(); // ComboBox for global
           
            //         // Create a filter based on autoId to identify the correct record
            //         let oBindList = oModel.bindList("/MissingScopeItems");
            //         let aFilter = new sap.ui.model.Filter("autoId", sap.ui.model.FilterOperator.EQ, sAutoId);
           
            //         // Apply the filter and request the context for the filtered item
            //         oBindList.filter([aFilter]).requestContexts().then(function (aContexts) {
            //             if (aContexts && aContexts.length > 0) {
            //                 // Update the properties on the matched context
            //                 aContexts[0].setProperty("brandGuardianStatus", sBrandGuardianStatus);
            //                 aContexts[0].setProperty("globalServicesStatus", sGlobalServicesStatus);
           
            //                 // Submit the changes to the backend
            //                 oModel.submitBatch("updateGroup").then(function () {
            //                     sap.m.MessageToast.show("Record updated successfully!");
            //                 }).catch(function (oError) {
            //                     sap.m.MessageToast.show("Failed to update record: " + oError.message);
            //                 });
 
 
                           
            //             }
            //         }).catch(function (oError) {
            //             sap.m.MessageToast.show("Failed to retrieve context: " + oError.message);
            //         });
            //     }
            // }
           
            });
            
            });


    

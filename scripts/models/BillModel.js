;(function (application, BB) {
    application.models.BillModel = BB.Model.extend({
        
        initialize: function() {
            
            Backbone.on("save", function (bill) {
                
                this.set("bill", bill);
                

                this.save();

            }, this);
            
            Backbone.on("delAll", function () {

               
                this.set("bill", 0);
                this.save();

            }, this);
            
           
        },

        url:"orders.json"
        
        


    });
} (APP, Backbone)); 
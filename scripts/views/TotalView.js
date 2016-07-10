;(function (application, BB) {
    application.views.TotalView =BB.View.extend({

        tagName: 'tr',

        template: _.template($("#price").html()),
        initialize: function () {

            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
} (APP, Backbone));
answer('app-core-controller', ['s#utils','s#new-event', 's#app-core-model'], function(u, E, model) {
	/**
	 * @TODO create i18n,conf ask.js plugins
	 * @TODO create app-core-model module extends vita-model
	 * @TODO app-core-controller should extends from vita-controller
	 **/
    return {

        _callbacks : [],
        
		i18n : {
            title : 'Hello World !'
        },

		model : model,

        markAsDelete : function(el, user) {
            var toDelete = user.get('to-delete');
            if (!toDelete) user.set('to-delete', true);
            else user.set('to-delete', false);
        },

        deleteMarkedUsers : function() {
            console.log('size to-delete', this.model.get('vitaUsers').where({
                'to-delete' : true
            }).size());
            this.model.get('vitaUsers').removeWhere({
                'to-delete' : true
            });
            console.log('after', this.model.get('vitaUsers').size());
        }

    };

});

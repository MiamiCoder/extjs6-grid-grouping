Ext.application({
	name: 'SampleApp',
	extend: 'Ext.app.Application',
	models: ['ModelCar'],
	stores: ['ModelCars'],
	views: ['MainContainer'],
	mainView: 'SampleApp.view.MainContainer'
});

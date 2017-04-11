module.exports = function(app) {
  app.dataSources.postgresDS.automigrate('DemoObject', function(err) {
    if(err) throw err;

    app.models.DemoObject.create([{
      stringAttr: 'Hardcoded string#1',
      numberAttr: 1,
      booleanAttr: true
    }], function(err, demoObjects) {
      if(err) throw err;

      console.log('Models created: \n', demoObjects);
    });
  });

};

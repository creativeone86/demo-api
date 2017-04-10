module.exports = function(app) {
  app.dataSources.postgresDS.automigrate('CoffeeShop', function(err) {
    if(err) throw err;

    app.models.CoffeeShop.create([{
      name: 'Bel Cafe',
      city: 'Vancouver',
      capacity: 111
    }, {
      name: 'Three Bees Coffee House',
      city: 'San Mateo',
      capacity: 222
    }, {
      name: 'Caffe Artigiano',
      city: 'Vancouver',
      capacity: 333
    },], function(err, coffeeShops) {
      if(err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });

  app.dataSources.postgresDS.automigrate('Product', function(err) {
    if(err) throw err;

    app.models.Product.create([{
      title: 'Bel Cafe',
      quantity: 1
    }, {
      title: 'Three Bees Coffee House',
      quantity: 2
    }, {
      title: 'Caffe Artigiano',
      quantity: 3
    },], function(err, products) {
      if(err) throw err;

      console.log('Models created: \n', products);
    });
  });
};

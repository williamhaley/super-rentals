'use strict';

define('super-rentals/tests/acceptance/list-rentals-test', ['exports', 'qunit', 'super-rentals/tests/helpers/module-for-acceptance', 'ember'], function (exports, _qunit, _superRentalsTestsHelpersModuleForAcceptance, _ember) {

  var StubMapsService = _ember['default'].Service.extend({
    getMapElement: function getMapElement() {
      return document.createElement('div');
    }
  });

  (0, _superRentalsTestsHelpersModuleForAcceptance['default'])('Acceptance | list rentals', {
    beforeEach: function beforeEach() {
      this.application.register('service:mockMaps', StubMapsService);
      this.application.inject('component:location-map', 'maps', 'service:mockMaps');
    }
  });

  (0, _qunit.test)('should redirect to rentals route', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });

  (0, _qunit.test)('should link to about page', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contacts page', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });

  (0, _qunit.test)('should initially list 3 rentals', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.results .listing').length, 3, 'should display 3 listings');
    });
  });

  (0, _qunit.test)('should list 1 rental when filtering by Seattle', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(find('.results .listing').length, 1, 'should display 1 listing');
      assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
    });
  });

  (0, _qunit.test)('should show details for a specific rental', function (assert) {
    visit('/rentals');
    click('a:contains("Grand Old Mansion")');
    andThen(function () {
      assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
      assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
      assert.equal(find('.description').length, 1, 'should list a description of the property');
    });
  });
});
define('super-rentals/tests/acceptance/list-rentals-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/list-rentals-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass jshint.');
  });
});
define('super-rentals/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('super-rentals/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('super-rentals/tests/components/list-filter.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/list-filter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass jshint.');
  });
});
define('super-rentals/tests/components/location-map.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/location-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/location-map.js should pass jshint.');
  });
});
define('super-rentals/tests/components/rental-listing.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/rental-listing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass jshint.');
  });
});
define('super-rentals/tests/controllers/rentals.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/rentals.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals.js should pass jshint.');
  });
});
define('super-rentals/tests/controllers/rentals/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/rentals/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals/index.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('super-rentals/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'super-rentals/tests/helpers/start-app', 'super-rentals/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _superRentalsTestsHelpersStartApp, _superRentalsTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _superRentalsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _superRentalsTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('super-rentals/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/rental-property-type.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/rental-property-type.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/resolver', ['exports', 'super-rentals/resolver', 'super-rentals/config/environment'], function (exports, _superRentalsResolver, _superRentalsConfigEnvironment) {

  var resolver = _superRentalsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _superRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _superRentalsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('super-rentals/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/setup-mirage-for-unit-test', ['exports', 'super-rentals/initializers/ember-cli-mirage'], function (exports, _superRentalsInitializersEmberCliMirage) {
  exports['default'] = startMirage;

  function startMirage(container) {
    _superRentalsInitializersEmberCliMirage['default'].initialize(container);
  }
});
define('super-rentals/tests/helpers/setup-mirage-for-unit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/setup-mirage-for-unit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/setup-mirage-for-unit-test.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/start-app', ['exports', 'ember', 'super-rentals/app', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsApp, _superRentalsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _superRentalsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _superRentalsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('super-rentals/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('super-rentals/tests/integration/components/list-filter-test', ['exports', 'ember-qunit', 'rsvp', 'ember-test-helpers/wait'], function (exports, _emberQunit, _rsvp, _emberTestHelpersWait) {

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | list filter', {
    integration: true
  });

  var ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
  var FILTERED_ITEMS = [{ city: 'San Francisco' }];

  (0, _emberQunit.test)('should initially load all listings', function (assert) {
    var _this = this;

    assert.expect(3);
    this.on('filterByCity', function (val) {
      assert.equal(val, '');
      return _rsvp['default'].resolve(ITEMS);
    });

    this.render(Ember.HTMLBars.template({
      'id': 'gvYz+5ru',
      'block': '{"statements":[["text","\\n"],["block",["list-filter"],null,[["filter"],[["helper",["action"],[["get",[null]],"filterByCity"],null]]],1],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["static-attr","class","city"],["flush-element"],["text","\\n          "],["append",["unknown",["item","city"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","      "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["rentals"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":["rentals"]}],"hasPartials":false}',
      'meta': {}
    }));

    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this.$('.city').length, 3);
      assert.equal(_this.$('.city').first().text().trim(), 'San Francisco');
    });
  });

  (0, _emberQunit.test)('should update with matching listings', function (assert) {
    var _this2 = this;

    this.on('filterByCity', function (val) {
      if (val === '') {
        return _rsvp['default'].resolve(ITEMS);
      } else {
        return _rsvp['default'].resolve(FILTERED_ITEMS);
      }
    });

    this.render(Ember.HTMLBars.template({
      'id': 'gvYz+5ru',
      'block': '{"statements":[["text","\\n"],["block",["list-filter"],null,[["filter"],[["helper",["action"],[["get",[null]],"filterByCity"],null]]],1],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["static-attr","class","city"],["flush-element"],["text","\\n          "],["append",["unknown",["item","city"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","      "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["rentals"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":["rentals"]}],"hasPartials":false}',
      'meta': {}
    }));

    this.$('.list-filter input').val('San').keyup();

    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this2.$('.city').length, 1);
      assert.equal(_this2.$('.city').text().trim(), 'San Francisco');
    });
  });
});
define('super-rentals/tests/integration/components/list-filter-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/list-filter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass jshint.');
  });
});
define('super-rentals/tests/integration/components/location-map-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var StubMapsService = _ember['default'].Service.extend({

    getMapElement: function getMapElement(location) {
      this.set('calledWithLocation', location);
      return document.createElement('div');
    }
  });

  (0, _emberQunit.moduleForComponent)('location-map', 'Integration | Component | location map', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('service:maps', StubMapsService);
      this.inject.service('maps', { as: 'mapsService' });
    }
  });

  (0, _emberQunit.test)('should append map element to container element', function (assert) {
    this.set('myLocation', 'New York');
    this.render(_ember['default'].HTMLBars.template({
      'id': 'Hc/lGxnZ',
      'block': '{"statements":[["append",["helper",["location-map"],null,[["location"],[["get",["myLocation"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.map-container').children().length, 1, 'container should have one child');
    assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'should call service with New York');
  });
});
define('super-rentals/tests/integration/components/location-map-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/location-map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/location-map-test.js should pass jshint.');
  });
});
define('super-rentals/tests/integration/components/rental-listing-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  (0, _emberQunit.moduleForComponent)('rental-listing', 'Integration | Component | rental listing', {
    integration: true
  });

  (0, _emberQunit.test)('should toggle wide class on click', function (assert) {
    assert.expect(3);
    var stubRental = _ember['default'].Object.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
    this.set('rentalObj', stubRental);
    this.render(_ember['default'].HTMLBars.template({
      'id': 'hYb+5FYZ',
      'block': '{"statements":[["append",["helper",["rental-listing"],null,[["rental"],[["get",["rentalObj"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
  });
});
define('super-rentals/tests/integration/components/rental-listing-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/rental-listing-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass jshint.');
  });
});
define('super-rentals/tests/models/rental.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/rental.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass jshint.');
  });
});
define('super-rentals/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('super-rentals/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/rentals.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/rentals.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/rentals/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/rentals/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/index.js should pass jshint.');
  });
});
define('super-rentals/tests/routes/rentals/show.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/rentals/show.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/show.js should pass jshint.');
  });
});
define('super-rentals/tests/services/maps.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/maps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/maps.js should pass jshint.');
  });
});
define('super-rentals/tests/test-helper', ['exports', 'super-rentals/tests/helpers/resolver', 'ember-qunit'], function (exports, _superRentalsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_superRentalsTestsHelpersResolver['default']);
});
define('super-rentals/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('super-rentals/tests/unit/adapters/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/controllers/rentals/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:rentals/index', 'Unit | Controller | rentals/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/rentals/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals/index-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/models/rental-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('rental', 'Unit | Model | rental', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.get('store')();
    assert.ok(!!model);
  });
});
define('super-rentals/tests/unit/models/rental-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/rental-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/contact-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index');

  (0, _emberQunit.test)('should transition to rentals route', function (assert) {
    var route = this.subject({
      replaceWith: function replaceWith(routeName) {
        assert.equal(routeName, 'rentals', 'transition to route name rentals');
      }
    });
    route.beforeModel();
  });
});
define('super-rentals/tests/unit/routes/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/rentals-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:rentals', 'Unit | Route | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/rentals-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/rentals/index-test', ['exports', 'ember-qunit', 'super-rentals/tests/helpers/setup-mirage-for-unit-test', 'ember'], function (exports, _emberQunit, _superRentalsTestsHelpersSetupMirageForUnitTest, _ember) {

  (0, _emberQunit.moduleFor)('route:rentals/index', 'Unit | Route | rentals/index', {
    needs: ['model:rental', 'adapter:application'],
    beforeEach: function beforeEach() {
      (0, _superRentalsTestsHelpersSetupMirageForUnitTest['default'])(this.container);
    },
    afterEach: function afterEach() {
      window.server.shutdown();
    }
  });

  (0, _emberQunit.test)('should load all rentals', function (assert) {
    var route = this.subject();
    return _ember['default'].run(function () {
      return route.model().then(function (results) {
        assert.equal(results.get('length'), 3);
      });
    });
  });
});
define('super-rentals/tests/unit/routes/rentals/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/rentals/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/index-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/routes/rentals/show-test', ['exports', 'ember', 'ember-qunit', 'super-rentals/tests/helpers/setup-mirage-for-unit-test'], function (exports, _ember, _emberQunit, _superRentalsTestsHelpersSetupMirageForUnitTest) {

  (0, _emberQunit.moduleFor)('route:rentals/show', 'Unit | Route | rentals/show', {
    needs: ['model:rental', 'adapter:application'],
    beforeEach: function beforeEach() {
      (0, _superRentalsTestsHelpersSetupMirageForUnitTest['default'])(this.container);
    },
    afterEach: function afterEach() {
      window.server.shutdown();
    }
  });

  (0, _emberQunit.test)('should load rental by id', function (assert) {
    var route = this.subject();
    return _ember['default'].run(function () {
      return route.model({ rental_id: 'grand-old-mansion' }).then(function (result) {
        assert.equal(result.get('title'), "Grand Old Mansion");
      });
    });
  });
});
define('super-rentals/tests/unit/routes/rentals/show-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/rentals/show-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/show-test.js should pass jshint.');
  });
});
define('super-rentals/tests/unit/services/maps-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var DUMMY_ELEMENT = {};

  var MapUtilStub = _ember['default'].Object.extend({
    createMap: function createMap(element, location) {
      this.assert.ok(element, 'createMap called with element');
      this.assert.ok(location, 'createMap called with location');
      return DUMMY_ELEMENT;
    }
  });

  (0, _emberQunit.moduleFor)('service:maps', 'Unit | Service | maps', {
    needs: ['util:google-maps']
  });

  (0, _emberQunit.test)('should create a new map if one isnt cached for location', function (assert) {
    assert.expect(4);
    var stubMapUtil = MapUtilStub.create({ assert: assert });
    var mapService = this.subject({ mapUtil: stubMapUtil });
    var element = mapService.getMapElement('San Francisco');
    assert.ok(element, 'element exists');
    assert.equal(element.className, 'map', 'element has class name of map');
  });

  (0, _emberQunit.test)('should use existing map if one is cached for location', function (assert) {
    assert.expect(1);
    var stubCachedMaps = _ember['default'].Object.create({
      sanFrancisco: DUMMY_ELEMENT
    });
    var mapService = this.subject({ cachedMaps: stubCachedMaps });
    var element = mapService.getMapElement('San Francisco');
    assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
  });
});
define('super-rentals/tests/unit/services/maps-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/maps-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/maps-test.js should pass jshint.');
  });
});
define('super-rentals/tests/utils/google-maps.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/google-maps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/google-maps.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map

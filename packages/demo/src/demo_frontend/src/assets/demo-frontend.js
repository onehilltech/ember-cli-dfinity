'use strict';



;define("demo-frontend/actors/hello", ["exports", "ember-cli-dfinity", "demo-frontend/declarations/demo_backend.did"], function (_exports, _emberCliDfinity, _demo_backend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _emberCliDfinity.actorFromIdlFactory)(_demo_backend.idlFactory, 'HelloActor');
  _exports.default = _default;
});
;define("demo-frontend/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo-frontend/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "demo-frontend/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("demo-frontend/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("demo-frontend/components/code-snippet", ["exports", "ember-cli-code-snippet/components/code-snippet"], function (_exports, _codeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _codeSnippet.default;
    }
  });
});
;define("demo-frontend/components/demo/hello", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-cli-dfinity"], function (_exports, _component, _templateFactory, _component2, _object, _tracking, _emberCliDfinity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="demo-hello">
    <MdcForm @validity={{this.validity}} @submit={{this.submit}}>
      <MdcTextfield @style="outlined" @label="Enter a name here" required="true" @value={{this.name}} />
  
      <MdcButton type="submit" @label="Submit" @style="unelevated" disabled={{this.isSubmitButtonDisabled}} />
    </MdcForm>
  
    <div class="demo-hello__greeting"><b>Greeting:</b> {{this.greeting}}</div>
  </div>
  
  */
  {
    "id": "hlCbdVMy",
    "block": "[[[10,0],[14,0,\"demo-hello\"],[12],[1,\"\\n  \"],[8,[39,0],null,[[\"@validity\",\"@submit\"],[[30,0,[\"validity\"]],[30,0,[\"submit\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],[[24,\"required\",\"true\"]],[[\"@style\",\"@label\",\"@value\"],[\"outlined\",\"Enter a name here\",[30,0,[\"name\"]]]],null],[1,\"\\n\\n    \"],[8,[39,2],[[16,\"disabled\",[30,0,[\"isSubmitButtonDisabled\"]]],[24,4,\"submit\"]],[[\"@label\",\"@style\"],[\"Submit\",\"unelevated\"]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[10,0],[14,0,\"demo-hello__greeting\"],[12],[10,\"b\"],[12],[1,\"Greeting:\"],[13],[1,\" \"],[1,[30,0,[\"greeting\"]]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"mdc-form\",\"mdc-textfield\",\"mdc-button\"]]",
    "moduleName": "demo-frontend/components/demo/hello.hbs",
    "isStrictMode": false
  });
  let DemoHelloComponent = (_dec = (0, _emberCliDfinity.actor)({
    canister: 'demo_backend'
  }), (_class = class DemoHelloComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "valid", _descriptor2, this);
      _initializerDefineProperty(this, "submitting", _descriptor3, this);
      _initializerDefineProperty(this, "greeting", _descriptor4, this);
      // Bind to the hello actor deployed to the hello_backend canister using the default agent.
      _initializerDefineProperty(this, "hello", _descriptor5, this);
    }
    validity(valid) {
      this.valid = valid;
    }
    async submit() {
      try {
        this.submitting = true;
        this.greeting = await this.hello.greet(this.name);
      } catch (err) {
        this.snackbar.showError(err);
      } finally {
        this.submitting = false;
      }
    }
    reset() {
      this.submitting = false;
      this.name = null;
    }
    get isSubmitButtonDisabled() {
      return !this.valid || this.submitting;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "valid", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "submitting", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "greeting", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "hello", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "validity", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validity"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = DemoHelloComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DemoHelloComponent);
});
;define("demo-frontend/components/inline-code-snippet", ["exports", "ember-cli-code-snippet/components/inline-code-snippet"], function (_exports, _inlineCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inlineCodeSnippet.default;
    }
  });
});
;define("demo-frontend/components/mdc-button-link-to", ["exports", "ember-cli-mdc-button/components/mdc-button-link-to"], function (_exports, _mdcButtonLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcButtonLinkTo.default;
    }
  });
});
;define("demo-frontend/components/mdc-button", ["exports", "ember-cli-mdc-button/components/mdc-button"], function (_exports, _mdcButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcButton.default;
    }
  });
});
;define("demo-frontend/components/mdc-floating-label", ["exports", "ember-cli-mdc-floating-label/components/mdc-floating-label"], function (_exports, _mdcFloatingLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcFloatingLabel.default;
    }
  });
});
;define("demo-frontend/components/mdc-form", ["exports", "ember-cli-mdc-form/components/mdc-form"], function (_exports, _mdcForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcForm.default;
    }
  });
});
;define("demo-frontend/components/mdc-icon-button-icon", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-icon"], function (_exports, _mdcIconButtonIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonIcon.default;
    }
  });
});
;define("demo-frontend/components/mdc-icon-button-link-to", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-link-to"], function (_exports, _mdcIconButtonLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonLinkTo.default;
    }
  });
});
;define("demo-frontend/components/mdc-icon-button-toggle", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-toggle"], function (_exports, _mdcIconButtonToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonToggle.default;
    }
  });
});
;define("demo-frontend/components/mdc-icon-button", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button"], function (_exports, _mdcIconButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButton.default;
    }
  });
});
;define("demo-frontend/components/mdc-icon", ["exports", "ember-cli-mdc-icon/components/mdc-icon"], function (_exports, _mdcIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIcon.default;
    }
  });
});
;define("demo-frontend/components/mdc-line-ripple", ["exports", "ember-cli-mdc-line-ripple/components/mdc-line-ripple"], function (_exports, _mdcLineRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcLineRipple.default;
    }
  });
});
;define("demo-frontend/components/mdc-notched-outline-leading", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-leading"], function (_exports, _mdcNotchedOutlineLeading) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineLeading.default;
    }
  });
});
;define("demo-frontend/components/mdc-notched-outline-notch", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-notch"], function (_exports, _mdcNotchedOutlineNotch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineNotch.default;
    }
  });
});
;define("demo-frontend/components/mdc-notched-outline-trailing", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-trailing"], function (_exports, _mdcNotchedOutlineTrailing) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineTrailing.default;
    }
  });
});
;define("demo-frontend/components/mdc-notched-outline", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline"], function (_exports, _mdcNotchedOutline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutline.default;
    }
  });
});
;define("demo-frontend/components/mdc-password-textfield-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-password-textfield-with-helper-text"], function (_exports, _mdcPasswordTextfieldWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcPasswordTextfieldWithHelperText.default;
    }
  });
});
;define("demo-frontend/components/mdc-password-textfield", ["exports", "ember-cli-mdc-textfield/components/mdc-password-textfield"], function (_exports, _mdcPasswordTextfield) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcPasswordTextfield.default;
    }
  });
});
;define("demo-frontend/components/mdc-textarea-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textarea-with-helper-text"], function (_exports, _mdcTextareaWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextareaWithHelperText.default;
    }
  });
});
;define("demo-frontend/components/mdc-textarea", ["exports", "ember-cli-mdc-textfield/components/mdc-textarea"], function (_exports, _mdcTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextarea.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-helper-text"], function (_exports, _mdcTextfieldHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldHelperText.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield-icon", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-icon"], function (_exports, _mdcTextfieldIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldIcon.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield-input", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-input"], function (_exports, _mdcTextfieldInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldInput.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield-textarea", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-textarea"], function (_exports, _mdcTextfieldTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldTextarea.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-with-helper-text"], function (_exports, _mdcTextfieldWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldWithHelperText.default;
    }
  });
});
;define("demo-frontend/components/mdc-textfield", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield"], function (_exports, _mdcTextfield) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfield.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-action-item", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-action-item"], function (_exports, _mdcTopAppBarActionItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarActionItem.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-navigate-up-to", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-navigate-up-to"], function (_exports, _mdcTopAppBarNavigateUpTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarNavigateUpTo.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-navigation-icon", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-navigation-icon"], function (_exports, _mdcTopAppBarNavigationIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarNavigationIcon.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-row", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-row"], function (_exports, _mdcTopAppBarRow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarRow.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-section", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-section"], function (_exports, _mdcTopAppBarSection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarSection.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar-title", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar-title"], function (_exports, _mdcTopAppBarTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarTitle.default;
    }
  });
});
;define("demo-frontend/components/mdc-top-app-bar", ["exports", "ember-cli-mdc-top-app-bar/components/mdc-top-app-bar"], function (_exports, _mdcTopAppBar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBar.default;
    }
  });
});
;define("demo-frontend/controllers/application", ["exports", "@ember/controller", "@glimmer/tracking"], function (_exports, _controller, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationController = (_class = class ApplicationController extends _controller.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "queryParams", ['canisterId']);
      _initializerDefineProperty(this, "canisterId", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "canisterId", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ApplicationController;
});
;define("demo-frontend/controllers/main/index", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking", "ember-cli-dfinity"], function (_exports, _controller, _object, _tracking, _emberCliDfinity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let MainIndexController = (_dec = (0, _emberCliDfinity.actor)({
    canister: 'demo_backend'
  }), (_class = class MainIndexController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "valid", _descriptor2, this);
      _initializerDefineProperty(this, "submitting", _descriptor3, this);
      _initializerDefineProperty(this, "greeting", _descriptor4, this);
      // Bind to the hello actor deployed to the hello_backend canister using the default agent.
      _initializerDefineProperty(this, "hello", _descriptor5, this);
    }
    validity(valid) {
      this.valid = valid;
    }
    async submit() {
      try {
        this.submitting = true;
        this.greeting = await this.hello.greet(this.name);
      } catch (err) {
        this.snackbar.showError(err);
      } finally {
        this.submitting = false;
      }
    }
    reset() {
      this.submitting = false;
      this.name = null;
    }
    get isSubmitButtonDisabled() {
      return !this.valid || this.submitting;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "valid", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "submitting", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "greeting", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "hello", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "validity", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validity"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = MainIndexController;
});
;define("demo-frontend/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("demo-frontend/declarations/demo_backend.did", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.init = _exports.idlFactory = void 0;
  const idlFactory = _ref => {
    let {
      IDL
    } = _ref;
    return IDL.Service({
      'greet': IDL.Func([IDL.Text], [IDL.Text], ['query'])
    });
  };
  _exports.idlFactory = idlFactory;
  const init = _ref2 => {
    let {
      IDL
    } = _ref2;
    return [];
  };
  _exports.init = init;
});
;define("demo-frontend/helpers/app-version", ["exports", "@ember/component/helper", "demo-frontend/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("demo-frontend/helpers/ember-cli-dfinity", ["exports", "@ember/component/helper", "@ember/template"], function (_exports, _helper, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _helper.helper)(function emberCliDfinity() {
    return (0, _template.htmlSafe)('<a href="https://github.com/onehilltech/ember-cli-dfinity" target="_blank">ember-cli-dfinity</a>');
  });
  _exports.default = _default;
});
;define("demo-frontend/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("demo-frontend/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("demo-frontend/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("demo-frontend/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("demo-frontend/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "demo-frontend/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("demo-frontend/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("demo-frontend/initializers/custom-properties", ["exports", "ember-cli-custom-properties/initializers/custom-properties"], function (_exports, _customProperties) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _customProperties.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _customProperties.initialize;
    }
  });
});
;define("demo-frontend/initializers/dfinity", ["exports", "ember-cli-dfinity/initializers/dfinity"], function (_exports, _dfinity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dfinity.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _dfinity.initialize;
    }
  });
});
;define("demo-frontend/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("demo-frontend/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("demo-frontend/initializers/export-application-global", ["exports", "ember", "demo-frontend/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("demo-frontend/initializers/mdc-icon", ["exports", "ember-cli-mdc-icon/initializers/mdc-icon"], function (_exports, _mdcIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIcon.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _mdcIcon.initialize;
    }
  });
});
;define("demo-frontend/initializers/mdc-snackbar", ["exports", "ember-cli-mdc-snackbar/initializers/mdc-snackbar"], function (_exports, _mdcSnackbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcSnackbar.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _mdcSnackbar.initialize;
    }
  });
});
;define("demo-frontend/initializers/styled", ["exports", "ember-cli-styled/initializers/styled"], function (_exports, _styled) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _styled.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _styled.initialize;
    }
  });
});
;define("demo-frontend/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("demo-frontend/instance-initializers/typography", ["exports", "ember-cli-mdc-typography/instance-initializers/typography"], function (_exports, _typography) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _typography.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _typography.initialize;
    }
  });
});
;define("demo-frontend/modifiers/custom-property", ["exports", "ember-cli-custom-properties/modifiers/custom-property"], function (_exports, _customProperty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _customProperty.default;
    }
  });
});
;define("demo-frontend/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("demo-frontend/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-elevation", ["exports", "ember-cli-mdc-elevation/modifiers/mdc-elevation"], function (_exports, _mdcElevation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcElevation.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-line-ripple", ["exports", "ember-cli-mdc-line-ripple/modifiers/mdc-line-ripple"], function (_exports, _mdcLineRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcLineRipple.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-ripple", ["exports", "ember-cli-mdc-ripple/modifiers/mdc-ripple"], function (_exports, _mdcRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcRipple.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-theme", ["exports", "ember-cli-mdc-theme/modifiers/mdc-theme"], function (_exports, _mdcTheme) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTheme.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-top-app-bar-fixed-adjustment", ["exports", "ember-cli-mdc-top-app-bar/modifiers/mdc-top-app-bar-fixed-adjustment"], function (_exports, _mdcTopAppBarFixedAdjustment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTopAppBarFixedAdjustment.default;
    }
  });
});
;define("demo-frontend/modifiers/mdc-typography", ["exports", "ember-cli-mdc-typography/modifiers/mdc-typography"], function (_exports, _mdcTypography) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTypography.default;
    }
  });
});
;define("demo-frontend/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("demo-frontend/router", ["exports", "@ember/routing/router", "demo-frontend/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('main', {
      path: '/'
    }, function () {
      this.route('details');
    });
  });
});
;define("demo-frontend/routes/main", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class MainRoute extends _route.default {}
  _exports.default = MainRoute;
});
;define("demo-frontend/routes/main/details", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class MainDetailsRoute extends _route.default {}
  _exports.default = MainDetailsRoute;
});
;define("demo-frontend/routes/main/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class MainIndexRoute extends _route.default {
    resetController(controller, isExiting) {
      super.resetController(...arguments);
      if (isExiting) {
        controller.reset();
      }
    }
  }
  _exports.default = MainIndexRoute;
});
;define("demo-frontend/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("demo-frontend/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo-frontend/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("demo-frontend/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("demo-frontend/services/dfinity", ["exports", "ember-cli-dfinity/services/dfinity"], function (_exports, _dfinity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dfinity.default;
    }
  });
});
;define("demo-frontend/services/mdc-textarea-configurator", ["exports", "ember-cli-mdc-textfield/services/mdc-textarea-configurator"], function (_exports, _mdcTextareaConfigurator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextareaConfigurator.default;
    }
  });
});
;define("demo-frontend/services/mdc-textfield-configurator", ["exports", "ember-cli-mdc-textfield/services/mdc-textfield-configurator"], function (_exports, _mdcTextfieldConfigurator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldConfigurator.default;
    }
  });
});
;define("demo-frontend/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("demo-frontend/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("demo-frontend/services/snackbar", ["exports", "ember-cli-mdc-snackbar/services/snackbar"], function (_exports, _snackbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _snackbar.default;
    }
  });
});
;define("demo-frontend/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("demo-frontend/services/styled", ["exports", "ember-cli-styled/services/styled"], function (_exports, _styled) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _styled.default;
    }
  });
});
;define("demo-frontend/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ZwcZSBRR",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "demo-frontend/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("demo-frontend/templates/main", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "HxSu+vuH",
    "block": "[[[1,[28,[35,0],[\"ember-cli-dfinity\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "demo-frontend/templates/main.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("demo-frontend/templates/main/details", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "CmJkNFsE",
    "block": "[[[1,[28,[35,0],[\"How it works\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@fixed\"],[\"true\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,3],null,null,[[\"default\"],[[[[1,\"\\n      \"],[8,[39,4],null,[[\"@route\"],[\"main.index\"]],null],[1,\"\\n      \"],[8,[39,5],null,null,[[\"default\"],[[[[1,\"How it works\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[11,0],[4,[38,6],null,null],[12],[1,\"\\n  \"],[10,0],[14,0,\"main-content\"],[12],[1,\"\\n    \"],[10,\"h6\"],[12],[1,\"No more bootstrapping code\"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"When you create your frontend using HTML and native Javascript (or a frontend library),\\n      you have to implement a lot of bootstrapping code as the project scales. As with the native\\n      Javascript implementation of the HelloWorld example, there are many bootstrapping and functional\\n      aspects intertwined with one another. This leads to a design that violates the SOLID principles\\n      of software design and has many code smells.\\n    \"],[13],[1,\"\\n\\n    \"],[8,[39,7],null,[[\"@lang\",\"@enableCopyButton\",\"@title\"],[\"javascript\",false,\"Native Javascript implementation of Hello, World\"]],[[\"default\"],[[[[1,\"\\n      import { helloworld_backend } from \\\"../../declarations/helloworld_backend\\\";\\n\\n      document.querySelector(\\\"form\\\").addEventListener(\\\"submit\\\", async (e) => {\\n        e.preventDefault();\\n        const button = e.target.querySelector(\\\"button\\\");\\n\\n        const name = document.getElementById(\\\"name\\\").value.toString();\\n\\n        button.setAttribute(\\\"disabled\\\", true);\\n\\n        // Interact with helloworld_backend actor, calling the greet method\\n        const greeting = await helloworld_backend.greet(name);\\n\\n        button.removeAttribute(\\\"disabled\\\");\\n        document.getElementById(\\\"greeting\\\").innerText = greeting;\\n\\n        return false;\\n      });\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,2],[12],[1,\"When using EmberJS and \"],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-dfinity\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-dfinity\"],[13],[1,\",\\n      much of the bootstrapping and functional code above goes away. Instead, you only need to focus on the main logic of\\n      what to do when the submit button is clicked. The following code snippet showcases all that you need to write.\"],[13],[1,\"\\n\\n    \"],[8,[39,7],null,[[\"@lang\",\"@enableCopyButton\",\"@title\"],[\"javascript\",false,\"EmberJS implementation of Hello, World\"]],[[\"default\"],[[[[1,\"\\n      export default class MainIndexController extends Controller {\\n        // ...\\n\\n        @action\\n        async submit () {\\n          this.greeting = await this.hello.greet(this.name);\\n        }\\n\\n        // ...\\n      }\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,2],[12],[1,\"Because many of the concerns you manually implement when using native Javascript\\n      (or a Javascript library) are handled for you out-of-the-box in a clean manner, you\\n      can focus on making your design more robust. Here is the same example above that includes\\n      basic exception handling where we display the error as a snackbar message.\"],[13],[1,\"\\n\\n    \"],[8,[39,7],null,[[\"@lang\",\"@enableCopyButton\",\"@title\"],[\"javascript\",false,\"EmberJS implementation with some exception handling\"]],[[\"default\"],[[[[1,\"\\n      export default class MainIndexController extends Controller {\\n        // ...\\n\\n        @action\\n        async submit () {\\n          try {\\n            this.greeting = await this.hello.greet(this.name);\\n          }\\n          catch (err) {\\n            this.snackbar.showError (err);\\n          }\\n        }\\n\\n        // ...\\n      }\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,\"h6\"],[12],[1,\"Easily bind to actors / canisters\"],[13],[1,\"\\n\\n    \"],[10,\"h6\"],[12],[1,\"Simplified state management\"],[13],[1,\"\\n\\n    \"],[10,\"h6\"],[12],[1,\"Reusable components\"],[13],[1,\"\\n\\n    \"],[10,\"h6\"],[12],[1,\"Auto- (and better) configuration management\"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"Native Javascript implementations of frontend apps on the Internet Computer do not come with\\n      configuration management out-of-the-box. This can make it \"],[10,\"em\"],[12],[1,\"hard\"],[13],[1,\" to design your frontend for\\n      different execution environments, like production vs. development, or have different agent and canister\\n      configurations.\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"With EmberJS and \"],[1,[34,8]],[1,\", you can easily manage different configurations. For example, you\\n    can have different configurations for development vs. production. Likewise, you can have different configurations\\n    for different networking agents. Lastly, you can override default configurations at both build and runtime. This\\n      offers you great flexibility when designing and testing your frontend application.\"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"The following code snippet showcases the configuration for the Hello, World demo app. In this example,\\n    we are not defining any additional configurations because \"],[1,[34,8]],[1,\" is designed to work with minimal\\n    updates to the configuration. If needed, we can easily update this configuration with domain-specific\\n    configurations.\"],[13],[1,\"\\n\\n    \"],[8,[39,7],null,[[\"@lang\",\"@title\",\"@enableCopyButton\"],[\"javascript\",\"config/environment.js\",false]],[[\"default\"],[[[[1,\"\\n      'use strict';\\n\\n      module.exports = function (environment) {\\n        let ENV = {\\n          // ...\\n\\n          'ember-cli-dfinity': {\\n            // here you can add additional ember-cli-dfinity configurations to override the configuration\\n            // generated at build-time.\\n          }\\n        };\\n\\n        if (environment === 'development') {\\n          // here you can enable a development-specific features\\n        }\\n\\n        if (environment === 'test') {\\n          // here you can enable a test-specific features\\n        }\\n\\n        if (environment === 'production') {\\n          // here you can enable a production-specific features\\n        }\\n\\n        return ENV;\\n      };\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,\"h6\"],[12],[1,\"Added bonus: supports all existing EmberJS add-ons\"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"When you use EmberJS for your frontend, you are able to use many of the existing EmberJS addons. This can\\n      help you save time and provide a much richer user experience. For example, this frontend was implemented using\\n      the following EmberJS add-ons:\"],[13],[1,\"\\n\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,[34,8]],[1,\". This add-on enables EmberJS for the Internet Computer.\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-mdc\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-mdc\"],[13],[1,\". This add-on provides support for Material Design components.\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-styled\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-styled\"],[13],[1,\". This add-on adds polymorphic-like behavior to your styles.\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-code-snippet\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-code-snippet\"],[13],[1,\". This add-on provides components for displaying code snippets.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"At \"],[10,3],[14,6,\"https://onehilltech.com\"],[14,\"target\",\"_blank\"],[12],[1,\"One Hill Technologies (One Hill Tech)\"],[13],[1,\", we\\n      have created a larger number of \"],[10,3],[14,6,\"https://github.com/onehilltech?q=ember&type=all&language=&sort=\"],[14,\"target\",\"_blank\"],[12],[1,\"EmberJS addons\"],[13],[1,\"\\n      that are available under the Apache 2.0 license. We welcome you to use them in your frontend.\\n      You can also find a comprehensive list of EmberJS add-ons at \"],[10,3],[14,6,\"https://emberobserver.com/\"],[14,\"target\",\"_blank\"],[12],[1,\"Ember Observer\"],[13],[1,\".\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"mdc-top-app-bar\",\"mdc-top-app-bar-row\",\"mdc-top-app-bar-section\",\"mdc-top-app-bar-navigate-up-to\",\"mdc-top-app-bar-title\",\"mdc-top-app-bar-fixed-adjustment\",\"code-snippet\",\"ember-cli-dfinity\"]]",
    "moduleName": "demo-frontend/templates/main/details.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("demo-frontend/templates/main/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ekP2XQrF",
    "block": "[[[1,[28,[35,0],[\"Demo\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@fixed\"],[\"true\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,3],null,null,[[\"default\"],[[[[1,\"\\n      \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"ember-cli-dfinity demo\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[11,0],[4,[38,5],null,null],[12],[1,\"\\n  \"],[10,0],[14,0,\"main-content\"],[12],[1,\"\\n    \"],[10,2],[12],[1,\"This page demonstrates the Hello, World example for the Internet Computer implemented\\n      in EmberJS using the \"],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-dfinity\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-dfinity\"],[13],[1,\" frontend\\n      library. Give it a try!\"],[13],[1,\"\\n\\n    \"],[8,[39,6],null,null,null],[1,\"\\n\\n    \"],[10,2],[12],[1,\"This demo uses the following EmberJS add-ons in addition to\\n      \"],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-dfinity\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-dfinity\"],[13],[1,\".\"],[13],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-mdc\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-mdc\"],[13],[1,\". This add-on provides support for Material Design components.\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-styled\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-styled\"],[13],[1,\". This add-on adds polymorphic-like behavior to your styles.\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://github.com/onehilltech/ember-cli-code-snippet\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"ember-cli-code-snippet\"],[13],[1,\". This add-on provides components for displaying code snippets.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@route\"],[\"main.details\"]],[[\"default\"],[[[[1,\"Learn more\"]],[]]]]],[1,\" about what makes this implementation different.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"]],[],false,[\"page-title\",\"mdc-top-app-bar\",\"mdc-top-app-bar-row\",\"mdc-top-app-bar-section\",\"mdc-top-app-bar-title\",\"mdc-top-app-bar-fixed-adjustment\",\"demo/hello\",\"link-to\"]]",
    "moduleName": "demo-frontend/templates/main/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("demo-frontend/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("demo-frontend/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("demo-frontend/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("demo-frontend/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('demo-frontend/config/environment', [], function() {
  var prefix = 'demo-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("demo-frontend/app")["default"].create({"name":"demo-frontend","version":"0.0.0+48c1968a"});
          }
        
//# sourceMappingURL=demo-frontend.map

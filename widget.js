/* start module: widget */
$pyjs.loaded_modules['widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['widget'].__was_initialized__) return $pyjs.loaded_modules['widget'];
	var $m = $pyjs.loaded_modules["widget"];
	$m.__repr__ = function() { return "<module: widget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widget';
	$m.__name__ = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['Widget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'widget';
		$method = $pyjs__bind_method2('__init__', function(SW, SH) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				SW = arguments[1];
				SH = arguments[2];
			}

			self.canvas = (typeof Canvas == "undefined"?$m.Canvas:Canvas)(SW, SH);
			return null;
		}
	, 1, [null,null,['self'],['SW'],['SH']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(game) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self['canvas']['draw'](game);
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Widget', $p['tuple']($bases), $data);
	})();
	$m['Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'widget';
		$method = $pyjs__bind_method2('__init__', function(SW, SH) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				SW = arguments[1];
				SH = arguments[2];
			}

			$m['HorizontalPanel']['__init__'](self);
			self.SW = SW;
			self.SH = SH;
			self.context = (typeof GWTCanvas == "undefined"?$m.GWTCanvas:GWTCanvas)(SW, SH, SW, SH);
			self['context']['addStyleName']('gwt-canvas');
			self['add']($p['getattr'](self, 'context'));
			return null;
		}
	, 1, [null,null,['self'],['SW'],['SH']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(game) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			$p['getattr'](self, 'context').fillStyle = '#00AA00';
			self['context']['fillRect'](0, 0, (typeof SW == "undefined"?$m.SW:SW), (typeof SH == "undefined"?$m.SH:SH));
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widget */


/* end module: widget */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'game.Game', 'game']
*/

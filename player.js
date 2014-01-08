/* start module: player */
$pyjs.loaded_modules['player'] = function (__mod_name__) {
	if($pyjs.loaded_modules['player'].__was_initialized__) return $pyjs.loaded_modules['player'];
	var $m = $pyjs.loaded_modules["player"];
	$m.__repr__ = function() { return "<module: player>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'player';
	$m.__name__ = __mod_name__;


	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['Player'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'player';
		$method = $pyjs__bind_method2('__init__', function(game, player) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
				player = arguments[2];
			}

			self.game = game;
			self.state = $p['getattr'](game, 'state');
			self.player = player;
			return null;
		}
	, 1, [null,null,['self'],['game'],['player']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('make_move', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];
			if (typeof y == 'undefined') y=arguments.callee.__args__[4][1];

 			return null;
		}
	, 1, [null,null,['self'],['x', null],['y', null]]);
		$cls_definition['make_move'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Player', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end player */


/* end module: player */


/*
PYJS_DEPS: ['game.Game', 'game']
*/

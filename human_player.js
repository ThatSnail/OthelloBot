/* start module: human_player */
$pyjs.loaded_modules['human_player'] = function (__mod_name__) {
	if($pyjs.loaded_modules['human_player'].__was_initialized__) return $pyjs.loaded_modules['human_player'];
	var $m = $pyjs.loaded_modules["human_player"];
	$m.__repr__ = function() { return "<module: human_player>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'human_player';
	$m.__name__ = __mod_name__;


	$m['Player'] = $p['___import___']('player.Player', null, null, false);
	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['HumanPlayer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'human_player';
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
			var $and2,$and1;
			if ($p['bool'](($p['bool']($and1=!$p['bool'](x))?!$p['bool'](y):$and1))) {
				return null;
			}
			$m['Player']['make_move'](self, x, y);
			self['game']['move'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x', null],['y', null]]);
		$cls_definition['make_move'] = $method;
		var $bases = new Array($m['Player']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HumanPlayer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end human_player */


/* end module: human_player */


/*
PYJS_DEPS: ['player.Player', 'player', 'game.Game', 'game']
*/

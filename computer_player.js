/* start module: computer_player */
$pyjs.loaded_modules['computer_player'] = function (__mod_name__) {
	if($pyjs.loaded_modules['computer_player'].__was_initialized__) return $pyjs.loaded_modules['computer_player'];
	var $m = $pyjs.loaded_modules["computer_player"];
	$m.__repr__ = function() { return "<module: computer_player>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'computer_player';
	$m.__name__ = __mod_name__;


	$m['Player'] = $p['___import___']('player.Player', null, null, false);
	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['Strategy'] = $p['___import___']('strategy.Strategy', null, null, false);
	$m['RandomStrategy'] = $p['___import___']('strategy_random.RandomStrategy', null, null, false);
	$m['ComputerPlayer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'computer_player';
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
			var liberties,heuristic;
			$m['Player']['make_move'](self, x, y);
			liberties = self['game']['liberties']($p['getattr'](self, 'player'), $p['getattr'](self, 'state'));
			heuristic = $m['RandomStrategy']['$$apply']($p['getattr'](self, 'player'), $p['getattr'](self, 'state'), liberties);
			var $tupleassign1 = $p['__ass_unpack']($m['Strategy']['run'](heuristic), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			self['game']['move'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x', null],['y', null]]);
		$cls_definition['make_move'] = $method;
		var $bases = new Array($m['Player']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ComputerPlayer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end computer_player */


/* end module: computer_player */


/*
PYJS_DEPS: ['player.Player', 'player', 'game.Game', 'game', 'strategy.Strategy', 'strategy', 'strategy_random.RandomStrategy', 'strategy_random']
*/

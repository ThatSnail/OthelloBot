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
	$m['CornerStrategy'] = $p['___import___']('strategy_corner.CornerStrategy', null, null, false);
	$m['LibminStrategy'] = $p['___import___']('strategy_libmin.LibminStrategy', null, null, false);
	$m['StonemaxStrategy'] = $p['___import___']('strategy_stonemax.StonemaxStrategy', null, null, false);
	$m['ComputerPlayer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'computer_player';
		$method = $pyjs__bind_method2('__init__', function(game, player, strats) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
				player = arguments[2];
				strats = arguments[3];
			}
			if (typeof strats == 'undefined') strats=arguments.callee.__args__[5][1];

			$m['Player']['__init__'](self, game, player);
			if ($p['bool']($p['op_eq'](strats, null))) {
				strats = $p['list']([$p['tuple']([$m['RandomStrategy'], 1]), $p['tuple']([$m['CornerStrategy'], 100]), $p['tuple']([$m['LibminStrategy'], 10]), $p['tuple']([$m['StonemaxStrategy'], 5])]);
			}
			self.strats = strats;
			return null;
		}
	, 1, [null,null,['self'],['game'],['player'],['strats', null]]);
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
			var heur,$iter1_nextval,$iter1_type,strat,$iter1_iter,liberties,$iter1_array,mult,$iter1_idx;
			$m['Player']['make_move'](self, x, y);
			liberties = $m['Game']['liberties']($p['getattr'](self, 'player'), $p['getattr'](self, 'state'));
			heur = null;
			$iter1_iter = $p['getattr'](self, 'strats');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
				strat = $tupleassign1[0];
				mult = $tupleassign1[1];
				heur = strat['$$apply']($p['getattr'](self, 'player'), $p['getattr'](self, 'state'), liberties, mult, heur);
			}
			var $tupleassign2 = $p['__ass_unpack']($m['Strategy']['run'](heur), 2, null);
			x = $tupleassign2[0];
			y = $tupleassign2[1];
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
PYJS_DEPS: ['player.Player', 'player', 'game.Game', 'game', 'strategy.Strategy', 'strategy', 'strategy_random.RandomStrategy', 'strategy_random', 'strategy_corner.CornerStrategy', 'strategy_corner', 'strategy_libmin.LibminStrategy', 'strategy_libmin', 'strategy_stonemax.StonemaxStrategy', 'strategy_stonemax']
*/

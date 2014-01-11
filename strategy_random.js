/* start module: strategy_random */
$pyjs.loaded_modules['strategy_random'] = function (__mod_name__) {
	if($pyjs.loaded_modules['strategy_random'].__was_initialized__) return $pyjs.loaded_modules['strategy_random'];
	var $m = $pyjs.loaded_modules["strategy_random"];
	$m.__repr__ = function() { return "<module: strategy_random>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'strategy_random';
	$m.__name__ = __mod_name__;


	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['Strategy'] = $p['___import___']('strategy.Strategy', null, null, false);
	$m['RandomStrategy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'strategy_random';
		$method = $pyjs__bind_method2('$$apply', function(state, liberties, mult, heuristic) {
			if (this.__is_instance__ === true) {
				var player = this;
			} else {
				var player = arguments[0];
				state = arguments[1];
				liberties = arguments[2];
				mult = arguments[3];
				heuristic = arguments[4];
			}
			if (typeof mult == 'undefined') mult=arguments.callee.__args__[5][1];
			if (typeof heuristic == 'undefined') heuristic=arguments.callee.__args__[6][1];
			var $iter2_nextval,$iter2_type,$pow1,$iter2_iter,i,heur,$iter2_idx,pos,$mul1,$iter2_array,v,$mul2,$pow2;
			if ($p['bool']($p['op_eq'](heuristic, null))) {
				heuristic = function(){
					var $iter1_nextval,$iter1_type,pos,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = $p['__getslice'](liberties, 0, null);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					pos = $iter1_nextval.$nextval;
					$collcomp1['append']($p['tuple']([pos, 1]));
				}

	return $collcomp1;}();
			}
			$iter2_iter = $p['range']($p['len'](heuristic));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				i = $iter2_nextval.$nextval;
				var $tupleassign1 = $p['__ass_unpack'](heuristic.__getitem__(i), 2, null);
				pos = $tupleassign1[0];
				heur = $tupleassign1[1];
				v = $m['random']();
				heuristic.__setitem__(i, $p['tuple']([pos, (typeof ($mul1=heur)==typeof ($mul2=(typeof ($pow1=v)==typeof ($pow2=mult) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2))) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))]));
			}
			return heuristic;
		}
	, 1, [null,null,['player'],['state'],['liberties'],['mult', 1],['heuristic', null]]);
		$cls_definition['$$apply'] = $method;
		var $bases = new Array($m['Strategy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RandomStrategy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end strategy_random */


/* end module: strategy_random */


/*
PYJS_DEPS: ['random.random', 'random', 'strategy.Strategy', 'strategy']
*/

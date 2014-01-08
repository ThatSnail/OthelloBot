/* start module: strategy_corner */
$pyjs.loaded_modules['strategy_corner'] = function (__mod_name__) {
	if($pyjs.loaded_modules['strategy_corner'].__was_initialized__) return $pyjs.loaded_modules['strategy_corner'];
	var $m = $pyjs.loaded_modules["strategy_corner"];
	$m.__repr__ = function() { return "<module: strategy_corner>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'strategy_corner';
	$m.__name__ = __mod_name__;


	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['Strategy'] = $p['___import___']('strategy.Strategy', null, null, false);
	$m['CornerStrategy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'strategy_corner';
		$method = $pyjs__bind_method2('$$apply', function(state, liberties, heuristic) {
			if (this.__is_instance__ === true) {
				var player = this;
			} else {
				var player = arguments[0];
				state = arguments[1];
				liberties = arguments[2];
				heuristic = arguments[3];
			}
			if (typeof heuristic == 'undefined') heuristic=arguments.callee.__args__[5][1];
			var $iter2_nextval,$iter2_type,$iter2_iter,i,heur,$iter2_idx,pos,$add1,$add2,$sub3,$sub2,$sub1,$iter2_array,$sub4;
			if ($p['bool']($p['op_eq'](heuristic, null))) {
				heuristic = function(){
					var $iter1_nextval,$iter1_type,pos,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = $p['__getslice'](liberties, 0, null);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					pos = $iter1_nextval.$nextval;
					$collcomp1['append']($p['tuple']([pos, 0]));
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
				if ($p['bool']($p['tuple']([$p['tuple']([0, 0]), $p['tuple']([0, 7]), $p['tuple']([7, 0]), $p['tuple']([7, 7])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, $p['__op_add']($add1=heur,$add2=1)]));
				}
				else if ($p['bool']($p['tuple']([$p['tuple']([0, 1]), $p['tuple']([1, 0]), $p['tuple']([0, 6]), $p['tuple']([1, 7]), $p['tuple']([6, 0]), $p['tuple']([7, 1]), $p['tuple']([6, 7]), $p['tuple']([7, 6])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, $p['__op_sub']($sub1=heur,$sub2=0.5)]));
				}
				else if ($p['bool']($p['tuple']([$p['tuple']([1, 1]), $p['tuple']([1, 6]), $p['tuple']([6, 1]), $p['tuple']([6, 6])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, $p['__op_sub']($sub3=heur,$sub4=1)]));
				}
			}
			return heuristic;
		}
	, 1, [null,null,['player'],['state'],['liberties'],['heuristic', null]]);
		$cls_definition['$$apply'] = $method;
		var $bases = new Array($m['Strategy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CornerStrategy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end strategy_corner */


/* end module: strategy_corner */


/*
PYJS_DEPS: ['random.random', 'random', 'strategy.Strategy', 'strategy']
*/

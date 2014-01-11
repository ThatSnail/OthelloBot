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
			var pos,heur,$pow5,$pow4,$pow3,$pow2,$pow1,$iter2_type,$pow6,$iter2_idx,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter2_nextval,$iter2_iter,i,$iter2_array;
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
				if ($p['bool']($p['tuple']([$p['tuple']([0, 0]), $p['tuple']([0, 7]), $p['tuple']([7, 0]), $p['tuple']([7, 7])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, (typeof ($mul1=heur)==typeof ($mul2=(typeof ($pow1=5)==typeof ($pow2=mult) && typeof $pow1=='number'?
						Math.pow($pow1,$pow2):
						$p['op_pow']($pow1,$pow2))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))]));
				}
				else if ($p['bool']($p['tuple']([$p['tuple']([0, 1]), $p['tuple']([1, 0]), $p['tuple']([0, 6]), $p['tuple']([1, 7]), $p['tuple']([6, 0]), $p['tuple']([7, 1]), $p['tuple']([6, 7]), $p['tuple']([7, 6])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, (typeof ($mul3=heur)==typeof ($mul4=(typeof ($pow3=0.2)==typeof ($pow4=mult) && typeof $pow3=='number'?
						Math.pow($pow3,$pow4):
						$p['op_pow']($pow3,$pow4))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))]));
				}
				else if ($p['bool']($p['tuple']([$p['tuple']([1, 1]), $p['tuple']([1, 6]), $p['tuple']([6, 1]), $p['tuple']([6, 6])]).__contains__(pos))) {
					heuristic.__setitem__(i, $p['tuple']([pos, (typeof ($mul5=heur)==typeof ($mul6=(typeof ($pow5=0.1)==typeof ($pow6=mult) && typeof $pow5=='number'?
						Math.pow($pow5,$pow6):
						$p['op_pow']($pow5,$pow6))) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6))]));
				}
			}
			return heuristic;
		}
	, 1, [null,null,['player'],['state'],['liberties'],['mult', 1],['heuristic', null]]);
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

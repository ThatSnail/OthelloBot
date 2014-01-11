/* start module: strategy */
$pyjs.loaded_modules['strategy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['strategy'].__was_initialized__) return $pyjs.loaded_modules['strategy'];
	var $m = $pyjs.loaded_modules["strategy"];
	$m.__repr__ = function() { return "<module: strategy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'strategy';
	$m.__name__ = __mod_name__;


	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['Strategy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'strategy';
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

 			return null;
		}
	, 1, [null,null,['player'],['state'],['liberties'],['mult', 1],['heuristic', null]]);
		$cls_definition['$$apply'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this.__is_instance__ === true) {
				var heuristic = this;
			} else {
				var heuristic = arguments[0];
			}
			var total,$iter2_type,$iter2_iter,$add2,$iter2_nextval,pos,heur,$iter2_idx,r,$iter2_array,$add1,running_r,$mul2,$mul1;
			total = $p['sum'](function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,heur,$iter1_idx,_,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = heuristic;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
				_ = $tupleassign1[0];
				heur = $tupleassign1[1];
				$collcomp1['append'](heur);
			}

	return $collcomp1;}());
			r = (typeof ($mul1=$m['random']())==typeof ($mul2=total) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			running_r = 0;
			$iter2_iter = heuristic;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
				pos = $tupleassign2[0];
				heur = $tupleassign2[1];
				running_r = $p['__op_add']($add1=running_r,$add2=heur);
				if ($p['bool'](($p['cmp'](r, running_r) < 1))) {
					return pos;
				}
			}
			return null;
		}
	, 1, [null,null,['heuristic']]);
		$cls_definition['run'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Strategy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end strategy */


/* end module: strategy */


/*
PYJS_DEPS: ['random.random', 'random']
*/

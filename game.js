/* start module: game */
$pyjs.loaded_modules['game'] = function (__mod_name__) {
	if($pyjs.loaded_modules['game'].__was_initialized__) return $pyjs.loaded_modules['game'];
	var $m = $pyjs.loaded_modules["game"];
	$m.__repr__ = function() { return "<module: game>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game';
	$m.__name__ = __mod_name__;


	$m['Game'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		var $tupleassign1 = $p['__ass_unpack']($p['range'](4), 4, null);
		$cls_definition['NONE'] = $tupleassign1[0];
		$cls_definition['BLACK'] = $tupleassign1[1];
		$cls_definition['WHITE'] = $tupleassign1[2];
		$cls_definition['DRAW'] = $tupleassign1[3];
		$method = $pyjs__bind_method2('__init__', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			if (typeof state == 'undefined') state=arguments.callee.__args__[3][1];

			if ($p['bool']($p['op_eq'](state, null))) {
				self.state = function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,y,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = $p['range'](8);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					y = $iter1_nextval.$nextval;
					$collcomp1['append'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,x,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = $p['range'](8);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
						x = $iter2_nextval.$nextval;
						$collcomp2['append']($p['getattr']($m['Game'], 'NONE'));
					}

	return $collcomp2;}());
				}

	return $collcomp1;}();
				$p['getattr'](self, 'state').__getitem__(3).__setitem__(3, $p['getattr']($m['Game'], 'BLACK'));
				$p['getattr'](self, 'state').__getitem__(4).__setitem__(4, $p['getattr']($m['Game'], 'BLACK'));
				$p['getattr'](self, 'state').__getitem__(3).__setitem__(4, $p['getattr']($m['Game'], 'WHITE'));
				$p['getattr'](self, 'state').__getitem__(4).__setitem__(3, $p['getattr']($m['Game'], 'WHITE'));
				self.current_player = $p['getattr']($m['Game'], 'BLACK');
				self.result = $p['getattr']($m['Game'], 'NONE');
			}
			else {
				self.state = state;
			}
			return null;
		}
	, 1, [null,null,['self'],['state', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('is_tile', function(y) {
			if (this.__is_instance__ === true) {
				var x = this;
			} else {
				var x = arguments[0];
				y = arguments[1];
			}
			var $and1,$and2,$and3,$and4;
			return ($p['bool']($and1=($p['cmp'](0, x) < 1))?($p['bool']($and2=($p['cmp'](x, 8) == -1))?($p['bool']($and3=($p['cmp'](0, y) < 1))?($p['cmp'](y, 8) == -1):$and3):$and2):$and1);
		}
	, 1, [null,null,['x'],['y']]);
		$cls_definition['is_tile'] = $method;
		$method = $pyjs__bind_method2('other', function() {
			if (this.__is_instance__ === true) {
				var player = this;
			} else {
				var player = arguments[0];
			}

			if ($p['bool']($p['op_eq'](player, $p['getattr']($m['Game'], 'BLACK')))) {
				return $p['getattr']($m['Game'], 'WHITE');
			}
			else if ($p['bool']($p['op_eq'](player, $p['getattr']($m['Game'], 'WHITE')))) {
				return $p['getattr']($m['Game'], 'BLACK');
			}
			else {
				throw ($p['Exception']('Invalid other call: {0}'['format'](player)));
			}
			return null;
		}
	, 1, [null,null,['player']]);
		$cls_definition['other'] = $method;
		$method = $pyjs__bind_method2('simulate_move', function(y, player, state) {
			if (this.__is_instance__ === true) {
				var x = this;
			} else {
				var x = arguments[0];
				y = arguments[1];
				player = arguments[2];
				state = arguments[3];
			}
			var flipped_stone,$iter4_type,$iter4_iter,$add2,cpstate,nx,ny,fy,$iter7_type,$or1,$or2,fx,$iter7_iter,$iter4_array,$iter7_idx,d,$iter7_nextval,$iter4_nextval,$iter7_array,flip,$iter4_idx,$add3,$add1,$add4;
			cpstate = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,row;
	$collcomp3 = $p['list']();
			$iter3_iter = state;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				row = $iter3_nextval.$nextval;
				$collcomp3['append']($p['__getslice'](row, 0, null));
			}

	return $collcomp3;}();
			if ($p['bool']($p['op_eq'](cpstate.__getitem__(x).__getitem__(y), $p['getattr']($m['Game'], 'NONE')))) {
				flipped_stone = false;
				$iter4_iter = function(){
					var $iter5_nextval,x,$iter6_idx,$iter6_type,$iter5_idx,$collcomp4,$iter6_array,$iter5_iter,$iter5_array,y,$iter5_type,$iter6_iter,$iter6_nextval;
	$collcomp4 = $p['list']();
				$iter5_iter = $p['range']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 2);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					x = $iter5_nextval.$nextval;
					$iter6_iter = $p['range']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), 2);
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
						y = $iter6_nextval.$nextval;
						$collcomp4['append']($p['tuple']([x, y]));
					}
				}

	return $collcomp4;}();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					d = $iter4_nextval.$nextval;
					if ($p['bool']($p['op_eq'](d, $p['tuple']([0, 0])))) {
						continue;
					}
					var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
					nx = $tupleassign2[0];
					ny = $tupleassign2[1];
					flip = $p['list']([]);
					while ($p['bool'](true)) {
						nx = $p['__op_add']($add1=nx,$add2=d.__getitem__(0));
						ny = $p['__op_add']($add3=ny,$add4=d.__getitem__(1));
						if ($p['bool'](($p['bool']($or1=!$p['bool']($m['Game']['is_tile'](nx, ny)))?$or1:$p['op_eq'](cpstate.__getitem__(nx).__getitem__(ny), $p['getattr']($m['Game'], 'NONE'))))) {
							break;
						}
						else if ($p['bool']($p['op_eq'](cpstate.__getitem__(nx).__getitem__(ny), $m['Game']['other'](player)))) {
							flip['append']($p['tuple']([nx, ny]));
						}
						else if ($p['bool']($p['op_eq'](cpstate.__getitem__(nx).__getitem__(ny), player))) {
							$iter7_iter = flip;
							$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
							while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
								var $tupleassign3 = $p['__ass_unpack']($iter7_nextval.$nextval, 2, null);
								fx = $tupleassign3[0];
								fy = $tupleassign3[1];
								cpstate.__getitem__(fx).__setitem__(fy, player);
								flipped_stone = true;
							}
							break;
						}
					}
				}
				if ($p['bool'](flipped_stone)) {
					cpstate.__getitem__(x).__setitem__(y, player);
					return cpstate;
				}
				else {
					throw ((typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException)("Invalid move: ({0}, {1}) doesn't flip any stones"['format'](x, y)));
				}
			}
			else {
				throw ((typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException)('Invalid move: ({0}, {1}) already occupied'['format'](x, y)));
			}
			return null;
		}
	, 1, [null,null,['x'],['y'],['player'],['state']]);
		$cls_definition['simulate_move'] = $method;
		$method = $pyjs__bind_method2('pass_move', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.current_player = $m['Game']['other']($p['getattr'](self, 'current_player'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pass_move'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var e,$and5,$and6,$pyjs_try_err,black,white;
			try {
				self.state = $m['Game']['simulate_move'](x, y, $p['getattr'](self, 'current_player'), $p['getattr'](self, 'state'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == (typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException).__name__)||$p['_isinstance']($pyjs_try_err,(typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException))) {
					e = $pyjs_try_err;
					throw (e);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self.current_player = $m['Game']['other']($p['getattr'](self, 'current_player'));
			if ($p['bool'](($p['bool']($and5=$p['op_eq']($p['len']($m['Game']['liberties']($p['getattr']($m['Game'], 'BLACK'), $p['getattr'](self, 'state'))), 0))?$p['op_eq']($p['len']($m['Game']['liberties']($p['getattr']($m['Game'], 'WHITE'), $p['getattr'](self, 'state'))), 0):$and5))) {
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['len']($m['Game']['stones']($p['getattr']($m['Game'], 'BLACK'), $p['getattr'](self, 'state'))), $p['len']($m['Game']['stones']($p['getattr']($m['Game'], 'WHITE'), $p['getattr'](self, 'state')))]), 2, null);
				black = $tupleassign4[0];
				white = $tupleassign4[1];
				if ($p['bool'](($p['cmp'](black, white) == 1))) {
					self.result = $p['getattr']($m['Game'], 'BLACK');
				}
				else if ($p['bool'](($p['cmp'](white, black) == 1))) {
					self.result = $p['getattr']($m['Game'], 'WHITE');
				}
				else {
					self.result = $p['getattr']($m['Game'], 'DRAW');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('restart', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.state = function(){
				var $iter8_idx,$collcomp5,$iter8_array,$iter8_iter,$iter8_nextval,y,$iter8_type;
	$collcomp5 = $p['list']();
			$iter8_iter = $p['range'](8);
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
				y = $iter8_nextval.$nextval;
				$collcomp5['append'](function(){
					var $iter9_iter,$collcomp6,$iter9_nextval,$iter9_idx,$iter9_type,x,$iter9_array;
	$collcomp6 = $p['list']();
				$iter9_iter = $p['range'](8);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
					x = $iter9_nextval.$nextval;
					$collcomp6['append']($p['getattr']($m['Game'], 'NONE'));
				}

	return $collcomp6;}());
			}

	return $collcomp5;}();
			$p['getattr'](self, 'state').__getitem__(3).__setitem__(3, $p['getattr']($m['Game'], 'BLACK'));
			$p['getattr'](self, 'state').__getitem__(4).__setitem__(4, $p['getattr']($m['Game'], 'BLACK'));
			$p['getattr'](self, 'state').__getitem__(3).__setitem__(4, $p['getattr']($m['Game'], 'WHITE'));
			$p['getattr'](self, 'state').__getitem__(4).__setitem__(3, $p['getattr']($m['Game'], 'WHITE'));
			self.current_player = $p['getattr']($m['Game'], 'BLACK');
			self.result = $p['getattr']($m['Game'], 'NONE');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['restart'] = $method;
		$method = $pyjs__bind_method2('is_valid_move', function(y, player, state) {
			if (this.__is_instance__ === true) {
				var x = this;
			} else {
				var x = arguments[0];
				y = arguments[1];
				player = arguments[2];
				state = arguments[3];
			}
			var $pyjs_try_err;
			try {
				$m['Game']['simulate_move'](x, y, player, state);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					return true;
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == (typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException).__name__)||$p['_isinstance']($pyjs_try_err,(typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException))) {
						return false;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['x'],['y'],['player'],['state']]);
		$cls_definition['is_valid_move'] = $method;
		$method = $pyjs__bind_method2('liberties', function(state) {
			if (this.__is_instance__ === true) {
				var player = this;
			} else {
				var player = arguments[0];
				state = arguments[1];
			}
			var $iter10_nextval,y,$iter10_idx,$iter10_array,liberties,$iter10_type,x,$iter10_iter;
			liberties = $p['list']([]);
			$iter10_iter = function(){
				var $collcomp7,$iter11_iter,$iter12_type,$iter11_type,$iter12_array,$iter12_iter,$iter11_array,y,x,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval;
	$collcomp7 = $p['list']();
			$iter11_iter = $p['range'](8);
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
				x = $iter11_nextval.$nextval;
				$iter12_iter = $p['range'](8);
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
					y = $iter12_nextval.$nextval;
					$collcomp7['append']($p['tuple']([x, y]));
				}
			}

	return $collcomp7;}();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
				var $tupleassign5 = $p['__ass_unpack']($iter10_nextval.$nextval, 2, null);
				x = $tupleassign5[0];
				y = $tupleassign5[1];
				if ($p['bool']($m['Game']['is_valid_move'](x, y, player, state))) {
					liberties['append']($p['tuple']([x, y]));
				}
			}
			return liberties;
		}
	, 1, [null,null,['player'],['state']]);
		$cls_definition['liberties'] = $method;
		$method = $pyjs__bind_method2('stones', function(state) {
			if (this.__is_instance__ === true) {
				var player = this;
			} else {
				var player = arguments[0];
				state = arguments[1];
			}
			var stones,$iter13_nextval,$iter13_iter,$iter13_array,$iter13_idx,y,x,$iter13_type;
			stones = $p['list']([]);
			$iter13_iter = function(){
				var $iter14_array,$iter15_nextval,$iter14_type,$iter15_iter,$collcomp8,$iter15_array,$iter15_idx,$iter14_iter,$iter15_type,y,x,$iter14_idx,$iter14_nextval;
	$collcomp8 = $p['list']();
			$iter14_iter = $p['range'](8);
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
				x = $iter14_nextval.$nextval;
				$iter15_iter = $p['range'](8);
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
					y = $iter15_nextval.$nextval;
					$collcomp8['append']($p['tuple']([x, y]));
				}
			}

	return $collcomp8;}();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter13_nextval.$nextval, 2, null);
				x = $tupleassign6[0];
				y = $tupleassign6[1];
				if ($p['bool']($p['op_eq'](state.__getitem__(x).__getitem__(y), player))) {
					stones['append']($p['tuple']([x, y]));
				}
			}
			return stones;
		}
	, 1, [null,null,['player'],['state']]);
		$cls_definition['stones'] = $method;
		$method = $pyjs__bind_method2('is_running', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['op_eq']($p['getattr'](self, 'result'), $p['getattr']($m['Game'], 'NONE'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_running'] = $p['property']($p['staticmethod']($method));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Game', $p['tuple']($bases), $data);
	})();
	$m['InvalidMoveException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InvalidMoveException', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end game */


/* end module: game */



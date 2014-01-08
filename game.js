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
		var $tupleassign1 = $p['__ass_unpack']($p['range'](3), 3, null);
		$cls_definition['NONE'] = $tupleassign1[0];
		$cls_definition['BLACK'] = $tupleassign1[1];
		$cls_definition['WHITE'] = $tupleassign1[2];
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

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
			return null;
		}
	, 1, [null,null,['self']]);
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
		$method = $pyjs__bind_method2('move', function(x, y, player) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				player = arguments[3];
			}
			if (typeof player == 'undefined') player=arguments.callee.__args__[5][1];
			var flipped_stone,$iter6_type,$iter3_type,$iter6_iter,$iter6_nextval,$iter3_idx,nx,ny,$iter3_iter,$or1,$iter6_idx,$or2,fx,fy,$iter6_array,$iter3_array,d,flip,$add2,$add3,$add1,$add4,$iter3_nextval;
			if ($p['bool']($p['op_eq'](player, null))) {
				player = $p['getattr'](self, 'current_player');
				self.current_player = $m['Game']['other']($p['getattr'](self, 'current_player'));
			}
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(x).__getitem__(y), $p['getattr']($m['Game'], 'NONE')))) {
				flipped_stone = false;
				$iter3_iter = function(){
					var $iter5_nextval,$iter5_idx,$iter5_array,$iter4_nextval,$collcomp3,$iter4_idx,y,$iter5_iter,$iter4_type,$iter5_type,$iter4_array,x,$iter4_iter;
	$collcomp3 = $p['list']();
				$iter4_iter = $p['range']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 2);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					x = $iter4_nextval.$nextval;
					$iter5_iter = $p['range']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), 2);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
						y = $iter5_nextval.$nextval;
						$collcomp3['append']($p['tuple']([x, y]));
					}
				}

	return $collcomp3;}();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					d = $iter3_nextval.$nextval;
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
						if ($p['bool'](($p['bool']($or1=!$p['bool']($m['Game']['is_tile'](nx, ny)))?$or1:$p['op_eq']($p['getattr'](self, 'state').__getitem__(nx).__getitem__(ny), $p['getattr']($m['Game'], 'NONE'))))) {
							break;
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(nx).__getitem__(ny), $m['Game']['other'](player)))) {
							flip['append']($p['tuple']([nx, ny]));
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](self, 'state').__getitem__(nx).__getitem__(ny), player))) {
							$iter6_iter = flip;
							$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
							while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
								var $tupleassign3 = $p['__ass_unpack']($iter6_nextval.$nextval, 2, null);
								fx = $tupleassign3[0];
								fy = $tupleassign3[1];
								$p['getattr'](self, 'state').__getitem__(fx).__setitem__(fy, player);
								flipped_stone = true;
							}
							break;
						}
					}
				}
				if ($p['bool'](flipped_stone)) {
					$p['getattr'](self, 'state').__getitem__(x).__setitem__(y, player);
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
	, 1, [null,null,['self'],['x'],['y'],['player', null]]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('is_valid_move', function(x, y, player) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				player = arguments[3];
			}
			if (typeof player == 'undefined') player=arguments.callee.__args__[5][1];
			var $pyjs_try_err,old_state,valid,old_player;
			if ($p['bool']($p['op_eq'](player, null))) {
				player = $p['getattr'](self, 'current_player');
			}
			old_state = function(){
				var $iter7_array,$iter7_nextval,$iter7_iter,$collcomp4,$iter7_idx,$iter7_type,row;
	$collcomp4 = $p['list']();
			$iter7_iter = $p['getattr'](self, 'state');
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				row = $iter7_nextval.$nextval;
				$collcomp4['append']($p['__getslice'](row, 0, null));
			}

	return $collcomp4;}();
			old_player = $p['getattr'](self, 'current_player');
			valid = true;
			try {
				self['move'](x, y, player);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == (typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException).__name__)||$p['_isinstance']($pyjs_try_err,(typeof InvalidMoveException == "undefined"?$m.InvalidMoveException:InvalidMoveException))) {
					valid = false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			} finally {
				self.state = old_state;
				self.player = old_player;
			}
			return valid;
		}
	, 1, [null,null,['self'],['x'],['y'],['player', null]]);
		$cls_definition['is_valid_move'] = $method;
		$method = $pyjs__bind_method2('liberties', function(player, state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				player = arguments[1];
				state = arguments[2];
			}
			if (typeof player == 'undefined') player=arguments.callee.__args__[3][1];
			if (typeof state == 'undefined') state=arguments.callee.__args__[4][1];
			var $iter8_iter,$iter8_idx,$iter8_array,liberties,$iter8_nextval,y,x,$iter8_type;
			if ($p['bool']($p['op_eq'](player, null))) {
				player = $p['getattr'](self, 'current_player');
			}
			if ($p['bool']($p['op_eq'](state, null))) {
				state = $p['getattr'](self, 'state');
			}
			liberties = $p['list']([]);
			$iter8_iter = function(){
				var $iter10_nextval,$iter9_iter,$collcomp5,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,y,$iter10_type,x,$iter10_iter,$iter9_array;
	$collcomp5 = $p['list']();
			$iter9_iter = $p['range'](8);
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
				x = $iter9_nextval.$nextval;
				$iter10_iter = $p['range'](8);
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
					y = $iter10_nextval.$nextval;
					$collcomp5['append']($p['tuple']([x, y]));
				}
			}

	return $collcomp5;}();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter8_nextval.$nextval, 2, null);
				x = $tupleassign4[0];
				y = $tupleassign4[1];
				if ($p['bool'](self['is_valid_move'](x, y, player))) {
					liberties['append']($p['tuple']([x, y]));
				}
			}
			return liberties;
		}
	, 1, [null,null,['self'],['player', null],['state', null]]);
		$cls_definition['liberties'] = $method;
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



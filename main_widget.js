/* start module: main_widget */
$pyjs.loaded_modules['main_widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['main_widget'].__was_initialized__) return $pyjs.loaded_modules['main_widget'];
	var $m = $pyjs.loaded_modules["main_widget"];
	$m.__repr__ = function() { return "<module: main_widget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main_widget';
	$m.__name__ = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['pi'] = $p['___import___']('math.pi', null, null, false);
	$m['MainWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'main_widget';
		$method = $pyjs__bind_method2('__init__', function(SW, SH) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				SW = arguments[1];
				SH = arguments[2];
			}

			$m['HorizontalPanel']['__init__'](self);
			self.SW = SW;
			self.SH = SH;
			self.context = $m['GWTCanvas'](SW, SH, SW, SH);
			self['context']['addStyleName']('gwt-canvas');
			self['add']($p['getattr'](self, 'context'));
			return null;
		}
	, 1, [null,null,['self'],['SW'],['SH']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(game) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}
			if (typeof game == 'undefined') game=arguments.callee.__args__[3][1];
			var $floordiv9,$iter6_array,$iter6_type,$iter3_type,$iter1_iter,$iter2_type,$iter6_iter,$iter6_nextval,$floordiv7,$iter3_idx,$iter1_array,$iter2_iter,$add3,$add1,$iter3_iter,$add7,$add6,$floordiv2,$mul8,$iter1_nextval,$add4,$iter6_idx,$floordiv12,$floordiv11,$floordiv10,$iter2_idx,$mul9,$iter3_array,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$mul12,$iter2_nextval,$iter1_type,$mul11,$mul10,SP,$add2,$floordiv6,$floordiv5,$floordiv4,$floordiv3,$iter1_idx,$floordiv1,$add5,y,x,$add8,$iter3_nextval,$iter2_array,$floordiv8;
			self['context']['setFillStyle']($m['Color']['Color']('#00AA00'));
			self['context']['fillRect'](0, 0, $p['getattr'](self, 'SW'), $p['getattr'](self, 'SH'));
			SP = (typeof ($floordiv1=$p['getattr'](self, 'SW'))==typeof ($floordiv2=8) && typeof $floordiv1=='number' && $floordiv2 !== 0?
				Math.floor($floordiv1/$floordiv2):
				$p['op_floordiv']($floordiv1,$floordiv2));
			$iter1_iter = $p['range'](0, $p['getattr'](self, 'SW'), SP);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				x = $iter1_nextval.$nextval;
				self['context']['beginPath']();
				self['context']['setStrokeStyle']($p['getattr']($m['Color'], 'BLACK'));
				self['context']['setLineWidth'](1);
				self['context']['moveTo'](x, 0);
				self['context']['lineTo'](x, $p['getattr'](self, 'SH'));
				self['context']['closePath']();
				self['context']['stroke']();
			}
			$iter2_iter = $p['range'](0, $p['getattr'](self, 'SH'), SP);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				y = $iter2_nextval.$nextval;
				self['context']['beginPath']();
				self['context']['setStrokeStyle']($p['getattr']($m['Color'], 'BLACK'));
				self['context']['setLineWidth'](1);
				self['context']['moveTo'](0, y);
				self['context']['lineTo']($p['getattr'](self, 'SW'), y);
				self['context']['closePath']();
				self['context']['stroke']();
			}
			$iter3_iter = function(){
				var $iter5_nextval,$iter5_idx,$iter5_array,$iter4_nextval,$collcomp1,$iter4_idx,y,$iter5_iter,$iter4_type,$iter5_type,$iter4_array,x,$iter4_iter;
	$collcomp1 = $p['list']();
			$iter4_iter = $p['range'](8);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				x = $iter4_nextval.$nextval;
				$iter5_iter = $p['range'](8);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					y = $iter5_nextval.$nextval;
					$collcomp1['append']($p['tuple']([x, y]));
				}
			}

	return $collcomp1;}();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				if ($p['bool'](!$p['op_eq']($p['getattr'](game, 'state').__getitem__(x).__getitem__(y), $p['getattr']($m['Game'], 'NONE')))) {
					if ($p['bool']($p['op_eq']($p['getattr'](game, 'state').__getitem__(x).__getitem__(y), $p['getattr']($m['Game'], 'BLACK')))) {
						self['context']['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](game, 'state').__getitem__(x).__getitem__(y), $p['getattr']($m['Game'], 'WHITE')))) {
						self['context']['setFillStyle']($p['getattr']($m['Color'], 'WHITE'));
					}
					self['context']['beginPath']();
					self['context']['arc']($p['__op_add']($add1=(typeof ($mul1=x)==typeof ($mul2=SP) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)),$add2=(typeof ($floordiv3=SP)==typeof ($floordiv4=2) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math.floor($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4))), $p['__op_add']($add3=(typeof ($mul3=y)==typeof ($mul4=SP) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)),$add4=(typeof ($floordiv5=SP)==typeof ($floordiv6=2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math.floor($floordiv5/$floordiv6):
						$p['op_floordiv']($floordiv5,$floordiv6))), (typeof ($floordiv7=SP)==typeof ($floordiv8=2) && typeof $floordiv7=='number' && $floordiv8 !== 0?
						Math.floor($floordiv7/$floordiv8):
						$p['op_floordiv']($floordiv7,$floordiv8)), 0, (typeof ($mul5=2)==typeof ($mul6=$m['pi']) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
					self['context']['closePath']();
					self['context']['fill']();
				}
			}
			$iter6_iter = game['liberties']();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter6_nextval.$nextval, 2, null);
				x = $tupleassign2[0];
				y = $tupleassign2[1];
				self['context']['setFillStyle']($p['getattr']($m['Color'], 'WHITE'));
				self['context']['beginPath']();
				self['context']['arc']($p['__op_add']($add5=(typeof ($mul7=x)==typeof ($mul8=SP) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$add6=(typeof ($floordiv9=SP)==typeof ($floordiv10=2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
					Math.floor($floordiv9/$floordiv10):
					$p['op_floordiv']($floordiv9,$floordiv10))), $p['__op_add']($add7=(typeof ($mul9=y)==typeof ($mul10=SP) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)),$add8=(typeof ($floordiv11=SP)==typeof ($floordiv12=2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
					Math.floor($floordiv11/$floordiv12):
					$p['op_floordiv']($floordiv11,$floordiv12))), 4, 0, (typeof ($mul11=2)==typeof ($mul12=$m['pi']) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
				self['context']['closePath']();
				self['context']['fill']();
			}
			return null;
		}
	, 1, [null,null,['self'],['game', null]]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MainWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end main_widget */


/* end module: main_widget */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.Color', 'game.Game', 'game', 'math.pi', 'math']
*/

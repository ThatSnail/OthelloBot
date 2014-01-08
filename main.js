/* start module: main */
$pyjs.loaded_modules['main'] = function (__mod_name__) {
	if($pyjs.loaded_modules['main'].__was_initialized__) return $pyjs.loaded_modules['main'];
	var $m = $pyjs.loaded_modules["main"];
	$m.__repr__ = function() { return "<module: main>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main';
	$m.__name__ = __mod_name__;
	var $lambda4,$floordiv2,$floordiv1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['time'] = $p['___import___']('time', null);
	$m['Game'] = $p['___import___']('game.Game', null, null, false);
	$m['InvalidMoveException'] = $p['___import___']('game.InvalidMoveException', null, null, false);
	$m['floor'] = $p['___import___']('math.floor', null, null, false);
	$m['HumanPlayer'] = $p['___import___']('human_player.HumanPlayer', null, null, false);
	$m['ComputerPlayer'] = $p['___import___']('computer_player.ComputerPlayer', null, null, false);
	$m['MainWidget'] = $p['___import___']('main_widget.MainWidget', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['USING_PYGAME'] = false;
	$m['main_widget'] = null;
	$m['screen'] = null;
	$m['game'] = null;
	$m['players'] = null;
	var $tupleassign1 = $p['__ass_unpack']($p['tuple']([400, 400]), 2, null);
	$m['SW'] = $tupleassign1[0];
	$m['SH'] = $tupleassign1[1];
	$m['SP'] = (typeof ($floordiv1=$m['SW'])==typeof ($floordiv2=8) && typeof $floordiv1=='number' && $floordiv2 !== 0?
		Math.floor($floordiv1/$floordiv2):
		$p['op_floordiv']($floordiv1,$floordiv2));
	$m['color_white'] = $p['tuple']([255, 255, 255]);
	$m['color_black'] = $p['tuple']([0, 0, 0]);
	$m['color_green'] = $p['tuple']([0, 128, 0]);
	$m['main'] = function() {

		if ($p['bool']($m['USING_PYGAME'])) {
			$m.pygame['init']();
			$m['screen'] = $m.pygame['display']['set_mode']($p['tuple']([$m['SW'], $m['SH']]));
			$m['screen']['fill']($m['color_green']);
		}
		$m['game'] = $m['Game']();
		$m['players'] = $p['list']([]);
		$m['players']['append']($m['HumanPlayer']($m['game'], $p['getattr']($m['Game'], 'BLACK')));
		$m['players']['append']($m['ComputerPlayer']($m['game'], $p['getattr']($m['Game'], 'WHITE')));
		(typeof update == "undefined"?$m.update:update)();
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null];
	$m['update'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,player,$iter1_array,$iter1_idx;
		(typeof event == "undefined"?$m.event:event)();
		(typeof draw == "undefined"?$m.draw:draw)();
		if ($p['bool']($p['getattr']($m['game'], 'is_running'))) {
			$iter1_iter = $m['players'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				player = $iter1_nextval.$nextval;
				if ($p['bool']($p['op_eq']($p['getattr']($m['game'], 'current_player'), $p['getattr'](player, 'player')))) {
					if ($p['bool']($p['op_eq']($p['len']($m['game']['liberties']()), 0))) {
						$m['game']['pass_move']();
					}
					else {
						player['make_move']();
					}
					break;
				}
			}
		}
		return null;
	};
	$m['update'].__name__ = 'update';

	$m['update'].__bind_type__ = 0;
	$m['update'].__args__ = [null,null];
	$m['event'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,pos,$iter2_idx,ev,event,$iter2_array;
		if ($p['bool']($m['USING_PYGAME'])) {
			ev = $m.pygame['event']['get']();
			$iter2_iter = ev;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				event = $iter2_nextval.$nextval;
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']((typeof pygame == "undefined"?$m.pygame:pygame), 'MOUSEBUTTONUP')))) {
					pos = $m.pygame['mouse']['get_pos']();
					(typeof handle_click == "undefined"?$m.handle_click:handle_click)(pos.__getitem__(0), pos.__getitem__(1));
				}
			}
		}
		return null;
	};
	$m['event'].__name__ = 'event';

	$m['event'].__bind_type__ = 0;
	$m['event'].__args__ = [null,null];
	$m['handle_click'] = function(x, y) {
		var $iter3_idx,player,$iter3_nextval,$iter3_array,$pyjs_try_err,$floordiv6,$floordiv5,$floordiv4,$floordiv3,$iter3_iter,$iter3_type;
		var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($floordiv3=x)==typeof ($floordiv4=$m['SP']) && typeof $floordiv3=='number' && $floordiv4 !== 0?
			Math.floor($floordiv3/$floordiv4):
			$p['op_floordiv']($floordiv3,$floordiv4)), (typeof ($floordiv5=y)==typeof ($floordiv6=$m['SP']) && typeof $floordiv5=='number' && $floordiv6 !== 0?
			Math.floor($floordiv5/$floordiv6):
			$p['op_floordiv']($floordiv5,$floordiv6))]), 2, null);
		x = $tupleassign2[0];
		y = $tupleassign2[1];
		$iter3_iter = $m['players'];
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			player = $iter3_nextval.$nextval;
			if ($p['bool']($p['op_eq']($p['getattr']($m['game'], 'current_player'), $p['getattr'](player, 'player')))) {
				try {
					player['make_move'](x, y);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['InvalidMoveException'].__name__)||$p['_isinstance']($pyjs_try_err,$m['InvalidMoveException'])) {
						return null;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				break;
			}
		}
		$m['update']();
		return null;
	};
	$m['handle_click'].__name__ = 'handle_click';

	$m['handle_click'].__bind_type__ = 0;
	$m['handle_click'].__args__ = [null,null,['x'],['y']];
	$m['draw'] = function() {
		var $iter5_nextval,$lambda3,$lambda2,$lambda1,$floordiv21,$iter6_type,$iter5_idx,$floordiv22,$iter5_iter,$iter4_type,$iter5_type,$iter6_iter,$iter4_iter,$iter6_nextval,$floordiv19,$iter9_iter,$iter9_nextval,$iter9_idx,$iter5_array,$add12,$iter9_type,$iter6_idx,$floordiv20,$iter4_array,$iter6_array,$add10,$add11,$mul9,$div2,$div3,$div1,$div4,$mul12,$mul11,$mul10,$iter4_nextval,$iter4_idx,y,x,$add9,$iter9_array;
		if ($p['bool']($m['USING_PYGAME'])) {
			$m['screen']['fill']($m['color_green']);
			$iter4_iter = $p['range'](0, $m['SW'], $m['floor']((typeof ($div1=$m['SW'])==typeof ($div2=8) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))));
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				x = $iter4_nextval.$nextval;
				$m.pygame['draw']['line']($m['screen'], $m['color_black'], $p['tuple']([x, 0]), $p['tuple']([x, $m['SH']]));
			}
			$iter5_iter = $p['range'](0, $m['SH'], $m['floor']((typeof ($div3=$m['SH'])==typeof ($div4=8) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))));
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				y = $iter5_nextval.$nextval;
				$m.pygame['draw']['line']($m['screen'], $m['color_black'], $p['tuple']([0, y]), $p['tuple']([$m['SW'], y]));
			}
			$iter6_iter = function(){
				var $iter8_idx,$iter7_nextval,$iter7_iter,$iter8_type,$iter7_array,$iter8_array,$collcomp1,$iter8_iter,$iter8_nextval,$iter7_idx,y,x,$iter7_type;
	$collcomp1 = $p['list']();
			$iter7_iter = $p['range'](8);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				x = $iter7_nextval.$nextval;
				$iter8_iter = $p['range'](8);
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
					y = $iter8_nextval.$nextval;
					$collcomp1['append']($p['tuple']([x, y]));
				}
			}

	return $collcomp1;}();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter6_nextval.$nextval, 2, null);
				x = $tupleassign3[0];
				y = $tupleassign3[1];
				var 				$lambda1 = function() {

					return null;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null];
				var 				$lambda2 = function() {
					var $add2,$floordiv12,$floordiv11,$floordiv10,$floordiv7,$add3,$add1,$floordiv9,$add4,$mul4,$mul3,$mul2,$mul1,$floordiv8;
					return $m.pygame['draw']['circle']($m['screen'], $m['color_black'], $p['tuple']([$p['__op_add']($add1=(typeof ($mul1=x)==typeof ($mul2=$m['SP']) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)),$add2=(typeof ($floordiv7=$m['SP'])==typeof ($floordiv8=2) && typeof $floordiv7=='number' && $floordiv8 !== 0?
						Math.floor($floordiv7/$floordiv8):
						$p['op_floordiv']($floordiv7,$floordiv8))), $p['__op_add']($add3=(typeof ($mul3=y)==typeof ($mul4=$m['SP']) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)),$add4=(typeof ($floordiv9=$m['SP'])==typeof ($floordiv10=2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
						Math.floor($floordiv9/$floordiv10):
						$p['op_floordiv']($floordiv9,$floordiv10)))]), (typeof ($floordiv11=$m['SP'])==typeof ($floordiv12=2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
						Math.floor($floordiv11/$floordiv12):
						$p['op_floordiv']($floordiv11,$floordiv12)));
				};
				$lambda2.__name__ = '$lambda2';

				$lambda2.__bind_type__ = 0;
				$lambda2.__args__ = [null,null];
				var 				$lambda3 = function() {
					var $mul8,$floordiv18,$floordiv17,$floordiv16,$floordiv15,$floordiv14,$floordiv13,$add6,$add7,$add5,$mul7,$mul6,$mul5,$add8;
					return $m.pygame['draw']['circle']($m['screen'], $m['color_white'], $p['tuple']([$p['__op_add']($add5=(typeof ($mul5=x)==typeof ($mul6=$m['SP']) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)),$add6=(typeof ($floordiv13=$m['SP'])==typeof ($floordiv14=2) && typeof $floordiv13=='number' && $floordiv14 !== 0?
						Math.floor($floordiv13/$floordiv14):
						$p['op_floordiv']($floordiv13,$floordiv14))), $p['__op_add']($add7=(typeof ($mul7=y)==typeof ($mul8=$m['SP']) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)),$add8=(typeof ($floordiv15=$m['SP'])==typeof ($floordiv16=2) && typeof $floordiv15=='number' && $floordiv16 !== 0?
						Math.floor($floordiv15/$floordiv16):
						$p['op_floordiv']($floordiv15,$floordiv16)))]), (typeof ($floordiv17=$m['SP'])==typeof ($floordiv18=2) && typeof $floordiv17=='number' && $floordiv18 !== 0?
						Math.floor($floordiv17/$floordiv18):
						$p['op_floordiv']($floordiv17,$floordiv18)));
				};
				$lambda3.__name__ = '$lambda3';

				$lambda3.__bind_type__ = 0;
				$lambda3.__args__ = [null,null];
				$p['dict']([[$p['getattr']($m['Game'], 'NONE'), $lambda1], [$p['getattr']($m['Game'], 'BLACK'), $lambda2], [$p['getattr']($m['Game'], 'WHITE'), $lambda3]]).__getitem__($p['getattr']($m['game'], 'state').__getitem__(x).__getitem__(y))();
			}
			$iter9_iter = $m['game']['liberties']();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter9_nextval.$nextval, 2, null);
				x = $tupleassign4[0];
				y = $tupleassign4[1];
				$m.pygame['draw']['circle']($m['screen'], $m['color_white'], $p['tuple']([$p['__op_add']($add9=(typeof ($mul9=x)==typeof ($mul10=$m['SP']) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)),$add10=(typeof ($floordiv19=$m['SP'])==typeof ($floordiv20=2) && typeof $floordiv19=='number' && $floordiv20 !== 0?
					Math.floor($floordiv19/$floordiv20):
					$p['op_floordiv']($floordiv19,$floordiv20))), $p['__op_add']($add11=(typeof ($mul11=y)==typeof ($mul12=$m['SP']) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)),$add12=(typeof ($floordiv21=$m['SP'])==typeof ($floordiv22=2) && typeof $floordiv21=='number' && $floordiv22 !== 0?
					Math.floor($floordiv21/$floordiv22):
					$p['op_floordiv']($floordiv21,$floordiv22)))]), 4);
			}
			$m.pygame['display']['update']();
		}
		else {
			$m['main_widget']['draw']($m['game']);
		}
		return null;
	};
	$m['draw'].__name__ = 'draw';

	$m['draw'].__bind_type__ = 0;
	$m['draw'].__args__ = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('output/main.html');
		$m['main_widget'] = $m['MainWidget']($m['SW'], $m['SH']);
		$m['panel'] = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$p['getattr']($m['main_widget'], 'context')}]);
		$m['panel']['addMouseListener']($p['getattr']($m['main_widget'], 'context'));
		var 		$lambda4 = function(sender, x, y) {

			return $m['handle_click'](x, y);
		};
		$lambda4.__name__ = '$lambda4';

		$lambda4.__bind_type__ = 0;
		$lambda4.__args__ = [null,null,['sender'],['x'],['y']];
		$p['setattr']($p['getattr']($m['main_widget'], 'context'), 'onMouseUp', $lambda4);
		$m['RootPanel']()['add']($m['panel']);
		$m['RootPanel']()['add']($m['main_widget']);
		$m['pyjd']['run']();
		$m['main']();
	}
	return this;
}; /* end main */


/* end module: main */


/*
PYJS_DEPS: ['pyjd', 'sys', 'time', 'game.Game', 'game', 'game.InvalidMoveException', 'math.floor', 'math', 'human_player.HumanPlayer', 'human_player', 'computer_player.ComputerPlayer', 'computer_player', 'main_widget.MainWidget', 'main_widget', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/

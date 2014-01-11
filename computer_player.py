from player import Player
from game import Game
from strategy import Strategy
from strategy_random import RandomStrategy
from strategy_corner import CornerStrategy
from strategy_libmin import LibminStrategy

class ComputerPlayer(Player):
    def make_move(self, x=None, y=None):
        Player.make_move(self, x, y)
        # Calculate move
        liberties = Game.liberties(self.player, self.state)
        def apply_strat(strategy, mult=1, heuristic=None):
            return strategy.apply(self.player, self.state, mult, heuristic=heuristic)
        heuristic = None
        heuristic = apply_strat(RandomStrategy, 1, heuristic)
        heuristic = apply_strat(CornerStrategy, 1, heuristic)
        heuristic = apply_strat(LibminStrategy, 1, heuristic)
        x, y = Strategy.run(heuristic)
        self.game.move(x, y)

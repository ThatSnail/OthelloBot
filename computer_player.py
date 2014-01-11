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
        heuristic = RandomStrategy.apply(self.player, self.state, liberties)
        heuristic = CornerStrategy.apply(self.player, self.state, liberties, heuristic=heuristic)
        heuristic = LibminStrategy.apply(self.player, self.state, liberties, heuristic=heuristic)
        x, y = Strategy.run(heuristic)
        self.game.move(x, y)

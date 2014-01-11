from player import Player
from game import Game
from strategy import Strategy
from strategy_random import RandomStrategy
from strategy_corner import CornerStrategy
from strategy_libmin import LibminStrategy
from strategy_stonemax import StonemaxStrategy

class ComputerPlayer(Player):
    def __init__(self, game, player, strats=None):
        Player.__init__(self, game, player)
        if strats == None:
            strats = [(RandomStrategy, 1), (CornerStrategy, 100), (LibminStrategy, 10), (StonemaxStrategy, 5)] # crap default strat
        self.strats = strats

    def make_move(self, x=None, y=None):
        Player.make_move(self, x, y)
        # Calculate move
        liberties = Game.liberties(self.player, self.state)
        #def apply_strat(strategy, mult=1, heur=None):
        #    return strategy.apply(self.player, self.state, liberties, mult, heuristic=heur)
        heur = None
        for strat, mult in self.strats:
            heur = strat.apply(self.player, self.state, liberties, mult, heur)
        x, y = Strategy.run(heur)
        self.game.move(x, y)

#from time import sleep
from player import Player
from game import Game
from strategy import Strategy
from strategy_random import RandomStrategy
from strategy_corner import CornerStrategy

class ComputerPlayer(Player):
    def make_move(self, x=None, y=None):
        Player.make_move(self, x, y)
        # Calculate move
        liberties = self.game.liberties(self.player, self.state)
        heuristic = RandomStrategy.apply(self.player, self.state, liberties)
        x, y = Strategy.run(heuristic)
        self.game.move(x, y)
        #sleep(0.05)

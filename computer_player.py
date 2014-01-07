from player import Player
from game import Game

class ComputerPlayer(Player):
    def make_move(self, x=None, y=None):
        Player.make_move(self, x, y)
        # TODO strategies
        self.game.move(x, y)

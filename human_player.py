from player import Player
from game import Game

class HumanPlayer(Player):
    def make_move(self, x=None, y=None):
        if not x and not y:
            break
        Player.make_move(self, x, y)
        self.game.move(x, y)

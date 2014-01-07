from player import Player
from game import Game

class HumanPlayer(Player):
    def __init__(self, game, player):
        Player.__init__(self, game, player)
    
    def make_move(self, x, y):
        Player.make_move(self, x, y)
        self.game.move(x, y)

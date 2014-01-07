from game import Game

class Player(object):
    def __init__(self, game, player):
        self.game = game
        self.state = game.state
        self.player = player

    def make_move(self, x=None, y=None):
        pass 

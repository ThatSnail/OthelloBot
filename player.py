from game import Game

class Player(object):
    def __init__(self, game, player):
        self.game = game
        self.player = player

    @property
    def state(self):
        return self.game.state

    def make_move(self, x=None, y=None):
        pass 

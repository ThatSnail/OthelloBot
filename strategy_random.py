from random import random
from strategy import Strategy

class RandomStrategy(Strategy):
    def apply(player, state, liberties, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 0) for pos in liberties[:]]
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]
            v = random()
            heuristic[i] = (pos, heur + v)
        return heuristic

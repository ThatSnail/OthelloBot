from random import random
from strategy import Strategy

class CornerStrategy(Strategy):
    def apply(player, state, liberties, mult=1, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 1) for pos in liberties[:]]
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]

            # Corners
            if pos in ((0, 0), (0, 7), (7, 0), (7, 7)):
                heuristic[i] = (pos, heur * 5 ** mult)
            # Next to corners
            elif pos in ((0, 1), (1, 0), (0, 6), (1, 7), (6, 0), (7, 1), (6, 7), (7, 6)):
                heuristic[i] = (pos, heur * 0.2 ** mult)
            # Diagonal to corners
            elif pos in ((1, 1), (1, 6), (6, 1), (6, 6)):
                heuristic[i] = (pos, heur * 0.1 ** mult)
        return heuristic

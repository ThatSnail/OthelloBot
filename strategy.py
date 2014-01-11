from random import random

class Strategy(object):
    def apply(player, state, liberties, mult=1, heuristic=None):
        pass

    def run(heuristic):
        # Weighted probability
        # Assume the distribution is not normalized
        total = sum([heur for (_, heur) in heuristic])
        r = random() * total
        running_r = 0
        for (pos, heur) in heuristic:
            running_r += heur
            if r <= running_r:
                return pos

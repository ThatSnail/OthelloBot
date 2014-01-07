class Game(object):

    # State
    NONE, BLACK, WHITE = range(3)

    def __init__(self):
        self.state = [[Game.NONE for x in range(8)] for y in range(8)]
        self.state[3][3] = Game.BLACK
        self.state[4][4] = Game.BLACK
        self.state[3][4] = Game.WHITE
        self.state[4][3] = Game.WHITE
        self.current_player = Game.BLACK

    def is_tile(x, y):
        return (0 <= x and x < 8 and 0 <= y and y < 8)

    def other(player):
        if player == Game.BLACK:
            return Game.WHITE
        elif player == Game.WHITE:
            return Game.BLACK
        else:
            raise Exception("Invalid other call: {0}".format(player))

    def move(self, x, y, player=None):
        if player == None:
            player = self.current_player
            self.current_player = Game.other(self.current_player)
        if self.state[x][y] == Game.NONE:
            flipped_stone = False
            for d in [(x, y) for x in range(-1, 2) for y in range(-1, 2)]:
                if d == (0, 0):
                    continue
                nx, ny = x, y
                flip = []
                while True:
                    nx += d[0]
                    ny += d[1]
                    if not Game.is_tile(nx, ny) or self.state[nx][ny] == Game.NONE:
                        break
                    elif self.state[nx][ny] == Game.other(player): # Other player's tile
                        flip.append((nx, ny))
                    elif self.state[nx][ny] == player: # Your tile
                        for (fx, fy) in flip:
                            self.state[fx][fy] = player
                            flipped_stone = True
                        break
            if flipped_stone:
                self.state[x][y] = player
            else:
                raise InvalidMoveException("Invalid move: ({0}, {1}) doesn't flip any stones".format(x, y))
        else:
            raise InvalidMoveException("Invalid move: ({0}, {1}) already occupied".format(x, y))

    def is_valid_move(self, x, y, player=None):
        if player == None:
            player = self.current_player
        
        # Save the game state
        old_state = [row[:] for row in self.state]
        old_player = self.current_player

        # Simulate move
        valid = True
        try:
            self.move(x, y, player)
        except InvalidMoveException:
            valid = False
        finally:
            # Restore state
            self.state = old_state
            self.player = old_player
        return valid

    def liberties(self, player=None, state=None):
        if player == None:
            player = self.current_player
        if state == None:
            state = self.state
        liberties = []
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            if self.is_valid_move(x, y, player):
                liberties.append((x, y))
        return liberties

class InvalidMoveException(Exception):
    pass

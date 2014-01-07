class Game(object):

    # State
    NONE, BLACK, WHITE, DRAW = range(4)

    def __init__(self):
        self.state = [[Game.NONE for x in range(8)] for y in range(8)]
        self.state[3][3] = Game.BLACK
        self.state[4][4] = Game.BLACK
        self.state[3][4] = Game.WHITE
        self.state[4][3] = Game.WHITE
        self.current_player = Game.BLACK
        self.result = Game.NONE

    def is_tile(x, y):
        return (0 <= x and x < 8 and 0 <= y and y < 8)

    def other(player):
        if player == Game.BLACK:
            return Game.WHITE
        elif player == Game.WHITE:
            return Game.BLACK
        else:
            raise Exception("Invalid other call: {0}".format(player))

    def pass_move(self):
        self.current_player = Game.other(self.current_player)

    def move(self, x, y, player=None, preserve_state=False):
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
                            if not preserve_state:
                                self.state[fx][fy] = player
                            flipped_stone = True
                        break
            if flipped_stone:
                if not preserve_state:
                    self.state[x][y] = player
                    # Check if game is over
                    if self.liberties(Game.BLACK) == 0 and self.liberties(Game.WHITE) == 0:
                        black, white = self.stones(Game.BLACK), self.stones(Game.WHITE)
                        if black > white:
                            self.result = Game.BLACK
                        elif white > black:
                            self.result = Game.WHITE
                        else:
                            self.result = Game.DRAW
            else:
                raise InvalidMoveException("Invalid move: ({0}, {1}) doesn't flip any stones".format(x, y))
        else:
            raise InvalidMoveException("Invalid move: ({0}, {1}) already occupied".format(x, y))

    def is_valid_move(self, x, y, player=None):
        if player == None:
            player = self.current_player
        
        # Simulate move
        valid = True
        try:
            self.move(x, y, player, preserve_state=True)
        except InvalidMoveException:
            valid = False
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

    def stones(self, player, state=None):
        if state == None:
            state = self.state
        stones = 0
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            if state[x][y] == player:
                stones += 1
        return stones

    @property
    def is_running(self):
        return self.result == Game.NONE

class InvalidMoveException(Exception):
    pass

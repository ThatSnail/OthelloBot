import sys
import time
import pygame
from game import Game, InvalidMoveException
from math import floor
from human_player import HumanPlayer
from computer_player import ComputerPlayer

screen = None
game = None
players = None
SW, SH = 400, 400
SP = SW // 8
color_white = (255, 255, 255)
color_black = (0, 0, 0)
color_green = (0, 128, 0)

def main():
    # Init
    pygame.init()
    global screen, game, players
    screen = pygame.display.set_mode((SW, SH))
    screen.fill(color_green)

    game = Game()
    players = []
    players.append(HumanPlayer(game, Game.BLACK))
    players.append(ComputerPlayer(game, Game.WHITE))

    while True:
        update()
        time.sleep(0.01)

def update():
    event()
    draw()
    if game.is_running:
        # Tell bots to do stuff
        for player in players:
            if game.current_player == player.player:
                if len(game.liberties()) == 0:
                    game.pass_move()
                else:
                    player.make_move()
                break

def event():
    # Make player move
    ev = pygame.event.get()
    for event in ev:
        if event.type == pygame.MOUSEBUTTONUP:
            if game.is_running:
                pos = pygame.mouse.get_pos()
                x, y = pos[0] // SP, pos[1] // SP
                for player in players:
                    if game.current_player == player.player:
                        if len(game.liberties()) == 0:
                            game.pass_move()
                        else:
                            try:
                                player.make_move(x, y)
                            except InvalidMoveException:
                                print("Invalid move!")
                        break

def draw():
    global screen

    # Draw screen
    screen.fill(color_green)
    for x in range(0, SW, floor(SW / 8)):
        pygame.draw.line(screen, color_black, (x, 0), (x, SH))
    for y in range(0, SH, floor(SH / 8)):
        pygame.draw.line(screen, color_black, (0, y), (SW, y))

    # Draw pieces
    for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
        {
            Game.NONE: lambda: None,
            Game.BLACK: lambda: pygame.draw.circle(screen, color_black, (x * SP + SP // 2, y * SP + SP // 2), SP // 2),
            Game.WHITE: lambda: pygame.draw.circle(screen, color_white, (x * SP + SP // 2, y * SP + SP // 2), SP // 2)
        }[game.state[x][y]]()
    
    # Draw liberties
    for (x, y) in game.liberties():
        pygame.draw.circle(screen, color_white, (x * SP + SP // 2, y * SP + SP // 2), 4)

    # Update
    pygame.display.update()

if __name__ == "__main__":
    main()

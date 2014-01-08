import pyjd
import sys
import time
from game import Game
from math import floor
from human_player import HumanPlayer
from computer_player import ComputerPlayer
#import pygame
from main_widget import MainWidget
from pyjamas.ui.FocusPanel import FocusPanel
from pyjamas.ui.RootPanel import RootPanel

USING_PYGAME = False

main_widget = None

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
    if USING_PYGAME:
        pygame.init()
        global screen
        screen = pygame.display.set_mode((SW, SH))
        screen.fill(color_green)

    global game, players
    game = Game()
    players = []
    players.append(HumanPlayer(game, Game.BLACK))
    players.append(ComputerPlayer(game, Game.WHITE))

    #while True:
    update()
        #time.sleep(0.01)

def update():
    event()
    # Tell bots to do stuff
    for player in players:
        if game.current_player == player.player:
            player.make_move()
    draw()

def event():
    if USING_PYGAME:
        # Make player move
        ev = pygame.event.get()
        for event in ev:
            if event.type == pygame.MOUSEBUTTONUP:
                pos = pygame.mouse.get_pos()
                handle_click(pos[0], pos[1])

def handle_click(x, y):
    x, y = x // SP, y // SP
    for player in players:
        if game.current_player == player.player:
            try:
                player.make_move(x, y)
            except InvalidMoveException:
                return
            break
    update()

def draw():
    if USING_PYGAME:
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
    else:
        main_widget.draw(game)

if __name__ == "__main__":
    pyjd.setup("output/main.html")
    main_widget = MainWidget(SW, SH)
    panel = FocusPanel(Widget=main_widget.context)
    panel.addMouseListener(main_widget.context)
    setattr(main_widget.context, "onMouseUp", lambda sender, x, y: handle_click(x, y))
    RootPanel().add(panel)
    RootPanel().add(main_widget)
    pyjd.run()
    main()

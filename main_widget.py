from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.Canvas.GWTCanvas import GWTCanvas
from pyjamas.Canvas import Color
from game import Game
from math import pi

class MainWidget(HorizontalPanel):
    def __init__(self, SW, SH):
        HorizontalPanel.__init__(self)
        self.SW = SW
        self.SH = SH
        self.context = GWTCanvas(SW, SH, SW, SH)
        self.context.addStyleName("gwt-canvas")
        self.add(self.context)

    def draw(self, game=None):
        self.context.setFillStyle(Color.Color("#00AA00"))
        self.context.fillRect(0, 0, self.SW, self.SH)

        SP = self.SW // 8

        for x in range(0, self.SW, SP):
            self.context.beginPath()
            self.context.setStrokeStyle(Color.BLACK)
            self.context.setLineWidth(1)
            self.context.moveTo(x, 0)
            self.context.lineTo(x, self.SH)
            self.context.closePath()
            self.context.stroke()
        for y in range(0, self.SH, SP):
            self.context.beginPath()
            self.context.setStrokeStyle(Color.BLACK)
            self.context.setLineWidth(1)
            self.context.moveTo(0, y)
            self.context.lineTo(self.SW, y)
            self.context.closePath()
            self.context.stroke()

        # Draw pieces
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            if game.state[x][y] != Game.NONE:
                if game.state[x][y] == Game.BLACK:
                    self.context.setFillStyle(Color.BLACK)
                elif game.state[x][y] == Game.WHITE:
                    self.context.setFillStyle(Color.WHITE)
                self.context.beginPath()
                self.context.arc(x * SP + SP // 2, y * SP + SP // 2, SP // 2, 0, 2 * pi)
                self.context.closePath()
                self.context.fill()
    
        # Draw liberties
        for (x, y) in Game.liberties(game.current_player, game.state):
            self.context.setFillStyle(Color.WHITE)
            self.context.beginPath()
            self.context.arc(x * SP + SP // 2, y * SP + SP // 2, 4, 0, 2 * pi)
            self.context.closePath()
            self.context.fill()

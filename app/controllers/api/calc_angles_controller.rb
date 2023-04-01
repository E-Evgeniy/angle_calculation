module Api
  class CalcAnglesController < ApplicationController
    def calculation
      angle = ["30"]

      render( json: {angle: angle })
    end
  end
end

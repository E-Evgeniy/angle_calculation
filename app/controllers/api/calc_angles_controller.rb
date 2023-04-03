module Api
  class CalcAnglesController < ApplicationController
    L = 170

    def calculation
      angle = find_angle(params['wing1H1'], params['wing1H2'], params['wing2H1'], params['wing2H2'])

      render(json: {angle: angle })
    end

    def find_angle(height11, height12, height21, height22)
      return 'NONE' unless check_params(height11, height12, height21, height22)

      height11 = height11.to_f
      height12 = height12.to_f
      height21 = height21.to_f
      height22 = height22.to_f
      params_wing1 = find_params_wing(height11, height12)
      params_wing2 = find_params_wing(height21, height22)
      find_alpha(params_wing1, params_wing2)
    end

    def find_params_wing(height1, height2)
      result = {}
      result['A'] = height2 - height1
      result['B'] = find_x(height1, height2)
      result['C'] = height1 * result['B']
      result
    end

    def find_x(height1, height2)
      c = height2 - height1
      alpha = Math.asin(c / L)
      (L * Math.cos(alpha)).round(7)
    end

    def find_alpha(params_wing1, params_wing2)
      k1 = find_k1(params_wing1, params_wing2)
      sqrt1 = find_sqrt(params_wing1)
      sqrt2 = find_sqrt(params_wing2)
      alpha_rad = Math.acos(k1 / (sqrt1 * sqrt2))
      ((alpha_rad * 180) / Math::PI).round(2)
    end

    def find_k1(params_wing1, params_wing2)
      a = params_wing1['A'] * params_wing2['A']
      b = params_wing1['B'] * params_wing2['B']
      (a - b).abs
    end

    def find_sqrt(params_wing)
      a2 = params_wing['A'] * params_wing['A']
      b2 = params_wing['B'] * params_wing['B']
      Math.sqrt(a2 + b2)
    end

    def check_params(a, b, c, d)
      if a.empty? || b.empty? || c.empty? || d.empty?
        false
      else
        true
      end
    end
  end
end

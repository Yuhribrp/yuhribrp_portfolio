module ActionDispatch
  module Routing
    class StaticResponder < Endpoint
      def call(env)
        path = Rails.public_path.join(@path).to_s
        if File.exist?(path)
          env["PATH_INFO"] = path
        end
        @file_handler.call(env)
      end
    end
  end
end

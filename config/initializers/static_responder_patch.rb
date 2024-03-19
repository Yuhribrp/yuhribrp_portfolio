module ActionDispatch
  module Routing
    class StaticResponder < Endpoint
      def call(env)
        matched_file = @file_handler.match(path)
        env["PATH_INFO"] = matched_file if matched_file
        @file_handler.call(env)
      end
    end
  end
end

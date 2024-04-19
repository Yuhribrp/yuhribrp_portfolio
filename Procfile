# rails: bundle exec rails s -p 3000
# web: npm run dev
web: npm run build && rake db:migrate && bin/rails server -b 0.0.0.0 -p ${PORT:-5000}

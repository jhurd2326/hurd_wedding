namespace :deploy do
  task :run_webpack do
    sh 'bin/webpack'
  end
end

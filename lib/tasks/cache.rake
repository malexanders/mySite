namespace :cache do
	# desc "Clears all files and directories in tmp/cache"
	task :clear do
	  FileUtils.rm_rf(Dir['tmp/cache/[^.]*'])
	end
end

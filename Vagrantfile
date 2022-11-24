Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000   # Node.js
  config.vm.network "forwarded_port", guest: 3001, host: 3001   # Node.js
  config.vm.network "forwarded_port", guest: 3002, host: 3002   # Node.js
  config.vm.network "forwarded_port", guest: 27017, host: 27017   # MongoDB
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder ".", "/project_folder"
  config.vm.provision :shell, :path => "./provision.sh"
end

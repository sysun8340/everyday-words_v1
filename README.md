## 封装调试方法  
####首先安装electron包  
`yarn add electron -D`   //安装到Devdependency  
`npm install -g electron-packager`    //封装用  
####安装完这两个包就可以进行调试和打包了  
调试：首先运行`yarn run build`  在根目录生成build文件夹，然后运行`yarn run estart`(estart是自定义名字，在package.json里，这个命令就是用electron执行build里的代码)  
打包：首先运行`yarn run build`（跟调试一样，如果已经调试好，不用执行这个命令）  
打包命令：
`electron-packager . electron --mas --out ../electron --arch=x64 --app-version=0.0.1 --electron-version=2.0.8`  
`electron-packager . electron --win --out ../electron --arch=x64 --app-version=0.0.1 --electron-version=2.0.8`  
#### 打包命令说明  
mas和win分别代表OS和Windows，out后面是输出路径，可以自定义路径和名字，--app-version是生成的app版本号，
--electron-version是打包时使用的electron版本（可以在package.json里查看）
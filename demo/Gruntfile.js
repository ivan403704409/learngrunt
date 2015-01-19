module.exports =function (grunt) {
	
	require('load-grunt-tasks')(grunt);

	var path = {
		src: 'src/',
		dest: 'dist/'
	};

	grunt.initConfig({

		//复制所有文件
		copy: {
			all: {
				expand: true,
				cwd: path.src,
				src: '**/*',
				dest: path.dest
			}
		},


		//压缩js
		uglify: {
			js: {
				files: [
					{
						expand: true,
						cwd: path.src + 'js/',
						src: '*.js',
						dest: path.dest + 'js/'
					}
				]
			}
		},

		//压缩css
		cssmin: {
			css: {
				files: [
					{
						expand: true,
						cwd: path.src + 'css/',
						src: '*.css',
						dest: path.dest + 'css/'
					}
				]
			}
		},

		//压缩图片
		imagemin: {
			static: {
				files: [
					{
						expand: true,
						cwd: path.src,
						src: 'images/**/*.{jpg,png,gif}',
						dest: path.dest
					}
				]
			}
		},

		//清除文件
		clean: {
			all: {
				src: path.dest + '**/*'
			}
		},

		//实时监听，自动执行
		watch: {
			all: {
				files: [path.src + '**/*'],
				tasks: ['copy', 'cssmin', 'uglify']
			}
		}

	});

	grunt.registerTask('build',['copy', 'cssmin', 'uglify', 'imagemin']);

};
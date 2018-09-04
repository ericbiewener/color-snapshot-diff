travis_fold:start:worker_info
[0K[33;1mWorker information[0m
hostname: 57426525-316c-41d7-b371-7e1b9083344e@1.i-0d13a00-production-2-worker-com-ec2.travisci.net
version: v4.0.1 https://github.com/travis-ci/worker/tree/ca93e0d83dad3533f1048a5e9eb65b37cf92fa59
instance: 4031a31 travisci/ci-garnet:packer-1512502276-986baf0 (via amqp)
startup: 394.884861ms
travis_fold:end:worker_info
[0Ktravis_fold:start:system_info
[0K[33;1mBuild system information[0m
Build language: node_js
Build group: stable
Build dist: trusty
Build id: 83773581
Job id: 143716125
Runtime kernel version: 4.14.12-041412-generic
travis-build version: c232eb7c7
[34m[1mBuild image provisioning date and time[0m
Tue Dec  5 20:11:19 UTC 2017
[34m[1mOperating System Details[0m
Distributor ID:	Ubuntu
Description:	Ubuntu 14.04.5 LTS
Release:	14.04
Codename:	trusty
[34m[1mCookbooks Version[0m
7c2c6a6 https://github.com/travis-ci/travis-cookbooks/tree/7c2c6a6
[34m[1mgit version[0m
git version 2.15.1
[34m[1mbash version[0m
GNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)
[34m[1mgcc version[0m
gcc (Ubuntu 4.8.4-2ubuntu1~14.04.3) 4.8.4
Copyright (C) 2013 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

[34m[1mdocker version[0m
Client:
 Version:      17.09.0-ce
 API version:  1.32
 Go version:   go1.8.3
 Git commit:   afdb6d4
 Built:        Tue Sep 26 22:39:28 2017
 OS/Arch:      linux/amd64
[34m[1mclang version[0m
clang version 5.0.0 (tags/RELEASE_500/final)
Target: x86_64-unknown-linux-gnu
Thread model: posix
InstalledDir: /usr/local/clang-5.0.0/bin
[34m[1mjq version[0m
jq-1.5
[34m[1mbats version[0m
Bats 0.4.0
[34m[1mshellcheck version[0m
0.4.6
[34m[1mshfmt version[0m
v2.0.0
[34m[1mccache version[0m
ccache version 3.1.9

Copyright (C) 2002-2007 Andrew Tridgell
Copyright (C) 2009-2011 Joel Rosdahl

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 3 of the License, or (at your option) any later
version.
[34m[1mcmake version[0m
cmake version 3.9.2

CMake suite maintained and supported by Kitware (kitware.com/cmake).
[34m[1mheroku version[0m
heroku-cli/6.14.39-addc925 (linux-x64) node-v9.2.0
[34m[1mimagemagick version[0m
Version: ImageMagick 6.7.7-10 2017-07-31 Q16 http://www.imagemagick.org
[34m[1mmd5deep version[0m
4.2
[34m[1mmercurial version[0m
Mercurial Distributed SCM (version 4.2.2)
(see https://mercurial-scm.org for more information)

Copyright (C) 2005-2017 Matt Mackall and others
This is free software; see the source for copying conditions. There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
[34m[1mmysql version[0m
mysql  Ver 14.14 Distrib 5.6.33, for debian-linux-gnu (x86_64) using  EditLine wrapper
[34m[1mopenssl version[0m
OpenSSL 1.0.1f 6 Jan 2014
[34m[1mpacker version[0m
Packer v1.0.2

Your version of Packer is out of date! The latest version
is 1.1.2. You can update by downloading from www.packer.io
[34m[1mpostgresql client version[0m
psql (PostgreSQL) 9.6.6
[34m[1mragel version[0m
Ragel State Machine Compiler version 6.8 Feb 2013
Copyright (c) 2001-2009 by Adrian Thurston
[34m[1msubversion version[0m
svn, version 1.8.8 (r1568071)
   compiled Aug 10 2017, 17:20:39 on x86_64-pc-linux-gnu

Copyright (C) 2013 The Apache Software Foundation.
This software consists of contributions made by many people;
see the NOTICE file for more information.
Subversion is open source software, see http://subversion.apache.org/

The following repository access (RA) modules are available:

* ra_svn : Module for accessing a repository using the svn network protocol.
  - with Cyrus SASL authentication
  - handles 'svn' scheme
* ra_local : Module for accessing a repository on local disk.
  - handles 'file' scheme
* ra_serf : Module for accessing a repository via WebDAV protocol using serf.
  - using serf 1.3.3
  - handles 'http' scheme
  - handles 'https' scheme

[34m[1msudo version[0m
Sudo version 1.8.9p5
Configure options: --prefix=/usr -v --with-all-insults --with-pam --with-fqdn --with-logging=syslog --with-logfac=authpriv --with-env-editor --with-editor=/usr/bin/editor --with-timeout=15 --with-password-timeout=0 --with-passprompt=[sudo] password for %p:  --without-lecture --with-tty-tickets --disable-root-mailer --enable-admin-flag --with-sendmail=/usr/sbin/sendmail --with-timedir=/var/lib/sudo --mandir=/usr/share/man --libexecdir=/usr/lib/sudo --with-sssd --with-sssd-lib=/usr/lib/x86_64-linux-gnu --with-selinux
Sudoers policy plugin version 1.8.9p5
Sudoers file grammar version 43

Sudoers path: /etc/sudoers
Authentication methods: 'pam'
Syslog facility if syslog is being used for logging: authpriv
Syslog priority to use when user authenticates successfully: notice
Syslog priority to use when user authenticates unsuccessfully: alert
Send mail if the user is not in sudoers
Use a separate timestamp for each user/tty combo
Lecture user the first time they run sudo
Root may run sudo
Allow some information gathering to give useful error messages
Require fully-qualified hostnames in the sudoers file
Visudo will honor the EDITOR environment variable
Set the LOGNAME and USER environment variables
Length at which to wrap log file lines (0 for no wrap): 80
Authentication timestamp timeout: 15.0 minutes
Password prompt timeout: 0.0 minutes
Number of tries to enter a password: 3
Umask to use or 0777 to use user's: 022
Path to mail program: /usr/sbin/sendmail
Flags for mail program: -t
Address to send mail to: root
Subject line for mail messages: *** SECURITY information for %h ***
Incorrect password message: Sorry, try again.
Path to authentication timestamp dir: /var/lib/sudo
Default password prompt: [sudo] password for %p: 
Default user to run commands as: root
Value to override user's $PATH with: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
Path to the editor for use by visudo: /usr/bin/editor
When to require a password for 'list' pseudocommand: any
When to require a password for 'verify' pseudocommand: all
File descriptors >= 3 will be closed before executing a command
Environment variables to check for sanity:
	TZ
	TERM
	LINGUAS
	LC_*
	LANGUAGE
	LANG
	COLORTERM
Environment variables to remove:
	RUBYOPT
	RUBYLIB
	PYTHONUSERBASE
	PYTHONINSPECT
	PYTHONPATH
	PYTHONHOME
	TMPPREFIX
	ZDOTDIR
	READNULLCMD
	NULLCMD
	FPATH
	PERL5DB
	PERL5OPT
	PERL5LIB
	PERLLIB
	PERLIO_DEBUG 
	JAVA_TOOL_OPTIONS
	SHELLOPTS
	GLOBIGNORE
	PS4
	BASH_ENV
	ENV
	TERMCAP
	TERMPATH
	TERMINFO_DIRS
	TERMINFO
	_RLD*
	LD_*
	PATH_LOCALE
	NLSPATH
	HOSTALIASES
	RES_OPTIONS
	LOCALDOMAIN
	CDPATH
	IFS
Environment variables to preserve:
	JAVA_HOME
	TRAVIS
	CI
	DEBIAN_FRONTEND
	XAUTHORIZATION
	XAUTHORITY
	PS2
	PS1
	PATH
	LS_COLORS
	KRB5CCNAME
	HOSTNAME
	HOME
	DISPLAY
	COLORS
Locale to use while parsing sudoers: C
Directory in which to store input/output logs: /var/log/sudo-io
File in which to store the input/output log: %{seq}
Add an entry to the utmp/utmpx file when allocating a pty
PAM service name to use
PAM service name to use for login shells
Create a new PAM session for the command to run in
Maximum I/O log sequence number: 0

Local IP address and netmask pairs:
	172.17.0.2/255.255.0.0

Sudoers I/O plugin version 1.8.9p5
[34m[1mgzip version[0m
gzip 1.6
Copyright (C) 2007, 2010, 2011 Free Software Foundation, Inc.
Copyright (C) 1993 Jean-loup Gailly.
This is free software.  You may redistribute copies of it under the terms of
the GNU General Public License <http://www.gnu.org/licenses/gpl.html>.
There is NO WARRANTY, to the extent permitted by law.

Written by Jean-loup Gailly.
[34m[1mzip version[0m
Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
This is Zip 3.0 (July 5th 2008), by Info-ZIP.
Currently maintained by E. Gordon.  Please send bug reports to
the authors using the web page at www.info-zip.org; see README for details.

Latest sources and executables are at ftp://ftp.info-zip.org/pub/infozip,
as of above date; see http://www.info-zip.org/ for other sites.

Compiled with gcc 4.8.2 for Unix (Linux ELF) on Oct 21 2013.

Zip special compilation options:
	USE_EF_UT_TIME       (store Universal Time)
	BZIP2_SUPPORT        (bzip2 library version 1.0.6, 6-Sept-2010)
	    bzip2 code and library copyright (c) Julian R Seward
	    (See the bzip2 license for terms of use)
	SYMLINK_SUPPORT      (symbolic links supported)
	LARGE_FILE_SUPPORT   (can read and write large files on file system)
	ZIP64_SUPPORT        (use Zip64 to store large files in archives)
	UNICODE_SUPPORT      (store and read UTF-8 Unicode paths)
	STORE_UNIX_UIDs_GIDs (store UID/GID sizes/values using new extra field)
	UIDGID_NOT_16BIT     (old Unix 16-bit UID/GID extra field not used)
	[encryption, version 2.91 of 05 Jan 2007] (modified for Zip 3)

Encryption notice:
	The encryption code of this program is not copyrighted and is
	put in the public domain.  It was originally written in Europe
	and, to the best of our knowledge, can be freely distributed
	in both source and object forms from any country, including
	the USA under License Exception TSU of the U.S. Export
	Administration Regulations (section 740.13(e)) of 6 June 2002.

Zip environment options:
             ZIP:  [none]
          ZIPOPT:  [none]
[34m[1mvim version[0m
VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:43:18)
Included patches: 1-52
Extra patches: 8.0.0056
Modified by pkg-vim-maintainers@lists.alioth.debian.org
Compiled by buildd@
Huge version without GUI.  Features included (+) or not (-):
+acl             +farsi           +mouse_netterm   +syntax
+arabic          +file_in_path    +mouse_sgr       +tag_binary
+autocmd         +find_in_path    -mouse_sysmouse  +tag_old_static
-balloon_eval    +float           +mouse_urxvt     -tag_any_white
-browse          +folding         +mouse_xterm     -tcl
++builtin_terms  -footer          +multi_byte      +terminfo
+byte_offset     +fork()          +multi_lang      +termresponse
+cindent         +gettext         -mzscheme        +textobjects
-clientserver    -hangul_input    +netbeans_intg   +title
-clipboard       +iconv           +path_extra      -toolbar
+cmdline_compl   +insert_expand   -perl            +user_commands
+cmdline_hist    +jumplist        +persistent_undo +vertsplit
+cmdline_info    +keymap          +postscript      +virtualedit
+comments        +langmap         +printer         +visual
+conceal         +libcall         +profile         +visualextra
+cryptv          +linebreak       +python          +viminfo
+cscope          +lispindent      -python3         +vreplace
+cursorbind      +listcmds        +quickfix        +wildignore
+cursorshape     +localmap        +reltime         +wildmenu
+dialog_con      -lua             +rightleft       +windows
+diff            +menu            -ruby            +writebackup
+digraphs        +mksession       +scrollbind      -X11
-dnd             +modify_fname    +signs           -xfontset
-ebcdic          +mouse           +smartindent     -xim
+emacs_tags      -mouseshape      -sniff           -xsmp
+eval            +mouse_dec       +startuptime     -xterm_clipboard
+ex_extra        +mouse_gpm       +statusline      -xterm_save
+extra_search    -mouse_jsbterm   -sun_workshop    -xpm
   system vimrc file: "$VIM/vimrc"
     user vimrc file: "$HOME/.vimrc"
 2nd user vimrc file: "~/.vim/vimrc"
      user exrc file: "$HOME/.exrc"
  fall-back for $VIM: "/usr/share/vim"
Compilation: gcc -c -I. -Iproto -DHAVE_CONFIG_H     -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=1      
Linking: gcc   -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,--as-needed -o vim        -lm -ltinfo -lnsl  -lselinux  -lacl -lattr -lgpm -ldl    -L/usr/lib/python2.7/config-x86_64-linux-gnu -lpython2.7 -lpthread -ldl -lutil -lm -Xlinker -export-dynamic -Wl,-O1 -Wl,-Bsymbolic-functions      
[34m[1miptables version[0m
iptables v1.4.21
[34m[1mcurl version[0m
curl 7.35.0 (x86_64-pc-linux-gnu) libcurl/7.35.0 OpenSSL/1.0.1f zlib/1.2.8 libidn/1.28 librtmp/2.3
[34m[1mwget version[0m
GNU Wget 1.15 built on linux-gnu.
[34m[1mrsync version[0m
rsync  version 3.1.0  protocol version 31
[34m[1mgimme version[0m
v1.2.0
[34m[1mnvm version[0m
0.33.6
[34m[1mperlbrew version[0m
/home/travis/perl5/perlbrew/bin/perlbrew  - App::perlbrew/0.80
[34m[1mphpenv version[0m
rbenv 1.1.1-25-g6aa70b6
[34m[1mrvm version[0m
rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
[34m[1mdefault ruby version[0m
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
[34m[1mCouchDB version[0m
couchdb 1.6.1
[34m[1mElasticSearch version[0m
5.5.0
[34m[1mInstalled Firefox version[0m
firefox 56.0.2
[34m[1mMongoDB version[0m
MongoDB 3.4.10
[34m[1mPhantomJS version[0m
2.1.1
[34m[1mPre-installed PostgreSQL versions[0m
9.2.24
9.3.20
9.4.15
9.5.10
9.6.6
[34m[1mRabbitMQ Version[0m
3.6.14
[34m[1mRedis version[0m
redis-server 4.0.6
[34m[1mriak version[0m
2.2.3
[34m[1mPre-installed Go versions[0m
1.7.4
[34m[1mant version[0m
Apache Ant(TM) version 1.9.3 compiled on April 8 2014
[34m[1mmvn version[0m
Apache Maven 3.5.2 (138edd61fd100ec658bfa2d307c43b76940a5d7d; 2017-10-18T07:58:13Z)
Maven home: /usr/local/maven-3.5.2
Java version: 1.8.0_151, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-8-oracle/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.4.0-101-generic", arch: "amd64", family: "unix"
[34m[1mgradle version[0m

------------------------------------------------------------
Gradle 4.0.1
------------------------------------------------------------

Build time:   2017-07-07 14:02:41 UTC
Revision:     38e5dc0f772daecca1d2681885d3d85414eb6826

Groovy:       2.4.11
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_151 (Oracle Corporation 25.151-b12)
OS:           Linux 4.4.0-101-generic amd64

[34m[1mlein version[0m
Leiningen 2.8.1 on Java 1.8.0_151 Java HotSpot(TM) 64-Bit Server VM
[34m[1mPre-installed Node.js versions[0m
v4.8.6
v6.12.0
v6.12.1
v8.9
v8.9.1
[34m[1mphpenv versions[0m
  system
  5.6
* 5.6.32 (set by /home/travis/.phpenv/version)
  7.0
  7.0.25
  7.1
  7.1.11
  hhvm
  hhvm-stable
[34m[1mcomposer --version[0m
Composer version 1.5.2 2017-09-11 16:59:25
[34m[1mPre-installed Ruby versions[0m
ruby-2.2.7
ruby-2.3.4
ruby-2.4.1
travis_fold:end:system_info
[0K
[32;1mNetwork availability confirmed.[0m

travis_fold:start:ssh_key
[0KInstalling SSH key from: default repository key
Key fingerprint: 2d:ce:e0:b5:22:62:f5:78:37:42:07:e7:2d:85:f2:3c
travis_fold:end:ssh_key
[0K
travis_fold:start:git.checkout
[0Ktravis_time:start:241e5ee0
[0K$ git clone --depth=50 --branch=profile-home-badges git@github.com:talentpair/mumbai.git talentpair/mumbai
Cloning into 'talentpair/mumbai'...
Warning: Permanently added the RSA host key for IP address '192.30.253.112' to the list of known hosts.


travis_time:end:241e5ee0:start=1536086745953140159,finish=1536086747256008475,duration=1302868316
[0K$ cd talentpair/mumbai
$ git checkout -qf 3798bcacb9bf040f23c53cf0c9792c294ad929dd
travis_fold:end:git.checkout
[0K
[33;1mSetting environment variables from repository settings[0m
$ export CI_USER_PASSWORD=[secure]

$ export PATH=./node_modules/.bin:$PATH
[33;1mUpdating nvm[0m
travis_fold:start:nvm.install
[0Ktravis_time:start:07ab4640
[0K$ nvm install 8.11.4
Downloading and installing node v8.11.4...
Downloading https://nodejs.org/dist/v8.11.4/node-v8.11.4-linux-x64.tar.xz...
Computing checksum with sha256sum
Checksums matched!
Now using node v8.11.4 (npm v5.6.0)

travis_time:end:07ab4640:start=1536086748236021952,finish=1536086751076858040,duration=2840836088
[0Ktravis_fold:end:nvm.install
[0Ktravis_fold:start:install.yarn
[0Ktravis_fold:end:install.yarn
[0Ktravis_fold:start:cache.1
[0KSetting up build cache
$ export CASHER_DIR=$HOME/.casher
travis_time:start:0d848827
[0K$ Installing caching utilities

travis_time:end:0d848827:start=1536086756196186762,finish=1536086756266782737,duration=70595975
[0Ktravis_time:start:2351ab16
[0K
travis_time:end:2351ab16:start=1536086756273768452,finish=1536086756278782757,duration=5014305
[0Ktravis_time:start:2167720a
[0K[32;1mattempting to download cache archive[0m
[32;1mfetching profile-home-badges/cache-linux-trusty-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855--node-8.11.4.tgz[0m
[32;1mfound cache[0m

travis_time:end:2167720a:start=1536086756284842422,finish=1536086764562592759,duration=8277750337
[0Ktravis_time:start:0319438d
[0K
travis_time:end:0319438d:start=1536086764568645342,finish=1536086764573577874,duration=4932532
[0Ktravis_time:start:1a371269
[0K[32;1madding /home/travis/.cache/talentpair to cache[0m
[32;1mcreating directory /home/travis/.cache/talentpair[0m

travis_time:end:1a371269:start=1536086764579374047,finish=1536086768779929309,duration=4200555262
[0Ktravis_fold:end:cache.1
[0Ktravis_fold:start:cache.yarn
[0K
travis_time:start:0242b9b6
[0K
travis_time:end:0242b9b6:start=1536086768786557532,finish=1536086768792039701,duration=5482169
[0Ktravis_time:start:327af396
[0K[32;1madding /home/travis/.cache/yarn to cache[0m

travis_time:end:327af396:start=1536086768798265189,finish=1536086779632003346,duration=10833738157
[0Ktravis_fold:end:cache.yarn
[0K$ node --version
v8.11.4
$ npm --version
5.6.0
$ nvm --version
0.33.11
$ yarn --version
1.3.2
travis_fold:start:before_install.1
[0Ktravis_time:start:0a14ca71
[0K$ curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.9.4
[37mInstalling Yarn![0m
/usr/local/bin/yarn
[33m> 1.3.2 is already installed, Specified version: 1.9.4.[0m
[36m> Downloading tarball...[0m

[1/2]: https://yarnpkg.com/downloads/1.9.4/yarn-v1.9.4.tar.gz --> /tmp/yarn.tar.gz.8uy1R5IEEs
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100    91  100    91    0     0   1574      0 --:--:-- --:--:-- --:--:--  1596

  0     0    0   608    0     0   3834      0 --:--:-- --:--:-- --:--:--  3834

100  915k  100  915k    0     0  4425k      0 --:--:-- --:--:-- --:--:-- 4425k

[2/2]: https://yarnpkg.com/downloads/1.9.4/yarn-v1.9.4.tar.gz.asc --> /tmp/yarn.tar.gz.8uy1R5IEEs.asc

100    95  100    95    0     0   2774      0 --:--:-- --:--:-- --:--:--  2774

  0     0    0   612    0     0   2602      0 --:--:-- --:--:-- --:--:--  2602

100   832  100   832    0     0   3402      0 --:--:-- --:--:-- --:--:--  3402
[36m> Verifying integrity...[0m
gpg: key 86E50310: public key "Yarn Packaging <yarn@dan.cx>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
gpg: Signature made Fri 03 Aug 2018 07:53:36 PM UTC using RSA key ID B6FF4DE3
gpg: Good signature from "Yarn Packaging <yarn@dan.cx>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 72EC F46A 56B4 AD39 C907  BBB7 1646 B01B 86E5 0310
     Subkey fingerprint: E219 30C4 D0A4 AA46 1858  1F7A E074 D16E B6FF 4DE3
[32m> GPG signature looks good[0m
[36m> Extracting to ~/.yarn...[0m
[36m> Adding to $PATH...[0m
[36m> We've added the following to your /home/travis/.bashrc
> If this isn't the profile of your current shell then please add the following to your correct profile:
   
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
[0m
[32m> Successfully installed Yarn 1.9.4! Please open another terminal where the `yarn` command will now be available.[0m

travis_time:end:0a14ca71:start=1536086782417537107,finish=1536086784425150419,duration=2007613312
[0Ktravis_fold:end:before_install.1
[0Ktravis_fold:start:before_install.2
[0Ktravis_time:start:33a03154
[0K$ export PATH="$HOME/.yarn/bin:$PATH"

travis_time:end:33a03154:start=1536086784432203157,finish=1536086784437694806,duration=5491649
[0Ktravis_fold:end:before_install.2
[0Ktravis_fold:start:before_install.3
[0Ktravis_time:start:16652cdf
[0K$ echo "machine github.com  login jrobtp  password $CI_USER_PASSWORD" >> ~/.netrc

travis_time:end:16652cdf:start=1536086784445953554,finish=1536086784452106681,duration=6153127
[0Ktravis_fold:end:before_install.3
[0Ktravis_fold:start:before_install.4
[0Ktravis_time:start:0a0f1503
[0K$ export TZ=America/Los_Angeles

travis_time:end:0a0f1503:start=1536086784459540620,finish=1536086784465786579,duration=6245959
[0Ktravis_fold:end:before_install.4
[0Ktravis_fold:start:install
[0Ktravis_time:start:1ea715d2
[0K$ yarn install --frozen-lockfile
yarn install v1.9.4
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "linux" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "babel-plugin-transform-dynamic-import > @babel/plugin-syntax-dynamic-import@7.0.0-beta.34" has incorrect peer dependency "@babel/core@7.0.0-beta.34".
warning "workspace-aggregator-543ff415-6974-424f-824d-44d8bdadeb45 > gettysburg > ng-redux@4.0.3" has incorrect peer dependency "redux@^3.0.0".
warning "workspace-aggregator-543ff415-6974-424f-824d-44d8bdadeb45 > gettysburg > react-css-themr@2.1.2" has incorrect peer dependency "react@^0.14.0 || ^15.0.0-0".
[4/4] Building fresh packages...
Done in 23.15s.

travis_time:end:1ea715d2:start=1536086784473197435,finish=1536086808298992966,duration=23825795531
[0Ktravis_fold:end:install
[0Ktravis_time:start:336cc0cc
[0K$ yarn test:ci --maxWorkers=2 && yarn test:ci:angular --maxWorkers=2 && git rev-parse HEAD | tee ~/.cache/talentpair/last-green-commit
yarn run v1.9.4
$ node ./config/scripts/test.ci.js --maxWorkers=2
No commmit found
Workspaces to test: gettysburg kyoto london templates
PASS kyoto/components/Autocomplete/__tests__/Autocomplete.test.jsx (5.339s)
PASS kyoto/components/DraftEditor/__tests__/DraftEditor.test.jsx
PASS kyoto/components/DraftEditor/__tests__/draftUtils.test.js
PASS gettysburg/search-app/store/__tests__/searchActions.test.js (19.118s)
PASS gettysburg/components/email-preview/__tests__/EmailPreview.test.jsx
PASS kyoto/services/__tests__/user.test.js
PASS gettysburg/services/__tests__/permissions.test.js
PASS london/src/cap/Signup/components/__tests__/CapSignup.test.jsx (10.937s)
PASS london/src/shared-apps/Notifications/containers/__tests__/NotificationCard.test.jsx
PASS london/src/services/__tests__/auth.test.js
PASS gettysburg/components/Email/fields/Jobs/__tests__/Jobs.test.jsx
PASS london/src/cap/store/__tests__/candidateActions.test.js
PASS gettysburg/components/ResultsList/containers/__tests__/ResultsList.test.jsx
PASS kyoto/services/__tests__/mixpanelHelper.test.js
PASS london/src/tap/store/__tests__/jobActions.test.js
PASS gettysburg/components/Autosuggest/__tests__/handlers.test.js
PASS london/src/cap/store/__tests__/pairActions.test.js
PASS gettysburg/search-app/containers/__tests__/FieldsContainer.test.js
PASS london/src/tap/store/__tests__/orgActions.test.js
PASS kyoto/components/Formik/__tests__/Field.test.jsx
PASS gettysburg/components/AutocompleteTextarea/__tests__/AutocompleteTextarea.test.jsx
PASS gettysburg/profile-job-app/components/job-pairs/GoldenPairs/__tests__/GoldenPairsTable.test.jsx
PASS kyoto/components/ListNavigation/__tests__/ListNavigator.test.jsx
PASS kyoto/services/__tests__/apiRequest.test.js
PASS kyoto/components/Formik/__tests__/Form.test.jsx
PASS london/src/shared-apps/Notifications/components/__tests__/Subtitle.test.jsx
FAIL gettysburg/search-app/components/__tests__/BaseFields.test.js
  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = JOBS

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = JOBS 1".

    - Snapshot
    + Received

    @@ -10,18 +10,12 @@
          className="flex items-center justify-between mb2"
        >
          <div
            className="flex items-center"
          >
    -       <defaultProps(Avatar)
    +       <JobAvatar
              className="mr1"
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -           }
    -         }
    -         icon={[Function]}
            />
            <h2
              className="bold m0"
            >
              Jobs

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:168:5)

  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = CANDIDATES

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = CANDIDATES 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            className="flex items-center"
          >
            <CandidateAvatar
              className="mr1"
              dnc={false}
    -         golden={false}
            />
            <h2
              className="bold m0"
            >
              Candidates
    @@ -27,18 +26,11 @@
            disabled={true}
          />
        </div>
        <SourcingEntity
          avatar={
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <JobLogoAvatar
              src="/v1397189042/3f6473457a329fff33b86d5e91a23700.png"
            />
          }
          clearSourcingEntity={[Function]}
          entity={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:180:5)

  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = MAXHIRE_CANDIDATES

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = MAXHIRE_CANDIDATES 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            className="flex items-center"
          >
            <CandidateAvatar
              className="mr1"
              dnc={false}
    -         golden={false}
            />
            <h2
              className="bold m0"
            >
              Maxhire Candidates
    @@ -27,18 +26,11 @@
            disabled={true}
          />
        </div>
        <SourcingEntity
          avatar={
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <JobLogoAvatar
              src="/v1397189042/3f6473457a329fff33b86d5e91a23700.png"
            />
          }
          clearSourcingEntity={[Function]}
          entity={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:191:5)

 â€º 3 snapshots failed.
PASS london/src/cap/Profile/components/__tests__/Profile.test.jsx
PASS london/src/components/ResumeUpload/__tests__/ResumeUpload.test.jsx
PASS gettysburg/components/Form/__tests__/Phone.test.jsx
PASS gettysburg/components/Flyout/containers/__tests__/ProfileFlyout.test.jsx
PASS london/src/components/hocs/__tests__/renderFromCache.test.jsx
PASS london/src/shared-apps/Notifications/store/__tests__/notificationActions.test.js
PASS kyoto/utils/__tests__/string.test.js
PASS london/src/tap/store/__tests__/pairActions.test.js
PASS gettysburg/components/Form/__tests__/RangeSlider.test.js
PASS gettysburg/search-app/containers/__tests__/SearchResults.test.js
PASS gettysburg/components/Autosuggest/__tests__/Autosuggest.test.jsx
PASS gettysburg/components/Autosuggest/__tests__/AutosuggestMulti.test.js
PASS gettysburg/components/Form/MultiValueCreator/__tests__/MultiValueCreator.test.jsx
PASS gettysburg/components/Form/MultiValueCreator/__tests__/ListField.test.jsx
PASS london/src/components/PairActions/__tests__/PairActions.test.jsx
PASS kyoto/services/__tests__/env.test.js
PASS gettysburg/search-app/store/actions/__tests__/fetchList.test.js
PASS gettysburg/components/IntakeCompleteness/__tests__/IntakeCompleteness.test.jsx
PASS kyoto/utils/__tests__/colors.test.js
PASS gettysburg/platform-dashboard-app/store/__tests__/healthActions.test.js
PASS gettysburg/profile-user-app/components/intake/__tests__/UserIntake.test.jsx
PASS gettysburg/profile-job-app/components/job-applicants/__tests__/ApplicantResultsList.test.jsx
PASS gettysburg/components/hocs/__tests__/renderFromCache.test.jsx
PASS london/src/components/ActivityFeed/__tests__/ActivityItem.test.jsx
PASS london/src/services/__tests__/pair.test.js
PASS london/src/tap/OrgProfile/components/__tests__/OrgProfile.test.jsx
PASS london/src/tap/store/__tests__/jobReducers.test.js
PASS gettysburg/components/EntitySearch/__tests__/EntitySearch.test.jsx
PASS gettysburg/components/Form/reduxFormAutosave/__tests__/reduxFormAutosave.test.js
PASS london/src/tap/store/__tests__/jobSelectors.test.js
PASS london/src/components/layout/__tests__/responsive.test.jsx
PASS gettysburg/components/Form/__tests__/choiceFields.test.jsx
PASS kyoto/components/Profiles/__tests__/components.test.jsx
PASS london/src/components/__tests__/AstralLink.test.jsx
PASS gettysburg/utils/__tests__/field.test.js
PASS gettysburg/search-app/components/__tests__/CardActions.test.js
PASS london/src/tap/JobEditor/components/__tests__/JobEdit.test.jsx
PASS london/src/tap/JobEditor/components/__tests__/JobCreate.test.jsx
PASS kyoto/components/__tests__/Badge.test.jsx
PASS kyoto/services/__tests__/s3.test.js
PASS gettysburg/components/__tests__/Pagination.test.jsx
PASS gettysburg/components/ResultsList/store/__tests__/resultsListActions.test.js
PASS kyoto/services/__tests__/londonLink.test.js
PASS london/src/tap/containers/UploadCandidateModal/__tests__/UploadCandidateModal.test.jsx
PASS gettysburg/components/JobForm/__tests__/OrgAddressRadioGroup.test.jsx
PASS london/src/tap/OrgUserProfile/containers/__tests__/OrgUserProfilePage.test.js
PASS london/src/cap/Signup/__tests__/utils.test.js
PASS london/src/tap/JobEditor/components/sections/__tests__/Address.test.jsx
PASS london/src/shared-apps/ActivityFeed/containers/__tests__/UserActivityPage.test.jsx
PASS london/src/components/__tests__/MessageInput.test.jsx
PASS london/src/tap/components/__tests__/PairListTabs.test.jsx
PASS kyoto/utils/__tests__/misc.test.js
PASS london/src/components/Profile/__tests__/render.test.jsx
PASS kyoto/components/Formik/fields/EntitySearch/__tests__/BaseEntitySearch.test.jsx
PASS london/src/components/__tests__/Ping.test.jsx
PASS london/src/cap/components/__tests__/PairListTabs.test.jsx
PASS london/src/components/__tests__/RecentlyViewed.test.jsx
PASS london/src/auth/pages/__tests__/Signin.test.jsx
PASS gettysburg/components/Email/modals/__tests__/SendJobToCandidates.test.jsx
PASS london/src/cap/components/__tests__/CandidateActions.test.jsx
PASS kyoto/services/__tests__/portal.test.js
PASS london/src/cap/PairList/containers/__tests__/PairListPage.test.js
PASS london/src/tap/store/__tests__/pairSelectors.test.js
PASS gettysburg/inbox-app/store/__tests__/actions.test.js
PASS gettysburg/components/Form/__tests__/CheckboxGroup.test.jsx
PASS london/src/auth/pages/__tests__/Reset.test.jsx
PASS gettysburg/search-app/__tests__/queryUtils.test.js
PASS kyoto/components/Autocomplete/__tests__/StaticAutocompleteMulti.test.jsx
PASS kyoto/components/Formik/fields/__tests__/Number.test.jsx
PASS gettysburg/platform-dashboard-app/containers/__tests__/CapHealth.test.jsx
PASS london/src/tap/JobEditor/containers/__tests__/JobEditPage.test.js
PASS gettysburg/search-app/components/__tests__/NameSavedSearchModal.test.js
PASS london/src/cap/UserActivity/containers/__tests__/UserActivityPage.test.js
PASS gettysburg/utils/__tests__/string.test.js
PASS london/src/cap/store/__tests__/pairSelectors.test.js
PASS london/src/components/hocs/__tests__/AuthRoute.test.jsx
PASS kyoto/components/ui/__tests__/Avatars.test.js
FAIL kyoto/components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx
  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 1".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={false}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      29 |     last_name: "Bar",
      30 |   };
    > 31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
         |                                                ^
      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:31:48)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 2".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={false}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      30 |   };
      31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
    > 32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
         |                                                                                  ^
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:32:82)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 3".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={true}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
    > 33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
         |                                                                                 ^
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:33:81)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 4".

    - Snapshot
    + Received

    @@ -1,8 +1,11 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        className="mr1"
    +   classes={Object {}}
    +   golden={false}
        icon={null}
        size={40}
        src="profile_picture_url"
        style={
          Object {

      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
    > 34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
         |                                                                        ^
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
      37 |   expect(

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:34:72)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 5".

    - Snapshot
    + Received

    @@ -1,8 +1,11 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        className="mr1"
    +   classes={Object {}}
    +   golden={false}
        icon={null}
        size={40}
        src="profile_picture_url"
        style={
          Object {

      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
    > 35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
         |                                                                                ^
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:35:80)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 6".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
    > 36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
         |                                                                             ^
      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
      39 |   ).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:36:77)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 7".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
    > 39 |   ).toMatchSnapshot();
         |     ^
      40 |   expect(getSuggestionAvatar({ ...result, type: "job" }, "title")).toMatchSnapshot();
      41 | });
      42 | 

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:39:5)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 8".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <JobLogoAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-jobs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
      39 |   ).toMatchSnapshot();
    > 40 |   expect(getSuggestionAvatar({ ...result, type: "job" }, "title")).toMatchSnapshot();
         |                                                                    ^
      41 | });
      42 | 
      43 | const renderHelper = suggestion => {

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:40:68)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <SuggestionWrapper>
        <CandidateAvatar
          className="mr1"
          dnc={false}
    -     golden={false}
          src={null}
          title="Gravy Potato"
        />
        <div
          className="line-height-normal"

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:50:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 2".

    - Snapshot
    + Received

    @@ -1,9 +1,12 @@
      <SuggestionWrapper>
        <Avatar
          TooltipProps={null}
    +     bg={null}
          className="mr1"
    +     classes={Object {}}
    +     golden={false}
          icon={null}
          size={40}
          src={null}
          style={
            Object {

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:51:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 3".

    - Snapshot
    + Received

    @@ -1,9 +1,12 @@
      <SuggestionWrapper>
        <Avatar
          TooltipProps={null}
    +     bg={null}
          className="mr1"
    +     classes={Object {}}
    +     golden={false}
          icon={null}
          size={40}
          src={null}
          style={
            Object {

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:52:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 4".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <JobLogoAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-jobs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:53:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 5".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <JobLogoAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-jobs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:54:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 6".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:55:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 7".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <SuggestionWrapper>
        <CandidateAvatar
          className="mr1"
          dnc={true}
    -     golden={false}
          src={null}
          title="Squeaky Rodriquez"
        />
        <div
          className="line-height-normal"

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:56:3)

 â€º 15 snapshots failed.
PASS london/src/cap/store/__tests__/candidateSelectors.test.js
PASS gettysburg/platform-dashboard-app/containers/__tests__/OrgLeads.test.jsx
PASS london/src/shared-apps/Notifications/containers/__tests__/NotificationsPage.test.js
PASS kyoto/components/Autocomplete/__tests__/AutocompleteMulti.test.jsx
PASS gettysburg/profile-user-app/components/intake/__tests__/UserIntakeCap.test.jsx
PASS london/src/tap/PairActivity/containers/__tests__/PairActivityPage.test.js
FAIL gettysburg/components/Merge/__tests__/MergeCandidateModal.test.jsx
  â— DisplayUser

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "DisplayUser 1".

    - Snapshot
    + Received

    @@ -2,11 +2,10 @@
        selected={false}
        to=""
      >
        <CandidateAvatar
          dnc={false}
    -     golden={false}
        />
        <ListItemText
          classes={
            Object {
              "primary": "m0",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/Merge/__tests__/MergeCandidateModal.test.jsx:46:3)

  â— DisplayUser

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "DisplayUser 2".

    - Snapshot
    + Received

    @@ -2,11 +2,10 @@
        selected={false}
        to=""
      >
        <CandidateAvatar
          dnc={false}
    -     golden={false}
        />
        <ListItemText
          classes={
            Object {
              "primary": "m0",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/Merge/__tests__/MergeCandidateModal.test.jsx:47:3)

 â€º 2 snapshots failed.
PASS gettysburg/components/Email/modals/__tests__/SendJobsToCandidate.test.jsx
PASS london/src/cap/PairActivity/containers/__tests__/PairActivityPage.test.js
PASS gettysburg/components/Email/fields/Jobs/__tests__/helpers.test.js
PASS london/src/shared-apps/Notifications/store/__tests__/notificationReducers.test.js
PASS kyoto/services/__tests__/autocompleteFetcher.test.js
PASS kyoto/components/ListNavigation/__tests__/NavigableList.test.jsx
PASS london/src/cap/Profile/containers/__tests__/ProfilePage.test.js
PASS gettysburg/profile-job-app/components/job-applicants/__tests__/GoldenApplicantsSwitch.test.jsx
PASS gettysburg/components/ResultsList/store/__tests__/resultsListReducers.test.js
PASS london/src/shared-apps/ActivityFeed/store/__tests__/activityActions.test.js
PASS gettysburg/tags-app/store/__tests__/tagReducers.test.js
PASS london/src/components/Profile/__tests__/DraggableList.test.jsx
PASS london/src/auth/pages/__tests__/Invite.test.jsx
PASS gettysburg/platform-dashboard-app/store/__tests__/orgLeadActions.test.js
PASS gettysburg/components/ResultsList/store/__tests__/resultsListSelectors.test.js
PASS kyoto/components/Profiles/__tests__/Job.test.js
PASS london/src/cap/components/Resume/__tests__/ResumeUpload.test.jsx
PASS kyoto/components/Formik/fields/__tests__/TextInput.test.jsx
PASS gettysburg/search-app/containers/__tests__/getPairActionDispatchers.test.js
PASS london/src/tap/CreateProfile/components/__tests__/CreateProfile.test.jsx
PASS london/src/tap/store/__tests__/orgReducers.test.js
PASS gettysburg/components/Form/MultiValueCreator/__tests__/AutocompleteToggle.test.jsx
PASS kyoto/components/Profiles/__tests__/Candidate.test.js
PASS london/src/components/Profile/__tests__/ListProfileSection.test.jsx
FAIL gettysburg/components/__tests__/IntakeHistory.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -27,12 +27,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/11143"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Tptest",
                        "id": 11143,
    @@ -203,12 +204,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/11143"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Tptest",
                        "id": 11143,
    @@ -289,12 +291,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/870"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Local",
                        "id": 870,

      25 |   expect(wrapper).toMatchSnapshot();
      26 |   wrapper.setState(sampleUserIntakeHistoryApi);
    > 27 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      28 |   wrapper.setProps({ entity: "organization" });
      29 |   wrapper.setState({ next: null, results: [] });
      30 |   expect(wrapper).toMatchSnapshot();

      at Object.toMatchSnapshot (components/__tests__/IntakeHistory.test.jsx:27:19)

 â€º 1 snapshot failed.
PASS gettysburg/search-app/store/__tests__/searchSelectors.test.js
PASS kyoto/services/__tests__/astralLink.test.js
PASS gettysburg/components/notifications-list/store/__tests__/actions.test.js
PASS london/src/auth/pages/__tests__/EmployerSignup.test.jsx
PASS gettysburg/platform-dashboard-app/containers/__tests__/TapHealth.test.jsx
PASS gettysburg/components/Form/__tests__/Select.test.js
PASS london/src/tap/UserActivity/containers/__tests__/UserActivityPage.test.js
PASS london/src/cap/Signup/containers/__tests__/CapSignupPage.test.jsx
PASS london/src/components/Auth/__tests__/Page.test.jsx
PASS gettysburg/components/ReportEntityModal/__tests__/ReportEntityModal.test.jsx
PASS london/src/cap/components/__tests__/CreateProfileModal.test.jsx
PASS gettysburg/tags-app/store/__tests__/tagActions.test.js
PASS london/src/shared-apps/Notifications/store/__tests__/notificationSelectors.test.js
PASS london/src/tap/JobDetail/containers/__tests__/JobDetailPage.test.js
PASS kyoto/services/__tests__/choiceService.test.js
PASS london/src/tap/JobPreferences/components/__tests__/JobPreferences.test.jsx
PASS london/src/tap/OrgProfile/containers/__tests__/OrgProfilePage.test.js
PASS kyoto/components/DraftEditor/__tests__/DraftEditorControls.test.jsx
PASS london/src/cap/PairActivity/components/__tests__/PairActivity.test.jsx
PASS london/src/cap/store/__tests__/pairActivitySelectors.test.js
PASS london/src/tap/store/__tests__/pairActivitySelectors.test.js
PASS london/src/tap/JobTeamProfile/components/__tests__/JobTeamProfile.test.js
PASS london/src/cap/Profile/components/sections/__tests__/JobHistory.test.jsx
PASS kyoto/components/__tests__/CopyToClipboard.test.js
PASS gettysburg/profile-org-app/components/intake/__tests__/AddressFields.test.jsx
PASS gettysburg/components/ResultsList/containers/__tests__/ResultItem.test.jsx
PASS gettysburg/components/Form/__tests__/validators.test.js
PASS kyoto/services/__tests__/ping.test.js
PASS london/src/cap/store/__tests__/candidateReducers.test.js
FAIL london/src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx
  â— JobTeamMembers â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobTeamMembers renders 1".

    - Snapshot
    + Received

    @@ -26,11 +26,12 @@
              jobId={1}
              key="11149"
              orgId={9001}
              userId={11149}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Eric",
                    "id": 11149,
                    "last_name": "Biewener",
    @@ -49,11 +50,12 @@
              jobId={1}
              key="11150"
              orgId={9001}
              userId={11150}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Marcy",
                    "id": 11150,
                    "last_name": "Jane",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx:38:5)

  â— JobTeamMembers â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobTeamMembers renders 2".

    - Snapshot
    + Received

    @@ -33,11 +33,12 @@
              jobId={1}
              key="11149"
              orgId={9001}
              userId={11149}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Eric",
                    "id": 11149,
                    "last_name": "Biewener",
    @@ -56,11 +57,12 @@
              jobId={1}
              key="11150"
              orgId={9001}
              userId={11150}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Marcy",
                    "id": 11150,
                    "last_name": "Jane",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx:40:5)

 â€º 2 snapshots failed.
PASS kyoto/utils/entities/__tests__/candidate.test.js
PASS london/src/cap/components/PublicPrivate/__tests__/PublicPrivateForm.test.jsx
PASS london/src/tap/PairList/components/__tests__/PairList.test.js
FAIL gettysburg/components/EntityCard/__tests__/CandidateCard.test.jsx
  â— CandidateCard â€º should render with candidate with missing subtitle info

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with missing subtitle info 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:19:5)

  â— CandidateCard â€º should render with candidate with missing omnis

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with missing omnis 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:23:5)

  â— CandidateCard â€º should render with candidate with no last updated

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with no last updated 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:27:5)

  â— CandidateCard â€º should render with candidate with provided chips

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with provided chips 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips="chips"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:31:5)

  â— CandidateCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard renders without label 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/CandidateCard.test.jsx:42:5)

  â— CandidateCard â€º should render with badge

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with badge 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={
          <mapProps(Badge)

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:51:5)

 â€º 6 snapshots failed.
PASS london/src/components/NavSearch/__tests__/NavSearchForm.test.jsx
FAIL london/src/components/ActivityFeed/__tests__/CandidateSend.test.jsx
  â— Avatar â€º snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Avatar snapshot 1".

    - Snapshot
    + Received

    @@ -1,7 +1,8 @@
    - <mapProps(Avatar)
    + <UserAvatar
        className="mr025 mt025"
    +   style={null}
        user={
          Stub {
            "candidate": 3639,
            "first_name": "Ryan",
            "id": 11527,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/ActivityFeed/__tests__/CandidateSend.test.jsx:24:5)

 â€º 1 snapshot failed.
PASS gettysburg/components/Flyout/store/__tests__/flyoutReducers.test.js
PASS gettysburg/services/entities/__tests__/orgApiService.test.js
PASS london/src/shared-apps/ActivityFeed/containers/__tests__/NewPairActivity.test.jsx
PASS kyoto/services/__tests__/host.test.js
PASS london/src/auth/pages/__tests__/Forgot.test.jsx
PASS gettysburg/components/Form/reduxFormAutosave/__tests__/AutoSaveForm.test.js
PASS london/src/components/hocs/__tests__/createHeader.test.jsx
PASS kyoto/utils/__tests__/array.test.js
PASS london/src/components/Profile/__tests__/ui.test.jsx
PASS london/src/components/Hotkey/__tests__/HotkeyManager.test.jsx
PASS gettysburg/components/__tests__/Collapsible.test.jsx
PASS london/src/shared-apps/ActivityFeed/components/__tests__/ActivityFeed.test.jsx
PASS london/src/cap/store/__tests__/pairReducers.test.js
PASS london/src/shared-apps/ActivityFeed/store/__tests__/userActivityActions.test.js
PASS kyoto/components/Formik/fields/__tests__/Select.test.jsx
PASS london/src/components/ActivityFeed/__tests__/Comment.test.jsx
PASS london/src/components/Profile/__tests__/omniSubmit.test.js
PASS london/src/tap/utils/__tests__/page.test.js
PASS london/src/cap/Profile/components/__tests__/ResumeModal.test.jsx
PASS kyoto/components/Formik/__tests__/Expose.test.jsx
PASS london/src/shared-apps/ActivityFeed/store/__tests__/activityReducers.test.js
FAIL london/src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx
  â— OrgUserProfile â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgUserProfile renders correctly 1".

    - Snapshot
    + Received

    @@ -52,18 +52,11 @@
              key="2602"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -90,18 +83,11 @@
              key="1"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -128,18 +114,11 @@
              key="2600"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx:21:5)

  â— OrgUserProfile â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgUserProfile renders correctly 2".

    - Snapshot
    + Received

    @@ -58,18 +58,11 @@
              key="2602"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -96,18 +89,11 @@
              key="1"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -134,18 +120,11 @@
              key="2600"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx:34:5)

 â€º 2 snapshots failed.
PASS gettysburg/components/JobForm/__tests__/normalizeFieldValues.test.js
PASS gettysburg/components/Intake/__tests__/createIntakeAutoSubmit.test.js
PASS london/src/tap/store/__tests__/userReducers.test.js
FAIL gettysburg/components/EntityCard/__tests__/ContactCard.test.js
  â— ContactCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/ContactCard.test.js:15:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:19:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 2".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:20:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 3".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:23:5)

 â€º 4 snapshots failed.
FAIL gettysburg/profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:33:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 3".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:34:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 5".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:35:3)

 â€º 3 snapshots failed.
PASS gettysburg/components/EntityCard/__tests__/JobCard.test.jsx
PASS london/src/components/Profile/__tests__/ProfileSection.test.jsx
PASS london/src/components/Profile/__tests__/DeletableItem.test.jsx
PASS gettysburg/components/Email/__tests__/createEmailModal.test.jsx
PASS london/src/shared-apps/ActivityFeed/store/__tests__/sharedActivityReducers.test.js
PASS london/src/cap/Profile/components/sections/__tests__/Education.test.jsx
PASS gettysburg/components/document/__tests__/DocusignModal.test.jsx
PASS london/src/shared-apps/Notifications/containers/__tests__/NotificationsLink.test.jsx
FAIL gettysburg/profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx:34:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 2".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx:35:3)

 â€º 2 snapshots failed.
PASS gettysburg/profile-job-app/components/job-pairs/GoldenPairs/__tests__/GoldenPairs.test.jsx
PASS gettysburg/profile-org-app/components/intake/__tests__/OrgIntakeTap.test.jsx
PASS gettysburg/components/Autosuggest/__tests__/StaticAutosuggestMulti.test.jsx
PASS london/src/components/Onboarding/__tests__/Tour.test.js
PASS kyoto/components/__tests__/PortalRenderer.test.jsx
  â— Console

    console.error node_modules/fbjs/lib/warning.js:33
      Warning: Each child in an array or iterator should have a unique "key" prop.
      
      Check the top-level render call using <div>. See https://fb.me/react-warning-keys for more information.
          in cmp (at PortalRenderer.jsx:35)

PASS kyoto/utils/entities/__tests__/job.test.js
PASS london/src/tap/JobEditor/components/sections/__tests__/Summary.test.jsx
PASS kyoto/components/__tests__/Draggable.test.js
PASS london/src/components/Onboarding/__tests__/OnboardingContext.test.js
PASS london/src/tap/JobList/components/__tests__/JobList.test.js
PASS gettysburg/search-app/__tests__/Search.test.js
PASS london/src/components/ActivityFeed/__tests__/Interest.test.jsx
FAIL gettysburg/components/ReportCard/__tests__/ReportCard.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -11,11 +11,12 @@
              }
            }
            className="mr2"
            icon={[Function]}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Object {
                  "first_name": "Test",
                  "last_name": "Recruiter",
                }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/ReportCard/__tests__/ReportCard.test.jsx:30:3)

 â€º 1 snapshot failed.
PASS gettysburg/services/entities/__tests__/candidateApiService.test.js
PASS gettysburg/components/JobForm/__tests__/HiringManagerDropdown.test.jsx
PASS kyoto/components/__tests__/RenderText.test.jsx
PASS london/src/components/Onboarding/ui/__tests__/Card.test.js
FAIL london/src/components/__tests__/AccountOwnerListItem.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex bg-white className"
        foo={1}
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "foo",
              "last_name": "bar",
            }

      22 | test("renders correctly", () => {
      23 |   const { wrapper } = shallowRender();
    > 24 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      25 | 
      26 |   expect(wrapper.setProps({ notificationCount: 7, userActivityId: 4 })).toMatchSnapshot();
      27 | });

      at Object.toMatchSnapshot (src/components/__tests__/AccountOwnerListItem.test.jsx:24:19)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex bg-white className"
        foo={1}
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "foo",
              "last_name": "bar",
            }

      24 |   expect(wrapper).toMatchSnapshot();
      25 | 
    > 26 |   expect(wrapper.setProps({ notificationCount: 7, userActivityId: 4 })).toMatchSnapshot();
         |                                                                         ^
      27 | });
      28 | 
      29 | test("NotificationCountWatcher dispatches the expected actions", () => {

      at Object.toMatchSnapshot (src/components/__tests__/AccountOwnerListItem.test.jsx:26:73)

 â€º 2 snapshots failed.
PASS london/src/tap/components/__tests__/InviteUserModal.test.jsx
PASS london/src/components/Profile/__tests__/onOmniDragEnd.test.js
PASS gettysburg/profile-job-app/components/job-intake/__tests__/JobSummary.test.jsx
PASS kyoto/services/__tests__/sentry.test.js
PASS gettysburg/profile-pair-app/components/__tests__/PairCard.test.js
PASS london/src/cap/PairDetail/containers/__tests__/PairDetailPage.test.js
PASS kyoto/utils/entities/__tests__/location.test.js
PASS london/src/cap/Preferences/containers/__tests__/PreferencesPage.test.js
PASS gettysburg/components/EntityCard/__tests__/PairStatus.test.js
FAIL gettysburg/components/EntityCard/__tests__/MHContactCard.test.js
  â— MHContactCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHContactCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={<mapProps(Badge) />}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHContactCard.test.js:15:5)

 â€º 1 snapshot failed.
PASS london/src/components/layout/__tests__/index.test.js
PASS gettysburg/components/Autosuggest/__tests__/utils.test.js
PASS london/src/tap/store/__tests__/pairReducers.test.js
PASS gettysburg/components/ResultsList/containers/__tests__/SelectableResultItem.test.jsx
PASS london/src/tap/CreateProfile/containers/__tests__/CreateProfilePage.test.jsx
FAIL gettysburg/profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:31:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 2".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:32:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 3".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:33:3)

 â€º 3 snapshots failed.
PASS gettysburg/search-app/containers/__tests__/MainMenu.test.js
FAIL london/src/components/ActivityFeed/__tests__/Job.test.jsx
  â— Job â€º should match snapshot with one job

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job should match snapshot with one job 1".

    - Snapshot
    + Received

    @@ -18,18 +18,11 @@
        >
          <ListItem
            selected={false}
            to=""
          >
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-orgs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <OrgAvatar
              src={null}
              title="TPCompanyY4aqk80 081D20E"
            />
            <ListItemText
              primary="Ruby Developer081D20E"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/Job.test.jsx:29:5)

  â— Job â€º should match snapshot with one job

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job should match snapshot with one job 2".

    - Snapshot
    + Received

    @@ -18,18 +18,11 @@
        >
          <ListItem
            selected={false}
            to=""
          >
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-orgs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <OrgAvatar
              src={null}
              title="TPCompanyY4aqk80 081D20E"
            />
            <ListItemText
              primary="Ruby Developer081D20E"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/Job.test.jsx:34:5)

  â— Job â€º Avatar â€º snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job Avatar snapshot 1".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr025 mt025"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        title="Space Patio"
      />

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/ActivityFeed/__tests__/Job.test.jsx:44:7)

 â€º 3 snapshots failed.
PASS london/src/tap/JobEditor/containers/__tests__/JobCreatePage.test.js
PASS london/src/cap/components/__tests__/ApplicationSubmitted.test.js
PASS london/src/components/__tests__/FeedbackModal.test.jsx
PASS gettysburg/components/Form/__tests__/NumberField.test.js
PASS london/src/tap/PairActivity/containers/__tests__/PairActivityFeed.test.jsx
PASS london/src/cap/PairActivity/containers/__tests__/PairActivityFeed.test.jsx
PASS gettysburg/components/Form/__tests__/Label.test.js
FAIL gettysburg/components/EntityCard/__tests__/EntityCard.test.jsx
  â— EntityCard â€º should match snapshot with all props and single chip

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "EntityCard should match snapshot with all props and single chip 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            <div
              className="flex-none"
            >
              <CandidateAvatar
                dnc={false}
    -           golden={false}
              />
            </div>
            <div
              className="flex-auto pl2"
            >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/EntityCard.test.jsx:21:5)

  â— EntityCard â€º should match snapshot with long desc and chips array

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "EntityCard should match snapshot with long desc and chips array 1".

    - Snapshot
    + Received

    @@ -6,11 +6,10 @@
            <div
              className="flex-none"
            >
              <CandidateAvatar
                dnc={false}
    -           golden={false}
              />
            </div>
            <div
              className="flex-auto pl2"
            >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/EntityCard.test.jsx:37:5)

 â€º 2 snapshots failed.
PASS london/src/tap/JobEditor/containers/__tests__/JobStatusForm.test.jsx
FAIL london/src/tap/PairActivity/components/__tests__/PairActivity.test.js
  â— HiringTeamListItem renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "HiringTeamListItem renders correctly 1".

    - Snapshot
    + Received

    @@ -1,9 +1,10 @@
      <div
        className="flex mt1 items-center"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Blind",
              "id": 11455,
              "last_name": "Carbon",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/PairActivity/components/__tests__/PairActivity.test.js:49:3)

 â€º 1 snapshot failed.
PASS london/src/tap/JobPreferences/containers/__tests__/JobPreferencesPage.test.jsx
PASS gettysburg/services/entities/__tests__/jobApiService.test.js
PASS gettysburg/inbox-app/store/reducers/__tests__/tasks.test.js
PASS london/src/tap/OrgSettings/containers/__tests__/OrgSettingsPage.test.js
PASS gettysburg/components/Form/__tests__/TextInput.test.js
PASS london/src/components/__tests__/Redirects.test.jsx
PASS london/src/shared-apps/ActivityFeed/store/__tests__/userActivitySelectors.test.js
PASS gettysburg/inbox-app/components/__tests__/TaskReview.test.js
PASS london/src/cap/PairList/components/__tests__/PairList.test.jsx
PASS kyoto/utils/entities/__tests__/user.test.js
PASS london/src/cap/Signup/components/pages/__tests__/Eligibility.test.js
PASS kyoto/components/DraftEditor/__tests__/convertFromHtml.test.js
PASS gettysburg/components/Flyout/store/__tests__/flyoutActions.test.js
PASS kyoto/components/__tests__/ConfirmationModal.test.jsx
PASS kyoto/components/__tests__/Modal.test.jsx
PASS london/src/cap/components/__tests__/IncompleteProfileModal.test.jsx
PASS kyoto/services/__tests__/localStorageService.test.js
PASS london/src/__tests__/routeConfig.test.js
PASS kyoto/components/Formik/fields/__tests__/Checkbox.test.jsx
PASS kyoto/components/ui/__tests__/List.test.jsx
PASS london/src/shared-apps/ActivityFeed/containers/__tests__/UserActivityFeed.test.jsx
PASS kyoto/components/hocs/__tests__/PropsFetcher.test.jsx
PASS gettysburg/components/Form/__tests__/ModalForm.test.js
PASS gettysburg/components/Email/__tests__/EmailModal.test.js
PASS gettysburg/components/Email/__tests__/Warnings.test.js
PASS gettysburg/platform-dashboard-app/components/__tests__/CandidateMenu.test.jsx
PASS gettysburg/profile-job-app/components/JobCreate/__tests__/JobCreate.test.js
PASS london/src/tap/components/__tests__/ToggleableListItem.test.jsx
PASS gettysburg/search-app/containers/__tests__/SavedSearches.test.js
PASS kyoto/components/Formik/__tests__/determineValueArrayChange.test.js
FAIL london/src/components/MainMenu/__tests__/MainMenu.test.jsx
  â— MainMenu â€º renders correctly for candidate

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for candidate 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Talentpair",
                "id": 11143,
                "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:22:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:27:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 2".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:28:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 3".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:29:5)

  â— MainMenu â€º renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for hiring manager 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Jack",
                "id": 2298,
                "last_name": "Daniel",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:35:5)

  â— MainMenu â€º renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for hiring manager 2".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Jack",
                "id": 2298,
                "last_name": "Daniel",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:37:5)

 â€º 6 snapshots failed.
PASS kyoto/components/Autocomplete/__tests__/helpers.test.jsx
PASS london/src/tap/PairDetail/containers/__tests__/PairDetailPage.test.js
PASS kyoto/components/DraftEditor/rendering/__tests__/convertToHtmlForEmail.test.jsx
PASS gettysburg/components/IntakeCompleteness/__tests__/IntakeCompletenessModal.test.jsx
FAIL london/src/components/ActivityFeed/__tests__/FeedItem.test.jsx
  â— FeedItem â€º should match snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem should match snapshot 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:27:5)

  â— FeedItem â€º no body

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem no body 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:31:5)

  â— FeedItem â€º no avatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem no avatar 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:35:5)

  â— FeedItem â€º subtitle

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem subtitle 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:39:5)

 â€º 4 snapshots failed.
PASS kyoto/components/Profiles/__tests__/GoogleResume.test.js
PASS gettysburg/components/Form/__tests__/FormElement.test.js
PASS london/src/tap/components/__tests__/OrgTeamMembersList.test.jsx
PASS london/src/components/Profile/sections/__tests__/Omnis.test.jsx
PASS kyoto/services/__tests__/processPing.test.js
PASS kyoto/components/ui/__tests__/Buttons.test.jsx
PASS gettysburg/components/Flyout/containers/__tests__/NavigableFlyoutList.test.jsx
PASS london/src/cap/Profile/components/sections/__tests__/Relocation.test.jsx
PASS kyoto/components/Formik/fields/__tests__/DraftEditor.test.jsx
PASS gettysburg/platform-dashboard-app/store/__tests__/healthReducers.test.js
PASS london/src/cap/PairDetail/components/__tests__/PairDetail.test.jsx
PASS kyoto/components/DraftEditor/__tests__/DefaultEditorState.test.js
PASS gettysburg/components/Form/__tests__/RadioGroup.test.js
PASS london/src/shared-apps/Notifications/containers/__tests__/NotificationPing.test.jsx
FAIL gettysburg/components/EntityCard/__tests__/OrgCard.test.js
  â— OrgCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <EntityCard
        avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1472074927/h9xch1tpvurvk1zkg1jm.png"
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/OrgCard.test.js:15:5)

  â— OrgSubtitle â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgSubtitle renders correctly 2".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <EntityCard
        avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1472074927/h9xch1tpvurvk1zkg1jm.png"
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/OrgCard.test.js:22:5)

 â€º 2 snapshots failed.
PASS london/src/tap/JobDetail/components/__tests__/JobDetail.test.js
PASS kyoto/components/Profiles/__tests__/ShareModal.test.js
PASS gettysburg/components/Form/react-toolbox/__tests__/RadioGroup.test.jsx
PASS london/src/auth/__tests__/utils.test.js
PASS kyoto/components/Formik/__tests__/choiceFetchers.test.jsx
PASS london/src/tap/OrgProfile/components/__tests__/TeamMembersList.test.jsx
PASS gettysburg/search-app/containers/__tests__/SavedSearchLink.test.js
PASS london/src/components/ActivityFeed/__tests__/Verbs.test.jsx
PASS gettysburg/profile-user-app/components/intake/__tests__/IntakeContributors.test.jsx
PASS london/src/tap/JobInfo/components/__tests__/JobInfo.test.js
PASS london/src/shared-apps/Notifications/components/__tests__/NotificationFeed.test.jsx
PASS gettysburg/search-app/components/__tests__/CandidateFields.test.js
PASS gettysburg/components/Form/__tests__/FormField.test.js
PASS london/src/tap/Profile/containers/__tests__/ProfilePage.test.js
PASS gettysburg/components/Form/react-toolbox/__tests__/Checkbox.test.jsx
PASS gettysburg/components/Form/react-toolbox/__tests__/Input.test.jsx
PASS london/src/cap/Profile/components/sections/__tests__/Eligibility.test.jsx
PASS gettysburg/search-app/components/__tests__/SearchCandidateCard.test.jsx
PASS gettysburg/components/notifications-list/store/__tests__/reducers.test.js
PASS gettysburg/components/Form/react-toolbox/__tests__/Switch.test.jsx
PASS london/src/components/__tests__/SyncWithLinkedIn.test.js
FAIL gettysburg/components/EntityCard/__tests__/MHCandidateCard.test.jsx
  â— MHCandidateCard â€º should match snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHCandidateCard should match snapshot 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
          />
        }
        badge={<mapProps(Badge) />}
        chips={null}
        description=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHCandidateCard.test.jsx:17:5)

  â— MHCandidateCard â€º should render with candidate with missing subtitle info

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHCandidateCard should render with candidate with missing subtitle info 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
          />
        }
        badge={<mapProps(Badge) />}
        chips={null}
        description=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHCandidateCard.test.jsx:21:5)

 â€º 2 snapshots failed.
PASS gettysburg/components/Form/__tests__/BaseForm.test.js
PASS london/src/tap/JobList/containers/__tests__/JobListPage.test.js
PASS london/src/components/Profile/sections/__tests__/SectionFormik.test.jsx
PASS kyoto/components/Formik/fields/__tests__/RadioGroup.test.jsx
PASS london/src/tap/JobEditor/components/sections/__tests__/Salary.test.jsx
PASS london/src/tap/JobEditor/components/__tests__/JobCreateSuccessModal.test.js
PASS london/src/shared-apps/ActivityFeed/containers/__tests__/NewUserActivity.test.jsx
PASS kyoto/components/Formik/__tests__/ModalForm.test.jsx
PASS kyoto/components/__tests__/ButtonMenu.test.jsx
FAIL london/src/cap/Signup/components/pages/__tests__/Summary.test.js
  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 2".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Stub {
                    "first_name": "Diane",
                    "id": 11146,
                    "last_name": "asdf",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Signup/components/pages/__tests__/Summary.test.js:22:3)

  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 4".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Stub {
                    "first_name": "Diane",
                    "id": 11146,
                    "last_name": "asdf",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Signup/components/pages/__tests__/Summary.test.js:23:3)

 â€º 2 snapshots failed.
PASS gettysburg/search-app/components/__tests__/DeleteSavedSearchModal.test.js
PASS gettysburg/store/__tests__/index.test.js
FAIL london/src/components/MainMenu/__tests__/SharedLinks.test.jsx
  â— AvatarItem

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "AvatarItem 1".

    - Snapshot
    + Received

    @@ -1,9 +1,10 @@
      <WithStyles(MenuItem)
        component="li"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Talentpair",
              "id": 11143,
              "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/SharedLinks.test.jsx:14:3)

  â— AvatarItem

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "AvatarItem 2".

    - Snapshot
    + Received

    @@ -1,10 +1,11 @@
      <WithStyles(MenuItem)
        component={[Function]}
        to="/test"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Talentpair",
              "id": 11143,
              "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/SharedLinks.test.jsx:15:3)

 â€º 2 snapshots failed.
PASS london/src/components/ActivityFeed/__tests__/Pass.test.jsx
FAIL london/src/cap/components/__tests__/ProfileStatus.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -3,11 +3,11 @@
        isLast={false}
      >
        <div
          className="flex items-center mb2"
        >
    -     <withProps(Avatar)
    +     <CompleteAvatar
            className="mr2"
          />
          <ColumnTitle
            className={null}
          >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/cap/components/__tests__/ProfileStatus.test.jsx:14:3)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 4".

    - Snapshot
    + Received

    @@ -3,11 +3,11 @@
        isLast={false}
      >
        <div
          className="flex items-center mb2"
        >
    -     <withProps(Avatar)
    +     <CompleteAvatar
            className="mr2"
          />
          <ColumnTitle
            className={null}
          >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/cap/components/__tests__/ProfileStatus.test.jsx:19:3)

 â€º 2 snapshots failed.
PASS kyoto/components/Formik/__tests__/ParserContext.test.js
PASS london/src/components/hocs/__tests__/Loadable.test.jsx
PASS kyoto/components/DraftEditor/rendering/__tests__/components.test.jsx
PASS gettysburg/utils/__tests__/misc.test.js
PASS gettysburg/search-app/components/__tests__/SearchOrgCard.test.jsx
PASS london/src/components/Onboarding/__tests__/utils.test.js
PASS london/src/cap/store/__tests__/pairActivityActions.test.js
PASS london/src/tap/store/__tests__/pairActivityActions.test.js
PASS gettysburg/components/Form/react-toolbox/__tests__/Dropdown.test.jsx
PASS gettysburg/services/entities/__tests__/userApiService.test.js
FAIL london/src/cap/Profile/components/sections/__tests__/BasicInfo.test.jsx
  â— renders correctly for editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for editing 2".

    - Snapshot
    + Received

    @@ -10,11 +10,12 @@
          wrap="nowrap"
        >
          <WithStyles(Grid)
            item={true}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Stub {
                  "first_name": "Robustican",
                  "id": 21007,
                  "last_name": "YÃ¥o",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Profile/components/sections/__tests__/BasicInfo.test.jsx:14:3)

 â€º 1 snapshot failed.
PASS gettysburg/search-app/components/__tests__/SearchJobCard.test.jsx
PASS london/src/tap/store/__tests__/jobPairReducers.test.js
PASS kyoto/components/DraftEditor/__tests__/linkDecoratorConfig.test.jsx
PASS kyoto/components/Profiles/__tests__/Icons.test.js
PASS london/src/cap/Signup/components/pages/__tests__/SetRelocate.test.js
PASS london/src/tap/PairDetail/components/__tests__/PairDetail.test.js
FAIL gettysburg/components/EntityCard/__tests__/MHOrgCard.test.js
  â— MHOrgCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHOrgCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,17 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<OrgAvatar />}
        badge={<mapProps(Badge) />}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHOrgCard.test.js:15:5)

 â€º 1 snapshot failed.
PASS gettysburg/components/Table/__tests__/TableNextPrevPagination.test.jsx
PASS gettysburg/components/JobForm/__tests__/CreateHiringManagerForm.test.jsx
PASS gettysburg/components/ResultsList/containers/__tests__/MHCandidateResultItem.test.jsx
PASS london/src/cap/store/__tests__/pairActivityReducers.test.js
PASS kyoto/components/__tests__/AsyncButton.test.js
PASS london/src/tap/store/__tests__/pairActivityReducers.test.js
PASS london/src/components/ActivityFeed/__tests__/BadnessReport.test.jsx
PASS london/src/components/Profile/sections/__tests__/Links.test.jsx
PASS london/src/components/ActivityFeed/__tests__/MutualInterest.test.jsx
PASS london/src/components/Profile/__tests__/BaseProfile.test.jsx
PASS gettysburg/profile-user-app/components/__tests__/UserPlatformPreferences.test.jsx
PASS london/src/tap/JobEditor/components/__tests__/CreateAddressModal.test.jsx
PASS gettysburg/components/GoldenPairsSwitch/__tests__/GoldenPairsSwitch.test.jsx
PASS gettysburg/components/ResultCards/__tests__/ResultCards.test.jsx
PASS london/src/cap/Profile/components/sections/__tests__/Location.test.jsx
PASS london/src/components/PairActions/__tests__/PairActionButtons.test.jsx
PASS kyoto/components/Formik/__tests__/ParseOnSubmit.test.js
PASS kyoto/components/DraftEditor/__tests__/isUnsupportedDevice.test.js
PASS london/src/cap/Profile/components/sections/__tests__/FieldOfWork.test.jsx
PASS gettysburg/profile-user-app/components/tap-activation/__tests__/getControllerMethods.test.jsx
PASS london/src/cap/Preferences/components/__tests__/Preferences.test.jsx
PASS london/src/tap/Profile/components/__tests__/Header.test.js
PASS gettysburg/profile-user-app/components/intake/__tests__/Preferences.test.js
PASS london/src/components/ActivityFeed/__tests__/PairAdded.test.jsx
PASS london/src/cap/Profile/components/sections/__tests__/PublicPrivate.test.jsx
PASS gettysburg/search-app/store/__tests__/searchReducers.test.js
PASS kyoto/components/Formik/__tests__/Reinitialize.test.js
PASS london/src/components/MainMenu/__tests__/AmMenu.test.jsx
PASS london/src/tap/Profile/components/__tests__/Profile.test.js
PASS london/src/tap/store/__tests__/storeUtils.test.js
PASS kyoto/components/__tests__/EnvIndicator.test.jsx
PASS templates/src/__tests__/render.test.js (8.694s)
PASS london/src/components/Hotkey/__tests__/Hotkey.test.jsx
PASS london/src/components/ActivityFeed/__tests__/Placement.test.jsx
PASS london/src/tap/Profile/components/__tests__/LinkedInProfile.test.js
PASS london/src/components/ActivityFeed/__tests__/FirstInterest.test.jsx
PASS gettysburg/components/Flyout/components/__tests__/StaticFlyout.test.js
PASS gettysburg/components/Form/__tests__/FocusWrapper.test.jsx
PASS kyoto/components/Formik/__tests__/FieldGroup.test.jsx
PASS gettysburg/inbox-app/components/__tests__/Inbox.test.jsx
PASS london/src/components/ActivityFeed/__tests__/Offer.test.jsx
PASS london/src/components/ActivityFeed/__tests__/AvatarGroup.test.jsx
PASS london/src/utils/__tests__/misc.test.js
PASS gettysburg/search-app/containers/__tests__/CreateSaveSearch.test.js
PASS london/src/shared-apps/Settings/components/__tests__/Settings.test.jsx
FAIL gettysburg/components/AutocompleteTextarea/__tests__/Suggestion.test.jsx
  â— Suggestion â€º renders team correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Suggestion renders team correctly 1".

    - Snapshot
    + Received

      <BaseSuggestion
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<TeamAvatar />}
        fullName="Silicon Valley Product and Marketing Team"
        handle="southbay-prod"
      />

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/AutocompleteTextarea/__tests__/Suggestion.test.jsx:9:5)

  â— Suggestion â€º renders highlighted user correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Suggestion renders highlighted user correctly 1".

    - Snapshot
    + Received

    @@ -1,8 +1,9 @@
      <BaseSuggestion
        avatar={
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "John",
                "id": 34296,
                "last_name": "Skelton",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/AutocompleteTextarea/__tests__/Suggestion.test.jsx:13:5)

 â€º 2 snapshots failed.
PASS london/src/components/__tests__/ActionBar.test.jsx
PASS kyoto/utils/__tests__/events.test.js
PASS london/src/tap/OrgProfile/components/sections/__tests__/Addresses.test.jsx
PASS gettysburg/components/Form/__tests__/FieldGroup.test.js
PASS gettysburg/profile-job-app/components/TPStatusModal/__tests__/TPStatusModal.test.js
PASS london/src/cap/Profile/components/sections/__tests__/Summary.test.jsx
PASS gettysburg/inbox-app/store/reducers/__tests__/count.test.js
FAIL london/src/tap/CreateProfile/components/pages/__tests__/Summary.test.js
  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 2".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Object {
                    "11455": Stub {
                      "first_name": "Blind",
                      "id": 11455,

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/Summary.test.js:22:3)

 â€º 1 snapshot failed.
PASS kyoto/components/Formik/__tests__/InlineFields.test.jsx
PASS kyoto/components/Formik/__tests__/utils.test.js
PASS london/src/tap/OrgProfile/components/sections/__tests__/Headquarters.test.jsx
FAIL london/src/tap/components/__tests__/JobStatusAvatar.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-tp-green-500",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      12 | test("renders correctly", () => {
      13 |   const { wrapper } = shallowRender();
    > 14 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
      16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
      17 | });

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:14:19)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-amber-500",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      13 |   const { wrapper } = shallowRender();
      14 |   expect(wrapper).toMatchSnapshot();
    > 15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
         |                                                                   ^
      16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
      17 | });
      18 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:15:67)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 3".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-red-800",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      14 |   expect(wrapper).toMatchSnapshot();
      15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
    > 16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
         |                                                                   ^
      17 | });
      18 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:16:67)

 â€º 3 snapshots failed.
PASS kyoto/components/Formik/__tests__/BasicForm.test.jsx
PASS london/src/shared-apps/ActivityFeed/store/__tests__/userActivityReducers.test.js
PASS london/src/cap/store/__tests__/candidatePairReducers.test.js
PASS gettysburg/search-app/containers/__tests__/cardContainer.test.js
PASS gettysburg/services/entities/__tests__/pairApiService.test.js
PASS gettysburg/components/Form/__tests__/DeletableChip.test.jsx
PASS gettysburg/components/Flyout/components/__tests__/StatefulViewProfileFlyout.test.jsx
PASS london/src/components/ActivityFeed/__tests__/ActivityDetail.test.jsx
PASS gettysburg/search-app/components/__tests__/SavedSearchActions.test.js
PASS gettysburg/components/JobForm/__tests__/JobFormFields.test.jsx
PASS london/src/tap/store/__tests__/orgSelectors.test.js
FAIL london/src/tap/components/__tests__/ProfileAvatar.test.js
  â— ProfileAvatar â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ProfileAvatar renders 1".

    - Snapshot
    + Received

    @@ -4,12 +4,13 @@
          Object {
            "marginTop": 60,
          }
        }
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
          size={80}
    +     style={null}
          user={
            Object {
              "email": "test@test.com",
              "first_name": "Jack",
              "id": 1,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/ProfileAvatar.test.js:17:5)

  â— ProfileAvatar â€º renders without email or image

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ProfileAvatar renders without email or image 1".

    - Snapshot
    + Received

    @@ -4,12 +4,13 @@
          Object {
            "marginTop": 60,
          }
        }
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
          size={80}
    +     style={null}
          user={
            Object {
              "email": null,
              "first_name": "Jack",
              "id": 1,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/ProfileAvatar.test.js:21:5)

 â€º 2 snapshots failed.
PASS london/src/tap/store/__tests__/orgJobsReducers.test.js
PASS london/src/cap/utils/__tests__/page.test.js
PASS london/src/components/ActivityFeed/__tests__/Interview.test.jsx
PASS gettysburg/platform-dashboard-app/components/__tests__/HealthFilter.test.jsx
PASS london/src/components/NavSearch/__tests__/NavSearchModal.test.jsx
FAIL london/src/components/MainMenu/__tests__/EmployerMenu.test.jsx
  â— renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for hiring manager 1".

    - Snapshot
    + Received

    @@ -19,18 +19,11 @@
        </WithStyles(MenuItem)>
        <WithStyles(MenuItem)
          component={[Function]}
          to="/org/3/profile"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="image.jpg"
            title="Space Picnic"
          />
          <WithStyles(ListItemText)
            primary="Space Picnic"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/EmployerMenu.test.jsx:15:3)

  â— renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for hiring manager 2".

    - Snapshot
    + Received

    @@ -19,18 +19,11 @@
        </WithStyles(MenuItem)>
        <WithStyles(MenuItem)
          component={[Function]}
          to="/org/3/profile"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="image.jpg"
            title="Space Picnic"
          />
          <WithStyles(ListItemText)
            primary="Space Picnic"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/EmployerMenu.test.jsx:17:3)

 â€º 2 snapshots failed.
PASS london/src/components/ActivityFeed/__tests__/MessageSpamReport.test.jsx
PASS london/src/shared-apps/ActivityFeed/containers/__tests__/ActivityPing.test.jsx
PASS london/src/tap/OrgProfile/components/sections/__tests__/Story.test.jsx
PASS london/src/tap/OrgProfile/components/sections/__tests__/Size.test.jsx
PASS london/src/cap/ProfilePreview/containers/__tests__/ProfilePreviewPage.test.js
PASS kyoto/components/Formik/fields/__tests__/Pill.test.jsx
PASS london/src/tap/OrgProfile/components/sections/__tests__/Year.test.jsx
FAIL kyoto/components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js
  â— JobSuggestion â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobSuggestion renders correctly 1".

    - Snapshot
    + Received

    @@ -3,19 +3,12 @@
        suggestionValue="foo"
      >
        <div
          className="flex items-center"
        >
    -     <defaultProps(Avatar)
    +     <JobLogoAvatar
            className="relative"
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-jobs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
            size={28}
            style={
              Object {
                "top": -2,
              }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (utils/testing.jsx:12:19)
      at Object.it (components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js:12:5)

  â— JobSuggestion â€º renders correctly with org

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobSuggestion renders correctly with org 1".

    - Snapshot
    + Received

    @@ -10,19 +10,12 @@
        suggestionValue="foo"
      >
        <div
          className="flex items-center"
        >
    -     <defaultProps(Avatar)
    +     <JobLogoAvatar
            className="relative"
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-jobs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
            size={28}
            src="url"
            style={
              Object {
                "top": -2,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (utils/testing.jsx:12:19)
      at Object.it (components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js:16:5)

 â€º 2 snapshots failed.
FAIL london/src/tap/components/__tests__/JobListItem.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -6,18 +6,11 @@
            "height": 69,
          }
        }
        to=""
      >
    -   <defaultProps(Avatar)
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
    +   <OrgAvatar
          key="org"
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <ListItemText

      16 | test("renders correctly", () => {
      17 |   const { wrapper } = shallowRender();
    > 18 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      19 | });
      20 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobListItem.test.jsx:18:19)

 â€º 1 snapshot failed.
PASS london/src/components/ActivityFeed/__tests__/utils.test.js
PASS gettysburg/components/Form/MultiValueCreator/__tests__/AddButton.test.jsx
PASS london/src/tap/JobEditor/components/sections/__tests__/Role.test.jsx
PASS london/src/tap/Profile/components/__tests__/PreSyncCopy.test.js
PASS gettysburg/services/notifications/__tests__/notifications.test.js
PASS london/src/components/ActivityFeed/__tests__/MessageBounce.test.jsx
PASS gettysburg/components/Email/fields/Jobs/__tests__/Chip.test.js
PASS london/src/cap/ApplicationSubmitted/containers/__tests__/ApplicationSubmittedPage.test.js
PASS london/src/tap/JobEditor/components/sections/__tests__/Omnis.test.jsx
PASS gettysburg/inbox-app/store/reducers/__tests__/loading.test.js
PASS london/src/components/ActivityFeed/__tests__/Application.test.jsx
PASS kyoto/components/Formik/fields/EntitySearch/__tests__/EntitySearch.test.jsx
PASS gettysburg/platform-dashboard-app/components/__tests__/Tabs.test.js
PASS london/src/tap/OrgProfile/components/sections/__tests__/Verticals.test.jsx
PASS gettysburg/profile-user-app/components/intake/__tests__/UserIntakeRecruit.test.jsx
PASS kyoto/components/DraftEditor/__tests__/ReadOnlyDraftEditor.test.jsx
PASS london/src/components/ActivityFeed/__tests__/UserActive.test.jsx
PASS gettysburg/services/entities/__tests__/entityApiServiceUtils.test.js
PASS london/src/components/ActivityFeed/__tests__/Org.test.jsx
PASS gettysburg/components/__tests__/EntityIntakeCompleteness.test.jsx
PASS london/src/components/ActivityFeed/__tests__/Reminder.test.jsx
PASS kyoto/components/ui/__tests__/Snackbar.test.js
PASS kyoto/components/__tests__/Actions.test.jsx
PASS gettysburg/tags-app/containers/__tests__/Tag.test.jsx
PASS kyoto/components/Profiles/__tests__/Org.test.jsx
PASS london/src/components/ResumeUpload/__tests__/ResumeProgressSvg.test.jsx
PASS gettysburg/platform-dashboard-app/store/__tests__/healthSelectors.test.js
FAIL london/src/tap/components/__tests__/OrgBasicInfo.test.jsx
  â— renders correctly for not editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for not editing 1".

    - Snapshot
    + Received

    @@ -1,17 +1,10 @@
      <div
        className="flex"
      >
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <div>
          <h3

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/components/__tests__/OrgBasicInfo.test.jsx:11:3)

  â— renders correctly for not editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for not editing 2".

    - Snapshot
    + Received

    @@ -1,17 +1,10 @@
      <div
        className="flex"
      >
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <div>
          <h3

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/components/__tests__/OrgBasicInfo.test.jsx:13:3)

 â€º 2 snapshots failed.
PASS london/src/shared-apps/Settings/components/__tests__/Option.test.jsx
PASS gettysburg/store/pairsStats/__tests__/reducers.test.js
PASS kyoto/utils/entities/__tests__/maxhire.test.js
PASS london/src/shared-apps/ActivityFeed/components/__tests__/NewActivity.test.jsx
FAIL gettysburg/tags-app/components/__tests__/UpdatedBy.test.js
  â— UpdatedBy â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "UpdatedBy renders 1".

    - Snapshot
    + Received

    @@ -6,17 +6,11 @@
          mapThemrProps={[Function]}
        />
        <div
          className="flex items-center mt1"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    +     <ContactAvatar
            src={null}
            title="Kylo Ren"
          />
          <div
            className="mx1 flex-grow"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (tags-app/components/__tests__/UpdatedBy.test.js:16:5)

 â€º 1 snapshot failed.
PASS gettysburg/components/EntityCard/__tests__/Divider.test.jsx
PASS gettysburg/profile-org-app/components/intake/__tests__/OrgIntake.test.jsx
PASS gettysburg/tags-app/components/__tests__/TagForm.test.jsx
PASS london/src/cap/components/PublicPrivate/__tests__/PublicPrivateModal.test.jsx
PASS london/src/tap/components/__tests__/BottomPane.test.js
PASS kyoto/components/ui/__tests__/ExternalLink.test.jsx
PASS gettysburg/profile-org-app/components/intake/__tests__/CommonFormSections.test.jsx
PASS gettysburg/platform-dashboard-app/store/__tests__/orgLeadReducers.test.js
PASS gettysburg/components/spinner/store/__tests__/reducers.test.js
FAIL london/src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js
  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 1".

    - Snapshot
    + Received

    @@ -35,10 +35,13 @@
                }
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={[Function]}
                  size={100}
                  src={null}
                  style={
                    Object {
    @@ -84,10 +87,13 @@
              <WithStyles(Grid)
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={null}
                  size={100}
                  src="perry.svg"
                  style={Object {}}
                  title="Talentpair"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js:6:3)

  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 2".

    - Snapshot
    + Received

    @@ -35,10 +35,13 @@
                }
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={[Function]}
                  size={100}
                  src={null}
                  style={
                    Object {
    @@ -84,10 +87,13 @@
              <WithStyles(Grid)
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={null}
                  size={100}
                  src="perry.svg"
                  style={Object {}}
                  title="Talentpair"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js:10:3)

 â€º 2 snapshots failed.
PASS london/src/shared-apps/ActivityFeed/store/__tests__/activitySelectors.test.js
PASS london/src/components/MainMenu/__tests__/CanidateMenu.test.jsx
PASS gettysburg/profile-user-app/components/cap-user-preferences/__tests__/CapUserPreferences.test.jsx
PASS london/src/shared-apps/Qa/components/__tests__/Qa.test.js
PASS kyoto/utils/__tests__/draftjs.test.js
PASS gettysburg/components/spinner/store/__tests__/actions.test.js
PASS london/src/shared-apps/Settings/components/__tests__/Page.test.jsx
PASS london/src/cap/ProfilePreview/components/__tests__/ProfilePreview.test.jsx
PASS gettysburg/tags-app/containers/__tests__/Candidates.test.jsx
PASS kyoto/utils/__tests__/components.test.js
PASS kyoto/components/__tests__/Timestamp.test.jsx
PASS london/src/components/__tests__/LinkedInButton.test.js
PASS gettysburg/tags-app/components/__tests__/HeaderSection.test.js
PASS london/src/tap/components/__tests__/ProfileWrapper.test.jsx
PASS london/src/components/Onboarding/ui/__tests__/Tooltip.test.js
PASS gettysburg/store/pairsStats/__tests__/actions.test.js
PASS london/src/tap/store/__tests__/pairFilterReducers.test.js
PASS london/src/shared-apps/Settings/containers/__tests__/SettingsPage.test.js
PASS london/src/cap/store/__tests__/pairFilterReducers.test.js
PASS london/src/auth/components/__tests__/Buttons.test.jsx
FAIL london/src/tap/CreateProfile/components/__tests__/SummaryForm.test.js
  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 2".

    - Snapshot
    + Received

    @@ -11,11 +11,12 @@
          wrap="nowrap"
        >
          <WithStyles(Grid)
            item={true}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Object {
                  "11455": Stub {
                    "first_name": "Blind",
                    "id": 11455,

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/__tests__/SummaryForm.test.js:7:3)

 â€º 1 snapshot failed.
PASS gettysburg/profile-org-app/components/intake/__tests__/OrgIntakeRecruit.test.jsx
PASS kyoto/components/Autocomplete/__tests__/Suggestion.test.js
PASS kyoto/utils/entities/__tests__/misc.test.js
PASS london/src/tap/CreateProfile/components/pages/__tests__/CreateManually.test.js
PASS london/src/components/__tests__/EmptyListMessage.test.js
FAIL london/src/tap/components/__tests__/TeamMemberListItem.test.jsx
  â— TeamMemberListItem â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "TeamMemberListItem renders correctly 1".

    - Snapshot
    + Received

    @@ -1,10 +1,11 @@
      <ListItem
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "Jack",
              "last_name": "Daniel",
            }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/TeamMemberListItem.test.jsx:6:5)

 â€º 1 snapshot failed.
PASS gettysburg/components/Form/__tests__/Checkbox.test.jsx
PASS gettysburg/platform-dashboard-app/components/__tests__/PaginationFooter.test.jsx
PASS gettysburg/components/Intake/__tests__/IntakeColumns.test.jsx
PASS gettysburg/components/Form/__tests__/LocationProximityFieldGroup.test.js
PASS gettysburg/components/Intake/__tests__/IntakeFieldsColumn.test.jsx
PASS gettysburg/components/__tests__/Ripple.test.jsx
PASS gettysburg/components/Flyout/components/__tests__/Flyout.test.jsx
PASS gettysburg/tags-app/components/__tests__/Section.test.js
PASS gettysburg/tags-app/__tests__/App.test.jsx
PASS london/src/cap/components/__tests__/ActivateProfileModal.test.js
PASS london/src/tap/components/__tests__/LockedScreen.test.js
PASS london/src/cap/Signup/components/pages/__tests__/TitleSuccess.test.js
PASS gettysburg/search-app/components/__tests__/FeeAgreementFieldGroup.test.js
PASS gettysburg/components/EntityCard/__tests__/Details.test.jsx
PASS kyoto/services/__tests__/appVersion.test.js
PASS london/src/cap/Signup/components/pages/__tests__/TitleFail.test.js
PASS london/src/cap/Signup/components/pages/__tests__/Welcome.test.js
PASS london/src/tap/components/__tests__/TextButton.test.jsx
PASS kyoto/components/__tests__/Iframe.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/SetRole.test.js
PASS gettysburg/components/EntityCard/__tests__/Subtitle.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/Upload.test.js
PASS gettysburg/components/Table/__tests__/NavigableTableRow.test.jsx
PASS gettysburg/search-app/components/__tests__/ContactInfoFields.test.js
PASS london/src/components/__tests__/Terms.test.jsx
PASS london/src/components/Auth/__tests__/ErrorMsg.test.jsx
PASS london/src/shared-apps/Settings/components/__tests__/EmailFrequencyField.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/TitleCheck.test.js
PASS gettysburg/search-app/components/__tests__/SalaryRangeField.test.js
PASS gettysburg/components/GoldenPairMedal/__tests__/GoldenPairMedal.test.jsx
PASS london/src/components/Onboarding/ui/__tests__/Modal.test.js
PASS london/src/tap/CreateProfile/components/pages/__tests__/Welcome.test.js
PASS london/src/components/Onboarding/ui/__tests__/Examples.test.js
PASS gettysburg/search-app/components/__tests__/ContactFields.test.js
PASS gettysburg/search-app/components/__tests__/CompanyFields.test.js
PASS london/src/utils/__tests__/page.test.js
PASS london/src/components/Auth/__tests__/PageWrapper.test.jsx
PASS gettysburg/profile-user-app/components/intake/__tests__/Resume.test.jsx
PASS gettysburg/search-app/components/__tests__/JobFields.test.js
PASS gettysburg/components/__tests__/HotkeyModal.test.jsx
PASS gettysburg/search-app/components/__tests__/AllFields.test.js
PASS gettysburg/components/layout/index.test.jsx
PASS kyoto/components/__tests__/MenuItemLink.test.jsx
PASS london/src/tap/store/__tests__/pairFilterSelectors.test.js
PASS london/src/cap/store/__tests__/pairFilterSelectors.test.js
PASS london/src/components/__tests__/TextButtonLink.test.jsx
PASS london/src/components/__tests__/PortalRenderer.test.jsx
PASS gettysburg/components/JobForm/__tests__/CreateAddressForm.test.jsx
PASS kyoto/utils/entities/__tests__/org.test.js
PASS london/src/cap/Signup/components/__tests__/CreateWithTerms.test.js
PASS gettysburg/components/__tests__/Loader.test.js
PASS gettysburg/components/Intake/__tests__/OldData.test.jsx
PASS london/src/tap/components/__tests__/AddressFields.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/ResumeSuccess.test.js
PASS kyoto/components/hocs/__tests__/Media.test.jsx
PASS kyoto/components/__tests__/Congrats.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/LocationFail.test.js
PASS gettysburg/platform-dashboard-app/store/__tests__/orgLeadSelectors.test.js
PASS london/src/components/__tests__/ClosedBanner.test.js
PASS london/src/auth/components/__tests__/Actions.test.jsx
PASS london/src/cap/Signup/components/pages/__tests__/ResumeFail.test.js
PASS london/src/cap/Profile/components/__tests__/ActivatedModal.test.jsx
PASS london/src/components/__tests__/Error404.test.js
PASS kyoto/components/ui/__tests__/AnimatedEllipsis.test.jsx
PASS london/src/components/Auth/__tests__/Title.test.jsx
PASS london/src/auth/components/__tests__/Input.test.jsx
PASS london/src/cap/store/__tests__/pairFilterActions.test.js
PASS london/src/tap/store/__tests__/pairFilterActions.test.js
PASS london/src/tap/containers/__tests__/PairPage.test.js
PASS gettysburg/platform-dashboard-app/components/__tests__/Wrapper.test.js
PASS london/src/components/__tests__/Loader.test.js
PASS london/src/components/Onboarding/ui/__tests__/Arrow.test.js
PASS gettysburg/search-app/components/__tests__/SkeletonCard.test.jsx
PASS kyoto/components/Formik/fields/__tests__/Phone.test.jsx
PASS gettysburg/components/Email/fields/__tests__/To.test.jsx
PASS templates/src/__tests__/Job404.test.js
PASS templates/src/__tests__/Wrapper.test.js
PASS templates/src/__tests__/Job.test.js

Summary of all failing tests
FAIL search-app/components/__tests__/BaseFields.test.js
  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = JOBS

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = JOBS 1".

    - Snapshot
    + Received

    @@ -10,18 +10,12 @@
          className="flex items-center justify-between mb2"
        >
          <div
            className="flex items-center"
          >
    -       <defaultProps(Avatar)
    +       <JobAvatar
              className="mr1"
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -           }
    -         }
    -         icon={[Function]}
            />
            <h2
              className="bold m0"
            >
              Jobs

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:168:5)

  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = CANDIDATES

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = CANDIDATES 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            className="flex items-center"
          >
            <CandidateAvatar
              className="mr1"
              dnc={false}
    -         golden={false}
            />
            <h2
              className="bold m0"
            >
              Candidates
    @@ -27,18 +26,11 @@
            disabled={true}
          />
        </div>
        <SourcingEntity
          avatar={
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <JobLogoAvatar
              src="/v1397189042/3f6473457a329fff33b86d5e91a23700.png"
            />
          }
          clearSourcingEntity={[Function]}
          entity={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:180:5)

  â— BaseFields â€º BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = MAXHIRE_CANDIDATES

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "BaseFields BaseFields renders correctly with sourcing entity, disabled save search, activeEntity = MAXHIRE_CANDIDATES 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            className="flex items-center"
          >
            <CandidateAvatar
              className="mr1"
              dnc={false}
    -         golden={false}
            />
            <h2
              className="bold m0"
            >
              Maxhire Candidates
    @@ -27,18 +26,11 @@
            disabled={true}
          />
        </div>
        <SourcingEntity
          avatar={
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-jobs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <JobLogoAvatar
              src="/v1397189042/3f6473457a329fff33b86d5e91a23700.png"
            />
          }
          clearSourcingEntity={[Function]}
          entity={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (search-app/components/__tests__/BaseFields.test.js:191:5)

FAIL ../kyoto/components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx
  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 1".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={false}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      29 |     last_name: "Bar",
      30 |   };
    > 31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
         |                                                ^
      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:31:48)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 2".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={false}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      30 |   };
      31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
    > 32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
         |                                                                                  ^
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:32:82)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 3".

    - Snapshot
    + Received

      <CandidateAvatar
        className="mr1"
        dnc={true}
    -   golden={false}
        src="profile_picture_url"
        title="title"
      />

      31 |   expect(getSuggestionAvatar(result, "title")).toMatchSnapshot();
      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
    > 33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
         |                                                                                 ^
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:33:81)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 4".

    - Snapshot
    + Received

    @@ -1,8 +1,11 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        className="mr1"
    +   classes={Object {}}
    +   golden={false}
        icon={null}
        size={40}
        src="profile_picture_url"
        style={
          Object {

      32 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_candidate" }, "title")).toMatchSnapshot();
      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
    > 34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
         |                                                                        ^
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
      37 |   expect(

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:34:72)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 5".

    - Snapshot
    + Received

    @@ -1,8 +1,11 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        className="mr1"
    +   classes={Object {}}
    +   golden={false}
        icon={null}
        size={40}
        src="profile_picture_url"
        style={
          Object {

      33 |   expect(getSuggestionAvatar({ ...result, status: "do_not_contact" }, "title")).toMatchSnapshot();
      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
    > 35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
         |                                                                                ^
      36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:35:80)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 6".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      34 |   expect(getSuggestionAvatar({ ...result, type: "contact" }, "title")).toMatchSnapshot();
      35 |   expect(getSuggestionAvatar({ ...result, type: "maxhire_contact" }, "title")).toMatchSnapshot();
    > 36 |   expect(getSuggestionAvatar({ ...result, type: "organization" }, "title")).toMatchSnapshot();
         |                                                                             ^
      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
      39 |   ).toMatchSnapshot();

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:36:77)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 7".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      37 |   expect(
      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
    > 39 |   ).toMatchSnapshot();
         |     ^
      40 |   expect(getSuggestionAvatar({ ...result, type: "job" }, "title")).toMatchSnapshot();
      41 | });
      42 | 

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:39:5)

  â— getSuggestionAvatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "getSuggestionAvatar 8".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <JobLogoAvatar
        className="mr1"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-jobs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        src="profile_picture_url"
      />

      38 |     getSuggestionAvatar({ ...result, type: "maxhire_organization" }, "title"),
      39 |   ).toMatchSnapshot();
    > 40 |   expect(getSuggestionAvatar({ ...result, type: "job" }, "title")).toMatchSnapshot();
         |                                                                    ^
      41 | });
      42 | 
      43 | const renderHelper = suggestion => {

      at Object.toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:40:68)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <SuggestionWrapper>
        <CandidateAvatar
          className="mr1"
          dnc={false}
    -     golden={false}
          src={null}
          title="Gravy Potato"
        />
        <div
          className="line-height-normal"

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:50:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 2".

    - Snapshot
    + Received

    @@ -1,9 +1,12 @@
      <SuggestionWrapper>
        <Avatar
          TooltipProps={null}
    +     bg={null}
          className="mr1"
    +     classes={Object {}}
    +     golden={false}
          icon={null}
          size={40}
          src={null}
          style={
            Object {

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:51:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 3".

    - Snapshot
    + Received

    @@ -1,9 +1,12 @@
      <SuggestionWrapper>
        <Avatar
          TooltipProps={null}
    +     bg={null}
          className="mr1"
    +     classes={Object {}}
    +     golden={false}
          icon={null}
          size={40}
          src={null}
          style={
            Object {

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:52:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 4".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <JobLogoAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-jobs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:53:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 5".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <JobLogoAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-jobs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:54:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 6".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <SuggestionWrapper>
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src={null}
        />
        <div
          className="line-height-normal"
        >

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:55:3)

  â— renderNavSearchSuggestion

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renderNavSearchSuggestion 7".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <SuggestionWrapper>
        <CandidateAvatar
          className="mr1"
          dnc={true}
    -     golden={false}
          src={null}
          title="Squeaky Rodriquez"
        />
        <div
          className="line-height-normal"

      44 |   expect(
      45 |     renderNavSearchSuggestion({ suggestion, suggestionValue: getSuggestionValue(suggestion) }),
    > 46 |   ).toMatchSnapshot();
         |     ^
      47 | };
      48 | 
      49 | test("renderNavSearchSuggestion", () => {

      at toMatchSnapshot (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:46:5)
      at Object.renderHelper (components/Formik/fields/EntitySearch/__tests__/NavSearch.test.jsx:56:3)

FAIL components/Merge/__tests__/MergeCandidateModal.test.jsx
  â— DisplayUser

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "DisplayUser 1".

    - Snapshot
    + Received

    @@ -2,11 +2,10 @@
        selected={false}
        to=""
      >
        <CandidateAvatar
          dnc={false}
    -     golden={false}
        />
        <ListItemText
          classes={
            Object {
              "primary": "m0",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/Merge/__tests__/MergeCandidateModal.test.jsx:46:3)

  â— DisplayUser

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "DisplayUser 2".

    - Snapshot
    + Received

    @@ -2,11 +2,10 @@
        selected={false}
        to=""
      >
        <CandidateAvatar
          dnc={false}
    -     golden={false}
        />
        <ListItemText
          classes={
            Object {
              "primary": "m0",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/Merge/__tests__/MergeCandidateModal.test.jsx:47:3)

FAIL components/__tests__/IntakeHistory.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -27,12 +27,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/11143"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Tptest",
                        "id": 11143,
    @@ -203,12 +204,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/11143"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Tptest",
                        "id": 11143,
    @@ -289,12 +291,13 @@
              >
                <a
                  className="flex items-center"
                  href="/#/870"
                >
    -             <mapProps(Avatar)
    +             <UserAvatar
                    size={28}
    +               style={null}
                    user={
                      Stub {
                        "candidate": null,
                        "first_name": "Local",
                        "id": 870,

      25 |   expect(wrapper).toMatchSnapshot();
      26 |   wrapper.setState(sampleUserIntakeHistoryApi);
    > 27 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      28 |   wrapper.setProps({ entity: "organization" });
      29 |   wrapper.setState({ next: null, results: [] });
      30 |   expect(wrapper).toMatchSnapshot();

      at Object.toMatchSnapshot (components/__tests__/IntakeHistory.test.jsx:27:19)

FAIL ../london/src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx
  â— JobTeamMembers â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobTeamMembers renders 1".

    - Snapshot
    + Received

    @@ -26,11 +26,12 @@
              jobId={1}
              key="11149"
              orgId={9001}
              userId={11149}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Eric",
                    "id": 11149,
                    "last_name": "Biewener",
    @@ -49,11 +50,12 @@
              jobId={1}
              key="11150"
              orgId={9001}
              userId={11150}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Marcy",
                    "id": 11150,
                    "last_name": "Jane",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx:38:5)

  â— JobTeamMembers â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobTeamMembers renders 2".

    - Snapshot
    + Received

    @@ -33,11 +33,12 @@
              jobId={1}
              key="11149"
              orgId={9001}
              userId={11149}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Eric",
                    "id": 11149,
                    "last_name": "Biewener",
    @@ -56,11 +57,12 @@
              jobId={1}
              key="11150"
              orgId={9001}
              userId={11150}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
    +           style={null}
                user={
                  Stub {
                    "first_name": "Marcy",
                    "id": 11150,
                    "last_name": "Jane",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/JobTeamMembers/components/__tests__/JobTeamMembers.test.jsx:40:5)

FAIL components/EntityCard/__tests__/CandidateCard.test.jsx
  â— CandidateCard â€º should render with candidate with missing subtitle info

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with missing subtitle info 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:19:5)

  â— CandidateCard â€º should render with candidate with missing omnis

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with missing omnis 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:23:5)

  â— CandidateCard â€º should render with candidate with no last updated

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with no last updated 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:27:5)

  â— CandidateCard â€º should render with candidate with provided chips

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with candidate with provided chips 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips="chips"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:31:5)

  â— CandidateCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard renders without label 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/CandidateCard.test.jsx:42:5)

  â— CandidateCard â€º should render with badge

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "CandidateCard should render with badge 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
            src={null}
          />
        }
        badge={
          <mapProps(Badge)

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/CandidateCard.test.jsx:51:5)

FAIL ../london/src/components/ActivityFeed/__tests__/CandidateSend.test.jsx
  â— Avatar â€º snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Avatar snapshot 1".

    - Snapshot
    + Received

    @@ -1,7 +1,8 @@
    - <mapProps(Avatar)
    + <UserAvatar
        className="mr025 mt025"
    +   style={null}
        user={
          Stub {
            "candidate": 3639,
            "first_name": "Ryan",
            "id": 11527,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/ActivityFeed/__tests__/CandidateSend.test.jsx:24:5)

FAIL ../london/src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx
  â— OrgUserProfile â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgUserProfile renders correctly 1".

    - Snapshot
    + Received

    @@ -52,18 +52,11 @@
              key="2602"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -90,18 +83,11 @@
              key="1"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -128,18 +114,11 @@
              key="2600"
              orgId={3}
              page="companyAdmin"
              userId={11464}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx:21:5)

  â— OrgUserProfile â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgUserProfile renders correctly 2".

    - Snapshot
    + Received

    @@ -58,18 +58,11 @@
              key="2602"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -96,18 +89,11 @@
              key="1"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={
    @@ -134,18 +120,11 @@
              key="2600"
              orgId={3}
              page="companyAdmin"
              userId={2298}
            >
    -         <defaultProps(Avatar)
    -           classes={
    -             Object {
    -               "colorDefault": "bg-tp-jobs",
    -               "root": "rounded",
    -             }
    -           }
    -           icon={[Function]}
    +         <JobLogoAvatar
                src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
                title="Space Picnic"
              />
              <ListItemText
                primary={

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/OrgUserProfile/components/__tests__/OrgUserProfile.test.jsx:34:5)

FAIL components/EntityCard/__tests__/ContactCard.test.js
  â— ContactCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/ContactCard.test.js:15:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:19:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 2".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:20:5)

  â— ContactCard â€º renders without label

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ContactCard renders without label 3".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={null}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/EntityCard/__tests__/ContactCard.test.js:23:5)

FAIL profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:33:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 3".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:34:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 5".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-org-app/components/tap-activation/__tests__/OrgTapActivation.test.jsx:35:3)

FAIL profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx:34:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 2".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-user-app/components/tap-activation/__tests__/UserTapActivation.test.jsx:35:3)

FAIL components/ReportCard/__tests__/ReportCard.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -11,11 +11,12 @@
              }
            }
            className="mr2"
            icon={[Function]}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Object {
                  "first_name": "Test",
                  "last_name": "Recruiter",
                }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (components/ReportCard/__tests__/ReportCard.test.jsx:30:3)

FAIL ../london/src/components/__tests__/AccountOwnerListItem.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex bg-white className"
        foo={1}
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "foo",
              "last_name": "bar",
            }

      22 | test("renders correctly", () => {
      23 |   const { wrapper } = shallowRender();
    > 24 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      25 | 
      26 |   expect(wrapper.setProps({ notificationCount: 7, userActivityId: 4 })).toMatchSnapshot();
      27 | });

      at Object.toMatchSnapshot (src/components/__tests__/AccountOwnerListItem.test.jsx:24:19)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex bg-white className"
        foo={1}
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "foo",
              "last_name": "bar",
            }

      24 |   expect(wrapper).toMatchSnapshot();
      25 | 
    > 26 |   expect(wrapper.setProps({ notificationCount: 7, userActivityId: 4 })).toMatchSnapshot();
         |                                                                         ^
      27 | });
      28 | 
      29 | test("NotificationCountWatcher dispatches the expected actions", () => {

      at Object.toMatchSnapshot (src/components/__tests__/AccountOwnerListItem.test.jsx:26:73)

FAIL components/EntityCard/__tests__/MHContactCard.test.js
  â— MHContactCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHContactCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,16 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<ContactAvatar />}
        badge={<mapProps(Badge) />}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHContactCard.test.js:15:5)

FAIL profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx
  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 1".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:31:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 2".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:32:3)

  â— renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders 3".

    - Snapshot
    + Received

    @@ -12,11 +12,14 @@
                <div
                  className="flex items-center"
                >
                  <Avatar
                    TooltipProps={null}
    +               bg={null}
                    className="bg-grey-200 mr2 grey-600"
    +               classes={Object {}}
    +               golden={false}
                    icon={[Function]}
                    size={40}
                    src={null}
                    style={Object {}}
                    title=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (profile-job-app/components/tap-activation/__tests__/JobTapActivation.test.jsx:33:3)

FAIL ../london/src/components/ActivityFeed/__tests__/Job.test.jsx
  â— Job â€º should match snapshot with one job

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job should match snapshot with one job 1".

    - Snapshot
    + Received

    @@ -18,18 +18,11 @@
        >
          <ListItem
            selected={false}
            to=""
          >
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-orgs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <OrgAvatar
              src={null}
              title="TPCompanyY4aqk80 081D20E"
            />
            <ListItemText
              primary="Ruby Developer081D20E"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/Job.test.jsx:29:5)

  â— Job â€º should match snapshot with one job

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job should match snapshot with one job 2".

    - Snapshot
    + Received

    @@ -18,18 +18,11 @@
        >
          <ListItem
            selected={false}
            to=""
          >
    -       <defaultProps(Avatar)
    -         classes={
    -           Object {
    -             "colorDefault": "bg-tp-orgs",
    -             "root": "rounded",
    -           }
    -         }
    -         icon={[Function]}
    +       <OrgAvatar
              src={null}
              title="TPCompanyY4aqk80 081D20E"
            />
            <ListItemText
              primary="Ruby Developer081D20E"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/Job.test.jsx:34:5)

  â— Job â€º Avatar â€º snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Job Avatar snapshot 1".

    - Snapshot
    + Received

    - <defaultProps(Avatar)
    + <OrgAvatar
        className="mr025 mt025"
    -   classes={
    -     Object {
    -       "colorDefault": "bg-tp-orgs",
    -       "root": "rounded",
    -     }
    -   }
    -   icon={[Function]}
        title="Space Patio"
      />

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/ActivityFeed/__tests__/Job.test.jsx:44:7)

FAIL components/EntityCard/__tests__/EntityCard.test.jsx
  â— EntityCard â€º should match snapshot with all props and single chip

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "EntityCard should match snapshot with all props and single chip 1".

    - Snapshot
    + Received

    @@ -13,11 +13,10 @@
            <div
              className="flex-none"
            >
              <CandidateAvatar
                dnc={false}
    -           golden={false}
              />
            </div>
            <div
              className="flex-auto pl2"
            >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/EntityCard.test.jsx:21:5)

  â— EntityCard â€º should match snapshot with long desc and chips array

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "EntityCard should match snapshot with long desc and chips array 1".

    - Snapshot
    + Received

    @@ -6,11 +6,10 @@
            <div
              className="flex-none"
            >
              <CandidateAvatar
                dnc={false}
    -           golden={false}
              />
            </div>
            <div
              className="flex-auto pl2"
            >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/EntityCard.test.jsx:37:5)

FAIL ../london/src/tap/PairActivity/components/__tests__/PairActivity.test.js
  â— HiringTeamListItem renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "HiringTeamListItem renders correctly 1".

    - Snapshot
    + Received

    @@ -1,9 +1,10 @@
      <div
        className="flex mt1 items-center"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Blind",
              "id": 11455,
              "last_name": "Carbon",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/PairActivity/components/__tests__/PairActivity.test.js:49:3)

FAIL ../london/src/components/MainMenu/__tests__/MainMenu.test.jsx
  â— MainMenu â€º renders correctly for candidate

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for candidate 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Talentpair",
                "id": 11143,
                "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:22:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:27:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 2".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:28:5)

  â— MainMenu â€º renders correctly for recruiter

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for recruiter 3".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "tptest",
                "id": 11142,
                "last_name": "",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:29:5)

  â— MainMenu â€º renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for hiring manager 1".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Jack",
                "id": 2298,
                "last_name": "Daniel",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:35:5)

  â— MainMenu â€º renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MainMenu renders correctly for hiring manager 2".

    - Snapshot
    + Received

    @@ -4,11 +4,12 @@
        <WithStyles(IconButton)
          aria-haspopup="true"
          aria-owns={null}
          onClick={[Function]}
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "Jack",
                "id": 2298,
                "last_name": "Daniel",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/components/MainMenu/__tests__/MainMenu.test.jsx:37:5)

FAIL ../london/src/components/ActivityFeed/__tests__/FeedItem.test.jsx
  â— FeedItem â€º should match snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem should match snapshot 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:27:5)

  â— FeedItem â€º no body

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem no body 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:31:5)

  â— FeedItem â€º no avatar

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem no avatar 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:35:5)

  â— FeedItem â€º subtitle

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FeedItem subtitle 1".

    - Snapshot
    + Received

    @@ -2,11 +2,12 @@
        className="flex flex-auto mb2"
      >
        <div
          className="flex-none pr1"
        >
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "candidate": null,
                "first_name": "Tptest",
                "id": 11143,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (src/components/ActivityFeed/__tests__/FeedItem.test.jsx:39:5)

FAIL components/EntityCard/__tests__/OrgCard.test.js
  â— OrgCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <EntityCard
        avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1472074927/h9xch1tpvurvk1zkg1jm.png"
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/OrgCard.test.js:15:5)

  â— OrgSubtitle â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "OrgSubtitle renders correctly 2".

    - Snapshot
    + Received

    @@ -1,15 +1,8 @@
      <EntityCard
        avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1472074927/h9xch1tpvurvk1zkg1jm.png"
          />
        }
        badge={null}
        chips={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/OrgCard.test.js:22:5)

FAIL components/EntityCard/__tests__/MHCandidateCard.test.jsx
  â— MHCandidateCard â€º should match snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHCandidateCard should match snapshot 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
          />
        }
        badge={<mapProps(Badge) />}
        chips={null}
        description=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHCandidateCard.test.jsx:17:5)

  â— MHCandidateCard â€º should render with candidate with missing subtitle info

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHCandidateCard should render with candidate with missing subtitle info 1".

    - Snapshot
    + Received

    @@ -1,10 +1,9 @@
      <EntityCard
        avatar={
          <CandidateAvatar
            dnc={false}
    -       golden={false}
          />
        }
        badge={<mapProps(Badge) />}
        chips={null}
        description=""

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHCandidateCard.test.jsx:21:5)

FAIL ../london/src/cap/Signup/components/pages/__tests__/Summary.test.js
  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 2".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Stub {
                    "first_name": "Diane",
                    "id": 11146,
                    "last_name": "asdf",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Signup/components/pages/__tests__/Summary.test.js:22:3)

  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 4".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Stub {
                    "first_name": "Diane",
                    "id": 11146,
                    "last_name": "asdf",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Signup/components/pages/__tests__/Summary.test.js:23:3)

FAIL ../london/src/components/MainMenu/__tests__/SharedLinks.test.jsx
  â— AvatarItem

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "AvatarItem 1".

    - Snapshot
    + Received

    @@ -1,9 +1,10 @@
      <WithStyles(MenuItem)
        component="li"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Talentpair",
              "id": 11143,
              "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/SharedLinks.test.jsx:14:3)

  â— AvatarItem

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "AvatarItem 2".

    - Snapshot
    + Received

    @@ -1,10 +1,11 @@
      <WithStyles(MenuItem)
        component={[Function]}
        to="/test"
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Stub {
              "first_name": "Talentpair",
              "id": 11143,
              "last_name": "Test",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/SharedLinks.test.jsx:15:3)

FAIL ../london/src/cap/components/__tests__/ProfileStatus.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -3,11 +3,11 @@
        isLast={false}
      >
        <div
          className="flex items-center mb2"
        >
    -     <withProps(Avatar)
    +     <CompleteAvatar
            className="mr2"
          />
          <ColumnTitle
            className={null}
          >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/cap/components/__tests__/ProfileStatus.test.jsx:14:3)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 4".

    - Snapshot
    + Received

    @@ -3,11 +3,11 @@
        isLast={false}
      >
        <div
          className="flex items-center mb2"
        >
    -     <withProps(Avatar)
    +     <CompleteAvatar
            className="mr2"
          />
          <ColumnTitle
            className={null}
          >

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/cap/components/__tests__/ProfileStatus.test.jsx:19:3)

FAIL ../london/src/cap/Profile/components/sections/__tests__/BasicInfo.test.jsx
  â— renders correctly for editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for editing 2".

    - Snapshot
    + Received

    @@ -10,11 +10,12 @@
          wrap="nowrap"
        >
          <WithStyles(Grid)
            item={true}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Stub {
                  "first_name": "Robustican",
                  "id": 21007,
                  "last_name": "YÃ¥o",

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/cap/Profile/components/sections/__tests__/BasicInfo.test.jsx:14:3)

FAIL components/EntityCard/__tests__/MHOrgCard.test.js
  â— MHOrgCard â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "MHOrgCard renders correctly 1".

    - Snapshot
    + Received

    @@ -1,17 +1,7 @@
      <EntityCard
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<OrgAvatar />}
        badge={<mapProps(Badge) />}
        chips={null}
        description=""
        descriptionTitle="Description"
        details={null}

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (components/EntityCard/__tests__/MHOrgCard.test.js:15:5)

FAIL components/AutocompleteTextarea/__tests__/Suggestion.test.jsx
  â— Suggestion â€º renders team correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Suggestion renders team correctly 1".

    - Snapshot
    + Received

      <BaseSuggestion
    -   avatar={
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    -     />
    -   }
    +   avatar={<TeamAvatar />}
        fullName="Silicon Valley Product and Marketing Team"
        handle="southbay-prod"
      />

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/AutocompleteTextarea/__tests__/Suggestion.test.jsx:9:5)

  â— Suggestion â€º renders highlighted user correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "Suggestion renders highlighted user correctly 1".

    - Snapshot
    + Received

    @@ -1,8 +1,9 @@
      <BaseSuggestion
        avatar={
    -     <mapProps(Avatar)
    +     <UserAvatar
    +       style={null}
            user={
              Stub {
                "first_name": "John",
                "id": 34296,
                "last_name": "Skelton",

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (components/AutocompleteTextarea/__tests__/Suggestion.test.jsx:13:5)

FAIL ../london/src/tap/CreateProfile/components/pages/__tests__/Summary.test.js
  â— snapshots

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshots 2".

    - Snapshot
    + Received

    @@ -19,12 +19,13 @@
                  "item": "py2",
                }
              }
              item={true}
            >
    -         <mapProps(Avatar)
    +         <UserAvatar
                size={80}
    +           style={null}
                user={
                  Object {
                    "11455": Stub {
                      "first_name": "Blind",
                      "id": 11455,

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/Summary.test.js:22:3)

FAIL ../london/src/tap/components/__tests__/JobStatusAvatar.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-tp-green-500",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      12 | test("renders correctly", () => {
      13 |   const { wrapper } = shallowRender();
    > 14 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
      16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
      17 | });

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:14:19)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 2".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-amber-500",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      13 |   const { wrapper } = shallowRender();
      14 |   expect(wrapper).toMatchSnapshot();
    > 15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
         |                                                                   ^
      16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
      17 | });
      18 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:15:67)

  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 3".

    - Snapshot
    + Received

    @@ -1,12 +1,14 @@
      <Avatar
        TooltipProps={null}
    +   bg={null}
        classes={
          Object {
            "root": "bg-red-800",
          }
        }
    +   golden={false}
        icon={[Function]}
        size={40}
        src={null}
        style={Object {}}
        title=""

      14 |   expect(wrapper).toMatchSnapshot();
      15 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.PAUSED } })).toMatchSnapshot();
    > 16 |   expect(wrapper.setProps({ status: { id: TAP_STATUS.CLOSED } })).toMatchSnapshot();
         |                                                                   ^
      17 | });
      18 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobStatusAvatar.test.jsx:16:67)

FAIL ../london/src/tap/components/__tests__/ProfileAvatar.test.js
  â— ProfileAvatar â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ProfileAvatar renders 1".

    - Snapshot
    + Received

    @@ -4,12 +4,13 @@
          Object {
            "marginTop": 60,
          }
        }
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
          size={80}
    +     style={null}
          user={
            Object {
              "email": "test@test.com",
              "first_name": "Jack",
              "id": 1,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/ProfileAvatar.test.js:17:5)

  â— ProfileAvatar â€º renders without email or image

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "ProfileAvatar renders without email or image 1".

    - Snapshot
    + Received

    @@ -4,12 +4,13 @@
          Object {
            "marginTop": 60,
          }
        }
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
          size={80}
    +     style={null}
          user={
            Object {
              "email": null,
              "first_name": "Jack",
              "id": 1,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/ProfileAvatar.test.js:21:5)

FAIL ../london/src/components/MainMenu/__tests__/EmployerMenu.test.jsx
  â— renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for hiring manager 1".

    - Snapshot
    + Received

    @@ -19,18 +19,11 @@
        </WithStyles(MenuItem)>
        <WithStyles(MenuItem)
          component={[Function]}
          to="/org/3/profile"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="image.jpg"
            title="Space Picnic"
          />
          <WithStyles(ListItemText)
            primary="Space Picnic"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/EmployerMenu.test.jsx:15:3)

  â— renders correctly for hiring manager

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for hiring manager 2".

    - Snapshot
    + Received

    @@ -19,18 +19,11 @@
        </WithStyles(MenuItem)>
        <WithStyles(MenuItem)
          component={[Function]}
          to="/org/3/profile"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
    +     <OrgAvatar
            src="image.jpg"
            title="Space Picnic"
          />
          <WithStyles(ListItemText)
            primary="Space Picnic"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/components/MainMenu/__tests__/EmployerMenu.test.jsx:17:3)

FAIL ../kyoto/components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js
  â— JobSuggestion â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobSuggestion renders correctly 1".

    - Snapshot
    + Received

    @@ -3,19 +3,12 @@
        suggestionValue="foo"
      >
        <div
          className="flex items-center"
        >
    -     <defaultProps(Avatar)
    +     <JobLogoAvatar
            className="relative"
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-jobs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
            size={28}
            style={
              Object {
                "top": -2,
              }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (utils/testing.jsx:12:19)
      at Object.it (components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js:12:5)

  â— JobSuggestion â€º renders correctly with org

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "JobSuggestion renders correctly with org 1".

    - Snapshot
    + Received

    @@ -10,19 +10,12 @@
        suggestionValue="foo"
      >
        <div
          className="flex items-center"
        >
    -     <defaultProps(Avatar)
    +     <JobLogoAvatar
            className="relative"
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-jobs",
    -           "root": "rounded",
    -         }
    -       }
    -       icon={[Function]}
            size={28}
            src="url"
            style={
              Object {
                "top": -2,

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (utils/testing.jsx:12:19)
      at Object.it (components/Formik/fields/EntitySearch/__tests__/suggestionCmps.test.js:16:5)

FAIL ../london/src/tap/components/__tests__/JobListItem.test.jsx
  â— renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly 1".

    - Snapshot
    + Received

    @@ -6,18 +6,11 @@
            "height": 69,
          }
        }
        to=""
      >
    -   <defaultProps(Avatar)
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
    +   <OrgAvatar
          key="org"
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <ListItemText

      16 | test("renders correctly", () => {
      17 |   const { wrapper } = shallowRender();
    > 18 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      19 | });
      20 | 

      at Object.toMatchSnapshot (src/tap/components/__tests__/JobListItem.test.jsx:18:19)

FAIL ../london/src/tap/components/__tests__/OrgBasicInfo.test.jsx
  â— renders correctly for not editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for not editing 1".

    - Snapshot
    + Received

    @@ -1,17 +1,10 @@
      <div
        className="flex"
      >
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <div>
          <h3

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/components/__tests__/OrgBasicInfo.test.jsx:11:3)

  â— renders correctly for not editing

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "renders correctly for not editing 2".

    - Snapshot
    + Received

    @@ -1,17 +1,10 @@
      <div
        className="flex"
      >
    -   <defaultProps(Avatar)
    +   <OrgAvatar
          className="mr1"
    -     classes={
    -       Object {
    -         "colorDefault": "bg-tp-orgs",
    -         "root": "rounded",
    -       }
    -     }
    -     icon={[Function]}
          src="http://public.crunchbase.com/t_api_images/v1454484002/ardsmj5wblwk16s7turl.png"
          title="Space Picnic"
        />
        <div>
          <h3

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/components/__tests__/OrgBasicInfo.test.jsx:13:3)

FAIL tags-app/components/__tests__/UpdatedBy.test.js
  â— UpdatedBy â€º renders

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "UpdatedBy renders 1".

    - Snapshot
    + Received

    @@ -6,17 +6,11 @@
          mapThemrProps={[Function]}
        />
        <div
          className="flex items-center mt1"
        >
    -     <defaultProps(Avatar)
    -       classes={
    -         Object {
    -           "colorDefault": "bg-tp-orgs",
    -         }
    -       }
    -       icon={[Function]}
    +     <ContactAvatar
            src={null}
            title="Kylo Ren"
          />
          <div
            className="mx1 flex-grow"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.it (tags-app/components/__tests__/UpdatedBy.test.js:16:5)

FAIL ../london/src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js
  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 1".

    - Snapshot
    + Received

    @@ -35,10 +35,13 @@
                }
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={[Function]}
                  size={100}
                  src={null}
                  style={
                    Object {
    @@ -84,10 +87,13 @@
              <WithStyles(Grid)
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={null}
                  size={100}
                  src="perry.svg"
                  style={Object {}}
                  title="Talentpair"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js:6:3)

  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 2".

    - Snapshot
    + Received

    @@ -35,10 +35,13 @@
                }
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={[Function]}
                  size={100}
                  src={null}
                  style={
                    Object {
    @@ -84,10 +87,13 @@
              <WithStyles(Grid)
                item={true}
              >
                <Avatar
                  TooltipProps={null}
    +             bg={null}
    +             classes={Object {}}
    +             golden={false}
                  icon={null}
                  size={100}
                  src="perry.svg"
                  style={Object {}}
                  title="Talentpair"

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/pages/__tests__/SyncWithLinkedIn.test.js:10:3)

FAIL ../london/src/tap/CreateProfile/components/__tests__/SummaryForm.test.js
  â— snapshot

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "snapshot 2".

    - Snapshot
    + Received

    @@ -11,11 +11,12 @@
          wrap="nowrap"
        >
          <WithStyles(Grid)
            item={true}
          >
    -       <mapProps(Avatar)
    +       <UserAvatar
    +         style={null}
              user={
                Object {
                  "11455": Stub {
                    "first_name": "Blind",
                    "id": 11455,

      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;
    > 16 |     if (cmp.length) expect(cmp.props().render(renderArgs)).toMatchSnapshot();
         |                                                            ^
      17 |   }
      18 | }
      19 | 

      at toMatchSnapshot (../kyoto/utils/testing.jsx:16:60)
      at Object.<anonymous>.test (src/tap/CreateProfile/components/__tests__/SummaryForm.test.js:7:3)

FAIL ../london/src/tap/components/__tests__/TeamMemberListItem.test.jsx
  â— TeamMemberListItem â€º renders correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "TeamMemberListItem renders correctly 1".

    - Snapshot
    + Received

    @@ -1,10 +1,11 @@
      <ListItem
        selected={false}
        to=""
      >
    -   <mapProps(Avatar)
    +   <UserAvatar
    +     style={null}
          user={
            Object {
              "first_name": "Jack",
              "last_name": "Daniel",
            }

      10 | export function basicSnapshot(Cmp, props, renderArgs, renderCmpSelector) {
      11 |   const wrapper = shallow(<Cmp {...props} />);
    > 12 |   expect(wrapper).toMatchSnapshot();
         |                   ^
      13 | 
      14 |   if (renderArgs !== undefined) {
      15 |     const cmp = renderCmpSelector ? wrapper.find(renderCmpSelector) : wrapper;

      at toMatchSnapshot (../kyoto/utils/testing.jsx:12:19)
      at Object.test (src/tap/components/__tests__/TeamMemberListItem.test.jsx:6:5)


Snapshot Summary
 â€º 96 snapshots failed from 39 test suites. Inspect your code changes or re-run jest with `-u` to update them.

Test Suites: 39 failed, 555 passed, 594 total
Tests:       60 failed, 2412 passed, 2472 total
Snapshots:   96 failed, 1850 passed, 1946 total
Time:        197.791s
Ran all test suites in 4 projects.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

travis_time:end:336cc0cc:start=1536086808305318795,finish=1536087008555912085,duration=200250593290
[0K
[31;1mThe command "yarn test:ci --maxWorkers=2 && yarn test:ci:angular --maxWorkers=2 && git rev-parse HEAD | tee ~/.cache/talentpair/last-green-commit" exited with 1.[0m
travis_time:start:255a902c
[0K$ yarn lint
yarn run v1.9.4
$ yarn lint:css && yarn lint:js
$ stylelint "**/*.less" "**/*.css"
$ eslint --ext .jsx,.js ./
Done in 80.39s.

travis_time:end:255a902c:start=1536087008578269316,finish=1536087089425200965,duration=80846931649
[0K
[32;1mThe command "yarn lint" exited with 0.[0m
travis_time:start:239273b6
[0K$ yarn flow check
yarn run v1.9.4
$ flow check
Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:104:29
   104|   const avatar = <Avatar bg="bg-tp-blue" icon={PersonIcon} {...props} />;
                                    ^^^^^^^^^^^^ [2]


Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:120:14
   120|   <Avatar bg="bg-tp-orgs" icon={PermContactCalendarIcon} {...props} />
                     ^^^^^^^^^^^^ [2]


Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:164:14
   164|   <Avatar bg="bg-tp-orgs" icon={GroupIcon} {...props} />
                     ^^^^^^^^^^^^ [2]


Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:168:44
   168|   <Avatar classes={{ root: "rounded" }} bg="bg-tp-orgs" icon={BusinessIcon} {...props} />
                                                   ^^^^^^^^^^^^ [2]


Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:172:14
   172|   <Avatar bg="bg-tp-jobs" icon={CardTravelIcon} {...props} />
                     ^^^^^^^^^^^^ [2]


Error ----------------------------------------------------------------------------- kyoto/components/ui/Avatars.jsx:36:8

null or undefined [1] is incompatible with string [2].

   kyoto/components/ui/Avatars.jsx:36:8
    36|   bg?: ?string,
               ^^^^^^^ [1]

References:
   kyoto/components/ui/Avatars.jsx:176:44
   176|   <Avatar classes={{ root: "rounded" }} bg="bg-tp-jobs" icon={CardTravelIcon} {...props} />
                                                   ^^^^^^^^^^^^ [2]



Found 6 errors
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

travis_time:end:239273b6:start=1536087089432526931,finish=1536087149549636349,duration=60117109418
[0K
[31;1mThe command "yarn flow check" exited with 1.[0m
travis_fold:start:cache.2
[0Kstore build cache
travis_time:start:198ecff6
[0K
travis_time:end:198ecff6:start=1536087149556455399,finish=1536087149561734474,duration=5279075
[0Ktravis_time:start:2bde4337
[0K[32;1mnothing changed, not updating cache[0m

travis_time:end:2bde4337:start=1536087149568137280,finish=1536087155698266423,duration=6130129143
[0Ktravis_fold:end:cache.2
[0K
Done. Your build exited with 1.

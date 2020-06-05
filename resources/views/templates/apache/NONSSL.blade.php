<VirtualHost *:80>
  ServerName {{ $domain_without_www }}
  ServerAlias  mail.{{ $domain_without_www }} www.{{ $domain_without_www }}
  DocumentRoot /home/{{ $username }}/public_html
  <Directory "/home/{{ $username }}/public_html">
    Options +SymLinksIfOwnerMatch -Indexes
    AllowOverride All
  </Directory>
  ServerAdmin {{ $username }}@localhost
  UseCanonicalName Off
  DirectoryIndex index.php index.php7 index.php5 index.perl index.pl index.plx index.ppl index.cgi index.jsp index.jp index.phtml index.shtml index.xhtml index.html index.htm index.js
      
  SuexecUserGroup {{ $username }} {{ $username }}
  <FilesMatch ".php$"> 
         SetHandler "proxy:unix:/etc/endurance/configs/php/php72/{{ $domain_without_www }}.sock|fcgi://localhost/"          
   </FilesMatch>

</VirtualHost>
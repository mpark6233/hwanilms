# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a WordPress 6.x installation for the Hwanil Middle School website (www.hwanil.ms.kr). The site uses:
- **Theme**: Avada with a custom child theme (Avada-Child-Theme)
- **Database**: MariaDB 10.5 on AWS RDS
- **PHP Version**: 8.3.10
- **Environment**: Linux/Apache with mod_rewrite enabled

## Key Plugins

- **KBoard** - Korean bulletin board system
- **Wordfence** - Security plugin with WAF enabled
- **Fusion Builder/Core** - Page builder (comes with Avada theme)
- **Ultimate Member** - User management
- **WP Fastest Cache** - Caching plugin
- **The Events Calendar** - Event management
- **TablePress** - Table management
- **Photo Gallery** - Media galleries

## Development Commands

### Database Access
```bash
# Database credentials are stored in wp-config.php
# DB_NAME: db_hwanilms
# DB_HOST: AWS RDS endpoint
```

### Cache Management
```bash
# Clear WP Fastest Cache
rm -rf wp-content/cache/all/*
rm -rf wp-content/cache/wpfc-minified/*
```

### File Permissions
```bash
# WordPress requires write permissions for uploads
chown -R nginx:nginx wp-content/uploads/
chmod -R 755 wp-content/uploads/
```

### Debugging
```php
// Enable debug mode in wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Important Configuration Files

- **wp-config.php** - Main WordPress configuration with database credentials and AWS keys
- **.htaccess** - URL rewriting rules for permalinks
- **wordfence-waf.php** - Wordfence Web Application Firewall bootstrap
- **wp-content/themes/Avada-Child-Theme/** - Custom theme modifications

## Architecture Notes

### Theme Structure
The site uses Avada parent theme with a child theme for customizations. All custom CSS and PHP modifications should be made in the child theme to preserve updates:
- Custom styles: `wp-content/themes/Avada-Child-Theme/style.css`
- Custom functions: `wp-content/themes/Avada-Child-Theme/functions.php`

### Content Organization
- Korean content is heavily used throughout the site
- KBoard plugin handles most bulletin boards and announcements
- File paths often contain Korean characters (UTF-8 encoded)

### Security Considerations
- Wordfence WAF is active with logs in `wp-content/wflogs/`
- AWS SDK is installed via Composer for S3/CloudFront integration
- Memory limits are set to 512MB for both WP and PHP

### Performance
- WP Fastest Cache is configured with minification
- Cache files are stored in `wp-content/cache/`
- Static resources may be served via CloudFront

## Development Workflow

1. **Making Theme Changes**: Always work in the child theme directory
2. **Plugin Updates**: Test in a staging environment first as this is a production site
3. **Database Changes**: Use WordPress migration tools or WP-CLI when available
4. **Cache Clearing**: Clear both WP Fastest Cache and any CDN cache after changes
5. **Security**: Never commit sensitive credentials; they're already in wp-config.php

## AWS Integration

The site uses AWS services:
- **RDS**: Database hosting
- **S3/CloudFront**: Likely for media storage (AWS SDK present)
- Credentials are defined in wp-config.php as constants
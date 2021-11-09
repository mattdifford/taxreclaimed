The initial install steps will follow the Jekyll installation guide found [here](https://jekyllrb.com/docs/)

Once installed, the process to run the build/serve commands are slightly different than shown.

Because we have 1 repository generating all the sites, we have an initial config file which sets variables which are used across all sites. We then have individual config files for each of the sites which sets variables at a site-specific level (e.g. the name of the site, the URL of the site, the Storyblok API settings). This means that in order to run the build/serve commands, you need to append a `--config` flag which tells the process which config file(s) to use. For example, to build the QuoteSOS site, the command will be `bundle exec jekyll serve --config _config.yml,_config.quotesos.yml`, telling the site to use the main config, followed by the site specific config. As you may expect, in order to build the other versions of the site, the final config file is changed to reflect the site you're wanting to build, e.g.:

`bundle exec jekyll serve --config _config.yml,_config.homesos.yml`

`bundle exec jekyll serve --config _config.yml,_config.moneysos.yml`


-----

The process for generating a new site is:

1. Duplicate one of the spaces in Storyblok
2. Duplicate a config file, renaming it to use the site name. The variables within the config file can then be updated to use the correct values for the site
3. Duplicate a variables file in the '_sass' directory, and update the variables to use the colours/fonts for this site

-----

For adding new features, the functionality will generally follow:

1. Add the component to Storyblok, along with the relevant fields
2. Checkout the master branch. Add a file to `_includes` matching the component name (e.g. `header_image` in Storyblok becomes `header_image.html`), and push the empty file to master, to ensure that the live site is still able to build correctly. Once this is done, you can checkout your update branch and begin the update.
3. Add a file to the `_sass/template` directory matching the component name (this will be where the code is actually written), and a file in `assets/css` (this is just the import to generate the CSS for the site. It will have an import for the mixins file, and an import for the file created in `_sass/template`


# Contributing to OUI

OUI is an open source repo where anyone can contribute, and only Optimizely employees have permission to create an npm release.

## :pushpin: Install & Run

Requires [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

1. `git clone https://github.com/optimizely/oui.git && cd oui`
1. `yarn install`

Then you can run and develop locally:

* `yarn storybook` - launch React Storybook locally
* `yarn build-storybook` - build static Storybook for documentation
* `yarn test` - test code for syntax errors


## :pencil: Develop

1. Create branch: `git checkout -b username/branch-name`
2. Make and commit your changes
3. Update `CHANGELOG.md` and note your changes directly under "Unreleased":

    ```
    ## Unreleased
    ### Added/Changed/Deprecated/Removed/Fixed/Security
    - [Release/Feature/Patch] Describe your change here. (#GITHUB_ISSUE)
    ```

    > **Note:** please do not create a new version number header, this is done only during release.

4. Verify your OUI changes work as expected in the Optimizely repo.

    Use npm link: `cd ~/optimizely && npm link ~/optimizely-oui`

    Or the long-hand version:

    ```
    cd ~/projects/optimizely-oui    # go into package directory
    npm link                        # creates global link
    cd ~/projects/optly             # go into some other package directory
    npm link optimizely-oui         # installs your local package
    ```

5. `git push` your changes to GitHub
6. [Open a pull request](https://github.com/optimizely/oui/compare) of your branch, add at least one reviewer
    > **Making a breaking change?** Please [update the Optimizely app](https://github.com/optimizely/oui/issues/360) and bump the `package.json` OUI version to prevent unreleased changes from blocking future releases.

## :warning: Pre-Release

Don't forget these before you create a release:

1. Re-build Storybook documentation: `yarn build-storybook`
2. Export your component in main.js: `export { default as TheName } from './components/TheName';`
3. Include details in `Changelog.md` of your changes and the related GitHub issue
4. `git push` your changes to GitHub.
5. Open a pull request comparing your feature `branch-name` against `devel`.

## :ship: Release a New Version

Both UI Engineers and the Frontend team have permission to release OUI via `npm version ...`:

1. Get latest code: `git checkout devel && git pull && git checkout master && git pull`
2. Merge your changes: `git merge devel`
3. Add a new header to `CHANGELOG.md` under “Unreleased” with the [new version number](https://medium.com/design-optimizely/how-to-version-your-ui-library-1c7a1b7ee23a):

    ```
    ## Unreleased

    ## 31.0.0 - 2018-04-13
    - [Release] Added a cool breaking change. (#999)
    ```
4. Commit to master: `git add . && git commit -a -m 'Prep for new release version x.y.z'`
5. Run one of these depending on the highest importance issue this release:
    * `[Patch]` changes: `npm version patch`
    * `[Feature]` changes: `npm version minor`
    * `[Release]` changes: `npm version major`
6. [Create a new release on GitHub](https://github.com/optimizely/oui/releases/new). It should [look like this](https://www.dropbox.com/s/1nln5ttbxfbacuv/Screenshot%202015-09-02%2011.31.21.png):
    * Select the new tag version
    * Leave “Release title” blank
    * Paste in “Unreleased” contributions from the `CHANGELOG.md` release notes
7. Bump the OUI version number in Optimizely's [`package.json`](https://github.com/optimizely/optimizely/blob/devel/src/www/frontend/package.json) and [test to ensure compatibility](https://docs.google.com/document/d/1TTfdhCSH7mPBeUzVme99qHR-QsFg7PTKP2lGqB9Dk3Y/edit#heading=h.ktasdjfn5j1h).
8. You're done :sunglasses:

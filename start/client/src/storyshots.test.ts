import initStoryshots from "@storybook/addon-storyshots";
/**
 * This creates visual snapshots from your app.
 * Beware that snapshots need to be updated manually
 * This wont happen on CI
 *
 * So if you are fine with the changes you made to you markup
 * you need to run jest once with the -u or --updateSnapshot option
 *
 */
initStoryshots();

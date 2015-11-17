React Analytics

How to use.

1. Add this repo to the app `package.json` file.

2. Import the file:
    import analytics from 'dgx-react-ga';

    let config = analytics.config,
        ga = analytics.ga;

    // OR

    import {config, ga} from 'dgx-react-ga';

3. Use the exposed object:
    // Outputs the GA dev or prod code. The parameter
    // passed is a boolean with the app's environment
    let gaCode = config.google.code(env.isProduction);

    /*
     * Expose the GA event functions
     */
    // Track a general event:
    ga._trackGeneralEvent('category', 'action', 'label');

    // Or create a function with a specific category:
    let trackLists = ga._trackEvent('Book Lists');

    // Now you can pass in the action and label, and the
    // function will always track with 'Book Lists' as the category:
    trackLists('action', 'label');

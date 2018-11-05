<img src="./src/logo.png" alt="Zetch logo">

# Zetch

A Zeplin extension for designers and developers to work with a design system by converting the Zeplin-generated CSS into a list of classes from an existing stylesheet that match the selected element.

## How it works

Zetch outputs CSS helper classes that match the selected Zeplin layer. This allows the developer to copy the outputted CSS classes and apply them directly to the selected HTML element instead of duplicating CSS that already exists by copying the CSS class created by the default Zeplin output.

## Set up

* Clone the repository
* Run npm install
* Add your CSS file of helper classes inside the `src` directory
* Run `$ cssparser cssFile -o outputFile` (replace cssFile and outputFile with your original CSS file name and intended JSON file name). `outputFile` will be your CSS file converted into JSON format
* In the root directory, run `npm start` to locally run your Zeplin plugin
* In Zeplin, click `extensions > manage project extensions`, hold down the `option` key and click `Add local extension`, choose the default suggested local URL
* Select an element on your Sketch file in Zeplin and look below the default Zeplin output. You should see a `Zetch` section with a list of classes from your uploaded CSS file that match the selected element

## Coming soon

Once Zeplin adds an API that allows you to fetch data from external servers, we will add the capability to upload a CSS file and reference it via Zeplin instead of requiring you to manually add the CSS file to the project and run `cssparser` to convert it to JSON.

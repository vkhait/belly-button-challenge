// Make a constant variable to place the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

 //  Initialise the plots

 function init() {

    // Select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

   
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);
        // Make a variable for sample names
        let names = data.names;

        // Place sample names to the dropdown menu
        names.forEach((name) => {
            
            // Append each name to the dropdown menu as an option

            dropdownMenu.append("option")
            .text(name)
            .property("value",name);
        });

        // Make a variable for the first sample name
        let first = names[0];

        // Call functions for plots
        demoInfo(first);
        barChart(first);
        bubbleChart(first);
    

    });
};

// Make the Demographic information panel


function demoInfo(sampleId) {

    // Fetch the JSON data 
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Get all metadata
        let metadata = data.metadata;

        // Filter data on the selected ID values
        let selValue = metadata.filter(meta => meta.id == sampleId);

        // Make a variable for the first sample ID

        let firstID = selValue[0];

        // Clear metadata info
        d3.select("#sample-metadata").html("");

        // Use Object.entries function to add new key-value pairs to the Demographic panel
        Object.entries(firstID).forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Make the bar chart

function barChart(sampleId) {

    // Fetch the JSON data
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Get samples data

        let samples = data.samples;

        // Filter data on the selected ID values
        let selValue = samples.filter(sample => sample.id == sampleId);

        // Make a variable for the first sample ID

        let firstID = selValue[0];

        //Plot the bar chart

        let trace = [{
            // Slice 10 OTUs found
            x: firstID.sample_values.slice(0,10).reverse(),
            y: firstID.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            text: firstID.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }];
        // Setup the layout
        let layout = {
            title: "Top 10 OTUs Found"
        };
        
        // Call Plotly to plot the bar chart
        Plotly.newPlot("bar", trace, layout)
    });

}

//Make the bubble chart

function bubbleChart(sampleId) {

    // Fetch the JSON data
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Get samples data

        let samples = data.samples;

        // Filter data on the selected ID values
        let selValue = samples.filter(sample => sample.id == sampleId);

        // Make a variable for the first sample ID

        let firstID = selValue[0];

        //Plot the bar chart

        let trace = [{
            // Slice 10 OTUs found
            x: firstID.otu_ids,
            y: firstID.sample_values,
            text: firstID.otu_labels,
            mode: "markers",
            marker: {
                size: firstID.sample_values,
                color: firstID.otu_ids,
                colorscale: "Blackbody"
            }
        }];
        

        // Set up thew the layout
        let layout = {
            xaxis: {title: "OTU ID"}
        };

        // Use Plotly to plot the data in a bubble chart
        Plotly.newPlot("bubble", trace, layout);
        });
}

// Function that changes dashboard when sample change
function optionChanged(sampleId) {
    demoInfo(sampleId);
    barChart(sampleId);
    bubbleChart(sampleId);
}

init();













    
    

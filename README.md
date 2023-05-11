# belly-button-challenge

In this project, I have built an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


The following steps were completed:

Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Before creating the charts, I created the dropdown menu to be able to select the sample.

 Next, I made a function to display the sample metadata, i.e., an individual's demographic information on a panel. I used filter function to filter through the file based on the value of the sample. The variable I created for "value", I will later use to update the dashboard every time the sample is changed.

Then , I created a horizontal bar chart to display the top 10 OTUs found in the sample.

Next, I created a bubble chart that displays each sample.

In both charts I used filter function to filter based on the value of the sample. similar to the Demographic panel code

At the end of the code I made a fucntion that updates all the plots when a new sample is selected. 

Last step was to deploy the app to GitHub Pages.

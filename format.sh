#!/bin/bash
# this file was used to make an initial working csv file from the one given 
while read -d "," line
do
   echo "Record is : $line"
   echo "$line" >> formattedBins.csv
done < bins.csv
# This is a work in progress pokemon calculator. 

The basic functions include building a 6 pokemon team and calculating type disadvantages in order to better inform the user of the teams weaknesses.

All information is retrieved via API from POKEAPI.

A sign-in function is available that allows users to sign in and sync data to a Firebase RTDB. What this means is that you can authenticate via google authentication, save and sync a team and then process to log into another device and have your teams loadable.

If you do not wish to sign in pokemon team data is stored locally aswell to ensure the created teams are not lost.

Basic functionality it picking 6 pokemon, and clicking "get data". In order to save a team locally hit "Save 1" or similar. If you wish to save that to a db then log in and hit save then sync. 

Formatting was done by styling for both mobile and desktop with the same code. I have plans to later iplement a mobile site which would have more accebible proportion and visibility.
